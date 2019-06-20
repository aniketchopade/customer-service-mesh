'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const {repo} = options
  app.get('/', (req, res, next) => {
    repo.getRental(req.query.rental).then(rentaldetails => {
      rentaldetails.rentalnumber = req.query.rental
      res.status(status.OK).json(rentaldetails)
    }).catch(next)
  })
}