var review = require('review')

module.exports = function () {
  return review()
    .title('Twitter Bootstrap')
    .sites({
      Home : 'http://twitter.github.com/bootstrap/',
      'Getting started' : 'http://twitter.github.com/bootstrap/getting-started.html'
    })
    .resolutions([
      '1440x900',
      '640x480'
    ])
}