
// console.log('Hola mundo','Fuck yeah!');
// var nombre="Sergio";
// var nick="yacaFx";
// console.log(nombre,' es ', nick);

const express = require('express');
const app = express();

var port=process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})