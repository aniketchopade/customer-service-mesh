'use strict'
const {EventEmitter} = require('events')
const server = require('./server/server')
const repository = require('./repository/repository')
const mediator = new EventEmitter()

console.log('--- Customer Query Service ---')
console.log('Connecting to Customer Query repository...')

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err)
})

mediator.on('boot.ready', (db) => {
  let rep
  db = {
      close: function () {
        console.log("closing fake db");
      }
    }

  repository.connect(db)
    .then(repo => {
      console.log('Connected. Starting Server')
      rep = repo
      return server.start({
        repo
      })
    })
    .then(app => {
      console.log(`Server started succesfully, running on port: 80.`)
      app.on('close', () => {
        rep.disconnect()
      })
    })
})

mediator.on('db.error', (err) => {
  console.error(err)
})

mediator.emit('boot.ready')
