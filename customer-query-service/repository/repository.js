'use strict'
const http = require('http')
const repository = (db) => {
  const collection = {
    "movies": "movies"
  }

  const getLastRentalDetails = (customerid) => {
    return new Promise((resolve, reject) => {

        http.get({
          hostname: 'customer',
          port: 80,
          path: `/?customer=${customerid}`,
          agent: false  // Create a new agent just for this one request
        }, (res) => {
          console.log(res)
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
        });

     
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
