const PORT = process.env.PORT || 5000

var express = require('express');


express()
  .use(express.static('dist'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));