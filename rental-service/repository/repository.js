'use strict'

const repository = (db) => {
  const collection = {
    "movies": "movies"
  }

  const getRental = (location) => {
    return new Promise((resolve, reject) => {
        resolve({
        "rentalnumber": "1212121",
         "firstname": "aniket",
         "lastname": "chopade",
         "location": "JFK",
         "rentalstartdate": "June 21, 2019 08:00 AM",
         "rentalenddate": "June 23, 2019 08:00 AM"
        })
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getRental
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
