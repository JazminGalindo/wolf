
// console.log('Hola mundo','Fuck yeah!');
// var nombre="Sergio";
// var nick="yacaFx";
// console.log(nombre,' es ', nick);

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})