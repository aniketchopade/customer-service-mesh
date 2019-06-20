'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const {repo} = options
  app.get('/', (req, res, next) => {
    repo.getCustomer(req.query.customer).then(customerdetails => {
      customerdetails.customerID = req.query.customer
      res.status(status.OK).json(customerdetails)
    }).catch(next)
  })
}