var host = require('..')

/**
 * `sites` and `cache` have sensible defaults
 */

host().listen(8899, function () {
  console.log('Open up http://localhost:8899 in your browser.')
})