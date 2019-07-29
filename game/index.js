const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const axios = require('axios')
const readline = require('readline')

const api = require('./api')
const scenario = require('./scenario')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const port = process.env.PORT || 5000

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: true }))
app.use(helmet())
app.use('/api', api)
app.use('/scenario', scenario)

var player = {}

app.listen(port, () => {
  axios.get(`http://localhost:${port}/scenario/welcome_script`)
  .then((res) => {
    console.log(res.data.welcome)
    rl.question(`First, what is your name?\n`, (name) => {
      
      rl.close()
    })
  })
})