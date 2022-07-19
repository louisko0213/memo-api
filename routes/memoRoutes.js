const express = require('express');
const router = express.Router();
const memoController = require('../controller/memoController');


router.get('/fetch', memoController.getMemoData);

router.get('/fetch/:id', memoController.getMemoDataById);

router.post('/create', memoController.createMemo);

router.put('/update/:id', memoController.updateMemo);

router.delete('/delete/:id', memoController.deleteMemo);

router.get('/check/:id', memoController.checkMemoPassword);

module.exports = router;