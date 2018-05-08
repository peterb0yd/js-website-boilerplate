var config = require('../config');
var contentful = require('contentful')

var client = contentful.createClient({
  space: config.contentful.space,
  accessToken: config.contentful.accessToken
});

module.exports = client;
