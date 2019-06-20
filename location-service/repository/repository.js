'use strict'

const repository = (db) => {
  const collection = {
    "movies": "movies"
  }

  const getLocation = (location) => {
    return new Promise((resolve, reject) => {
        resolve({
         "location": "JFK",
         "locationNumber": "12345",
         "hoursOfOperation": ["Mon 9:21", "Tue 8:21", "Wed 8:21", "Thu 2:20", "Fri closed", "Sat closed", "Sun Closed"]
        })
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getLocation
  })
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('connection db not supplied!'))
    }
    resolve(repository(connection))
  })
}

module.exports = Object.assign({}, {connect})
