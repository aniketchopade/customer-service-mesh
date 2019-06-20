'use strict'
const request = require('request')
const repository = (db) => {
  const collection = {
    "movies": "movies"
  }

  const getLastRentalDetails = (customerid) => {
    return new Promise((resolve, reject) => {

      request(`customer?customer=${customerid}`, { json: true }, (err, res, cbody) => {
        let lastrentalNumber = cbody.lastrentalNumber
        let firstname = cbody.firstname
        let lastname = cbody.lastname
        
        request(`rental?rental=${lastrentalNumber}`, { json: true }, (err, res, rbody) => {
          let location = rbody.location
          let rentalstartdate = rbody.rentalstartdate
          let rentalenddate = rbody.rentalenddate

          request(`location?location=${location}`, { json: true }, (err, res, lbody) => {
            let hoursOfOperation = lbody.hoursOfOperation

            resolve({
              "rentalNumber": lastrentalNumber,
              "rentaldetails": {
                "customerId": customerid,
                "name": firstname,
                "lastname": lastname,
                "rentalstartdate": rentalstartdate,
                "rentalenddate": rentalenddate,
                "location": location,
                "hoursofoperation": hoursOfOperation[1]
              }

            })
          });

          
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
