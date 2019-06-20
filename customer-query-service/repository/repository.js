'use strict'

const repository = (db) => {
  const collection = {
    "movies": "movies"
  }

  const getLastRentalDetails = (rentalinfo) => {
    return new Promise((resolve, reject) => {
        resolve({
          "customerId": "c768125",
          "name": "Aniket Chopade",
          "rentalNumber": "986522221",
          "location": "JFK Airport",
          "checkout": "Jun 20, 2019",
          "checkin": "Jun 22, 2019",
          "hoursOpen": "6:00:00 AM",
          "hoursClose": "9:00:00 PM"
        })
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getLastRentalDetails
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
