const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const axios = require('axios')

const api = require('./api')
const scenario = require('./scenario')

const port = process.env.PORT || 5000

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: true }))
app.use(helmet())
app.use('/api', api)
app.use('/scenario', scenario)

app.listen(port, () => {
  axios.get('/scenario/welcome_script')
  .then((res) => {
    console.log(res.data.welcome)
  }).catch((err) => {
    console.error(err)
  })
})