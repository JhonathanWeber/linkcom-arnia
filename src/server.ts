import express from 'express'
import { MongoConnection } from './db/mongo-connect'
import 'dotenv/config'
import { routes } from './routes/routes'

const server = express()

const port = process.env.PORT

MongoConnection.inicialize()

server.use(express.json())

server.use(routes)

server.listen(port, () => console.log(`listening on ${port}`))

