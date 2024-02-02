import mongoose  from "mongoose";
import "dotenv/config"

const db =  mongoose

export class MongoConnection {
    static async inicialize(){
        try {
            db.connection.on('connected', () => console.log('Connected to MongoDB! ') )
            db.connection.on('open', () => console.log('Open connection from MongoDB!') )
            db.connection.on('disconnected', () => console.log('Disconnected from MongoDB') )
            db.connection.on('reconnected', () => console.log('reconnected from MongoDB') )
            db.connection.on('disconnecting', () => console.log('disconnecting from MongoDB') )
            db.connection.on('close', () => console.log('close connection to MongoDB') )
            db.connect(process.env.MONGO_URL as string,{
            serverSelectionTimeoutMS:5000,

            // solicitação de config pro db 
            serverApi:{
                version: '1',
                strict: true,
                deprecationErrors: true, 

            },
            dbName: 'linkcom',
        })

        } catch (err) {
            console.log(`connection database failed: ${err}`)

        }
    } 
    static finish(){
        try {

            db.connection.close()
            
        } catch (err) {
            console.log(` failed close connection from mongodb: ${err}`)

            
        }
    }
}