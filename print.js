var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf-8');
var options = { format: 'Letter', border: '0.5in' };

pdf.create(html, options).toFile('./test.pdf', function (err, res) {
  if (err) return console.log(err);
});
