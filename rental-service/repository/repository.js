'use strict'
const request = require('request')
const locationurl = 'http://location?location='

const repository = (db) => {
  const collection = {
    "movies": "movies"
  }

  const getRental = (location) => {
    return new Promise((resolve, reject) => {

      request(locationurl + location, { json: true }, (err, res, lbody) => {
            console.log(lbody)
            let hoursOfOperation = lbody.hoursOfOperation
            sleep(2000).then(res =>{
              resolve({
                "rentalnumber": "1212121",
                 "firstname": "aniket",
                 "lastname": "chopade",
                 "location": "JFK",
                 "rentalstartdate": "June 21, 2019 08:00 AM",
                 "rentalenddate": "June 23, 2019 08:00 AM",
                 "hoursOfOperation": hoursOfOperation
                })
            })
          });
        
    })
  }
  function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
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
