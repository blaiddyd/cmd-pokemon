const express = require('express')
const readline = require('readline')
const router = express.Router()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

router.get('/welcome_script', (req, res) => {
  res.send({
    welcome: `Oak: Hello there! Welcome to the world of POKEMON! My name is OAK! People call me the POKEMON PROF!\n
    Oak: This world is inhabited by creatures called POKEMON! For some people, POKEMON are pets. Others use them for fights. Myself... I study POKEMON as a profession.\n`,
  })
  
})

module.exports = router