require('dotenv').config();

export default {
  user: process.env.FTP_USER,
  username: process.env.FTP_USER,
  password: process.env.FTP_PASS,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT || 21,
  localRoot: __dirname + '/../dist',
  remoteRoot: '/.temp',
  remoteDist: '/dist',
  remoteDistOld: '/distold',
  include: ['*'],
  exclude: []
};
