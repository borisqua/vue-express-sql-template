'use strict';

// console.log('Hello');
const
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan'),
  app = express()
;

app
  .use(morgan('combined'))
  .use(bodyParser.json())
  .use(cors())
  .post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    });
  })
  .listen(process.env.PORT || 8081)
;

