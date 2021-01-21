const fs = require('fs');
const pdf = require('html-pdf');
var html = fs
  .readFileSync('./public/index.html', 'utf-8')
  .replace('main.css', './public/main.css')
  .replace(
    '</head>',
    '<style>html{zoom:0.8;}header a{font-size:14px;}.wrap{padding: 0;}h1{font-size:45px;}</style></head>'
  );
const pieces = html.split('./');
html = pieces.join(`file://${process.cwd()}/`);
const my = '0.25in';
const mx = '0.5in';
const options = {
  border: {
    top: my,
    bottom: my,
    left: mx,
    right: mx
  },
  height: '11in',
  width: '8.5in'
};

pdf.create(html, options).toFile('./static/Resume.pdf', function (err) {
  if (err) return console.log(err);
});
