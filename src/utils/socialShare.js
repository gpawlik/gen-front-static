export default network => {
  const width = 550;
  const height = 450;
  const sheight = screen.height; // eslint-disable-line no-restricted-globals
  const swidth = screen.width; // eslint-disable-line no-restricted-globals
  const left = Math.round((swidth / 2) - (width / 2));
  const top = sheight > height ? Math.round((sheight / 2) - (height / 2)) : 0;
  const text = 'Generation Y: All great adventures start with why';
  const via = 'abc';
  const lang = 'en';
  const url = 'http://onet.pl';
  let call;

  switch (network) {
    case 'fb':
      call = 'http://www.facebook.com/sharer.php?u=' + encodeURI(url) + '&t=' + encodeURI(text);
      break;
    case 'tw':
      call = 'http://twitter.com/share?url=' + url + '&text=' + text + '&via=' + via + '&lang=' + lang;
      break;
  }

  const win = window.open(call, 'Share', `left=${left},top=${top},width=${width},height=${height},personalbar=0,toolbar=0,scrollbars=1,resizable=1`);

  if (win) {
    win.focus();
  }
};
