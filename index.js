require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const PORT =  process.env.PORT || 5000
const cors = require('cors')
const router = require('./src/routes/index')
const { response } = require('./src/helpers/response')


app.set('view engine', 'ejs');

app.use(cors())

// app.use(morgan('dev'))
app.use(express.static( "public" ));

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/', router)
app.use('/upload', express.static('./images'))

app.get('/', (req, res) => {
  res.json({
    'name': 'Hanif Kumara',
    'email': 'hanifkumara@gmail.com'
  })
})

app.use('*', (req, res, next) => {
  const error = new Error('URL Not Found')
  error.status = 400
  return next(error)
})

app.use((err, req, res, next) => {
  console.log("err message =====>", err.message)
  response(res, err.status = 500, null, { message: err.message })
})

server.listen(PORT, ()=>{
  console.log(`Server is running port ${PORT}`)
})