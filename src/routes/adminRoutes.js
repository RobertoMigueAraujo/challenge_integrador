const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');


router.get('/admin', adminControllers.getAllProducts);
router.get('/admin/create', adminControllers.showCreateProduct);
router.post('/admin/create', adminControllers.createProduct);
router.get('/admin/edit/:id', adminControllers.showEdit);
router.get('/admin/edit/:id', adminControllers.showEditProduct);
router.put('/admin/edit/:id', adminControllers.updateProduct);
router.delete('/admin/delete/:id', adminControllers.deleteProduct);

module.exports = router;
