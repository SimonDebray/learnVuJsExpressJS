const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world!'
  })
})

app.get('/', (req, res) => {
  res.send({
    message: 'coucou'
  })
})

app.set('port', process.env.PORT || 8081)

const server = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + server.address().port)
})
