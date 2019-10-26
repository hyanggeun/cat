var express = require('express');
var router = express.Router();
const app = express();
const cat = require('./cat/index')
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


app.use('/cat', cat);

module.exports = app;
