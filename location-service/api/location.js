'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const {repo} = options
  app.get('/', (req, res, next) => {
    repo.getLocation(req.query.location).then(location => {
      location.location = req.query.location
      res.status(status.OK).json(location)
    }).catch(next)
  })
}