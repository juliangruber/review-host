#!/usr/bin/env node

var host = require('..')
var optimist = require('optimist')

var argv = optimist
  .usage   ('Usage: $0 [OPTIONS]')
  
  .describe('sites', 'The folder the sites are in')
  .default ('sites', process.cwd() + '/sites')
  .alias   ('sites', 's')
  
  .describe('cache', 'The folder to be used for cache files')
  .default ('cache', process.cwd() + '/cache')
  .alias   ('cache', 'c')
  
  .describe('port', 'The port to listen to')
  .default ('port', 8899)
  .alias   ('port', 'p')
  
  .describe('help', 'Print usage instructions')
  .alias   ('help', 'h')
  
  .argv
  
if (argv.help) return optimist.showHelp()

var server = host({
  sites : argv.sites,
  cache : argv.cache
})

server.listen(argv.port, function () {
  console.log('review-host listening on port ' + argv.port)
})