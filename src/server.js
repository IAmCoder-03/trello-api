import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, hostname, () => {
  console.log(`Hello Anh Tuan Dev, I am running server at http://${hostname}:${port}`)
})