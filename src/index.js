import 'dotenv/config'
import express from 'express'

const server = express()
const port = process.env.PORT

server.use(express.json())
server.get('/', (req,res) => {
    res.send('test 2')
})
server.listen(port,() => console.log('Server running'))

