import express from 'express'
import { MongoConnection } from './db/mongo-connect'
import 'dotenv/config'
import { routes } from './routes/routes'


// Const de inicialização
const server = express()

const port = process.env.PORT 

// Inicialização database
MongoConnection.inicialize()

// define object notation para o express
server.use(express.json())

server.use(routes)

// inicializa o servidor
server.listen(port,() => console.log(`listening on ${port}`))

