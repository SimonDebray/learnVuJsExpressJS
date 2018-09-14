const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const admin = require('firebase-admin')

let serviceAccount = require('../src/config/ServiceAccount.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

let db = admin.firestore()

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
  db.collection('users').get()
    .then((snapshot) => {
      let result = []
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          data: doc.data()
        })
        console.log(result)
        console.log(doc.id, '=>', doc.data())
      })
      res.send(result)
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    })
})

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} registered`
  })
})

app.set('port', process.env.PORT || 8081)

const server = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + server.address().port)
})
