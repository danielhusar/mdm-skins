import Helmet from 'react-helmet';

export default function (html, title) {
  const head = Helmet.rewind();
  title = title ? title : head.title.toString(); // eslint-disable-line

  return `
    <!doctype html>
    <html>
      <head>
        ${title}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="initial-scale=1, width=device-width">
        <link rel="stylesheet" href="/assets/app.css" />
        <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
        <link href="/images/favicon.png" rel="shortcut icon" type="image/png" />
      </head>
      <body>
        ${html}
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `;
}
