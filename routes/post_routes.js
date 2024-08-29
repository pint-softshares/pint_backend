const express = require('express');
const router = express.Router();

const controller = require('../controllers/post_controller');

router.post('/create', controller.postCreate);
router.get('/list', controller.postList);
router.get('/get/:id', controller.postGet);
router.put('/delete/:id', controller.postDelete);
router.put('/update/:id', controller.postUpdate);
router.put('/view/:id', controller.increaseViewCount);
router.put('/updateRating/:id', controller.setRating);
router.post('/adminUpdate/:id', controller.adminUpdate);
router.get('/topViews', controller.topViews);

router.get('/listByCidade/:id', controller.postListByCidade);

module.exports = router;