'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const {repo} = options
  app.get('/', (req, res, next) => {
    repo.getLastRentalDetails().then(rentalinfo => {
      rentalinfo.name = req.query.customer
      res.status(status.OK).json(rentalinfo)
    }).catch(next)
  })
}