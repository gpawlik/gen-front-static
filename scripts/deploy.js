import FtpDeploy from 'ftp-deploy';
import Client from 'ftp';
import config from './config';

const ftpDeploy = new FtpDeploy();
const ftpClient = new Client();

const { remoteRoot, remoteDist, remoteDistOld } = config;

ftpClient.on('ready', () => {
  ftpClient.mkdir(remoteRoot, () => {
    ftpDeploy.deploy(config, function (err) {
      if (err) console.log(err);
      else {
        console.log('Files uploaded.');
        ftpClient.rename(remoteDist, remoteDistOld, () => {
          ftpClient.rename(remoteRoot, remoteDist, () => {
            ftpClient.rmdir(remoteDistOld, true, () => {
              ftpClient.end();
            });
          });
        });
      }
    });
  });
});

ftpClient.on('close', () => {
  console.log('Connection closed');
});

ftpClient.connect(config);
