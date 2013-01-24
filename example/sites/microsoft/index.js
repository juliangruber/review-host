var review = require('review')

module.exports = function () {
  return review()
    .title('Microsoft')
    .sites({
      Home : 'http://www.microsoft.com/'
    })
    .resolutions([
      '1440x900', '640x480'
    ])
}