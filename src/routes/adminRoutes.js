const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');


router.get('/admin', adminControllers.getAllProducts);
router.get('/admin/create', adminControllers.showCreateProduct);
router.post('/admin/create', adminControllers.createProduct);
router.get('/admin/edit/:id', adminControllers.showEdit);
router.get('/id/edit', adminControllers.edit);
router.put('/admin/edit/:id' , adminControllers.update)
router.delete('/admin/delete/:id', adminControllers.destroy);

module.exports = router;
