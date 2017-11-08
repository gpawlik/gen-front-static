import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #f1f1f1;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app {
    min-height: 100%;
    min-width: 100%;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .post-content p {
    font-size: 21px;
    line-height: 1.58;
    font-weight: 400;
    color: rgba(0, 0, 0, .84);
    max-width: 700px;
    margin: 0 auto 25px;
  }
  .post-content img {
    width: 100%;
    height: auto;
    display: none;
  }

  @media(max-width: 679px) {
    .post-content p {
      font-size: 18px;
    }
    .post-content blockquote {
      margin: 0 20px;
    }
  }
`;
