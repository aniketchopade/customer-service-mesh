'use strict'

const repository = (db) => {
  const collection = {
    "movies": "movies"
  }

  const getCustomer = (location) => {
    return new Promise((resolve, reject) => {
        resolve({
         "customerID": "c12345",
         "firstname": "aniket",
         "lastname": "chopade",
         "lastrentalNumber": "1212121",
        })
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getCustomer
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
