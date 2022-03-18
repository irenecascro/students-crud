var express = require('express');
const router = express.Router();

/* GET users listing. */
// GET http://localhost:3000/users
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// GET http://localhost:3000/users/list
router.get('/list', (req, res) => {
  res.send('Ruta users/list');
});

module.exports = router;