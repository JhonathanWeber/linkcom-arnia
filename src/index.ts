import express from 'express'
import 'dotenv/config'

const server = express()
const port = 3001

server.use(express.json())
server.get('/', (req,res) => {
    res.send('test 3')
})
server.listen(port,() => console.log('Server running'))

