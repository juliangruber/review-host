var fs = require('fs')
var express = require('express')

module.exports = host

function host(opts) {
  if (!opts) opts = {}
  if (!opts.sites) opts.sites = process.cwd() + '/sites'
  if (!opts.cache) opts.cache = process.cwd() + '/cache'
  
  var app = express()
  
  app.use(app.router)
  app.use(express.favicon())
  app.use(express.static(__dirname + '/public'))
  
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  
  /**
   * mount sites
   */
  
  var sites = fs.readdirSync(opts.sites)
    .filter(function (site) {
      return site[0] != '.'
    })
  
  sites.forEach(function (site) {
    var handler = require(opts.sites + '/' + site)(opts.cache)
    app.use('/' + site + '/', handler)
  })
  
  /**
   * index page
   */
  
  app.get('/', function (req, res, next) {
    res.render('index', { sites : sites })
  })
  
  return app
}
