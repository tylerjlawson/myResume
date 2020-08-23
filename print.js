var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf-8');
const pieces = html.split('./');
html = pieces.join(`file://${process.cwd()}/`);
const vericalMargin = '0.25in';
const horizontalMargin = '0.5in';
var options = {
  border: {
    top: vericalMargin,
    bottom: vericalMargin,
    left: horizontalMargin,
    right: horizontalMargin,
  },
  height: '11in',
  width: '8.5in',
};

pdf.create(html, options).toFile('./Resume.pdf', function (err, res) {
  if (err) return console.log(err);
});
