'use strict';

// console.log('Hello');
const express = require('express'), bodyParser = require('body-parser'), cors = require('cors'),
  morgan = require('morgan'),
  app = express()
;

app
  .use(morgan('combined'))
  .use(bodyParser.json())
  .use(cors())
  .get('/status', (req,res) => {
    res.send({
      message: 'hello world'
    });
  })
  .listen(process.env.PORT || 8081)
;

