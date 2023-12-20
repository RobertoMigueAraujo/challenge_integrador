const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');


router.get('/admin', adminControllers.getAllProducts);
router.get('/admin/create', adminControllers.showCreateProduct);
router.post('/admin/create', adminControllers.createProduct);
router.get('/admin/edit/:id', adminControllers.showEdit);
router.put('/productos/:id' , adminControllers.update)
router.delete('/productos/:id', adminControllers.destroy);
module.exports = router;
