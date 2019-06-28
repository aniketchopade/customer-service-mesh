'use strict'
const request = require('request')
const customerurl = 'http://localhost:3001?=customer' 
const rentalurl = 'http://localhost:3002?rental='
const repository = (db) => {
  const collection = {
    "movies": "movies"
  }

  const getLastRentalDetails = (customerid) => {
    return new Promise((resolve, reject) => {
      console.log("*********start invoking all services **********")
      request(customerurl + customerid, { json: true }, (err, res, cbody) => {
        console.log(cbody)
        let lastrentalNumber = cbody.lastrentalNumber
        let firstname = cbody.firstname
        let lastname = cbody.lastname

        request(rentalurl+ lastrentalNumber, { json: true }, (err, res, rbody) => {
          console.log(rbody)
          let location = rbody.location
          let rentalstartdate = rbody.rentalstartdate
          let rentalenddate = rbody.rentalenddate
          let hoursOfOperation = rbody.hoursOfOperation

          resolve({
            "rentalNumber": lastrentalNumber,
            "rentaldetails": {
              "customerId": customerid,
              "name": firstname,
              "lastname": lastname,
              "rentalstartdate": rentalstartdate,
              "rentalenddate": rentalenddate,
              "location": location,
              "hoursOfOperation": hoursOfOperation
            }

          })
        });          
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
