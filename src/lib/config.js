var config = {}

config.contentful = {
  space: '<your_space>',
  accessToken: '<your_access_token>'
}

config.ses = {
  accessKeyId: '<your_ses_key_id>',
  secretAccessKey: '<your_ses_access_key>',
  region: '<your_time_zone>' // ex: us-east-1
}

module.exports = config;
