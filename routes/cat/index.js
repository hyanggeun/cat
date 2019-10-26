const express = require('express');
var router = express.Router();
const catCtrl = require('./index.ctrl');

router.post('/list',catCtrl.list);
router.get('/detail/:id', catCtrl.detail);
router.post('/new', catCtrl.write);
router.patch('/update/:id', catCtrl.update);
module.exports = router;
