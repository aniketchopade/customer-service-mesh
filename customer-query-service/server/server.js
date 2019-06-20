const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const api = require('../api/customerquery')

const start = (options) => {
  return new Promise((resolve, reject) => {
    const app = express()
    app.use(morgan('dev'))
    app.use(helmet())
    app.use((err, req, res, next) => {
      reject(new Error('Something went wrong!, err:' + err))
      res.status(500).send('Something went wrong!')
    })
    api(app, options)
    const server = app.listen(80, () => resolve(server))
  })
}

module.exports = Object.assign({}, {start})
