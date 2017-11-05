import FtpDeploy from 'ftp-deploy';
import Client from 'ftp';
import config from './config';

const ftpDeploy = new FtpDeploy();
const ftpClient = new Client();

const { remoteRoot, remoteDist, remoteDistOld } = config;

ftpClient.on('ready', () => {
  ftpClient.mkdir(remoteRoot, () => {
    ftpDeploy.deploy(config, e => {
      if (e) console.log(e);
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

ftpClient.on('error', e => {
  console.log('Connection error', e);
});

ftpClient.connect(config);
