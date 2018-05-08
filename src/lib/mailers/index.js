var config = require('../config');
var sesConfig = config.ses;

var ses = require('aws-sdk/clients/ses');

module.exports = new ses({
  apiVersion: '2017-03-09',
  accessKeyId: sesConfig.accessKeyId,
  secretAccessKey: sesConfig.secretAccessKey,
  region: sesConfig.region
})
