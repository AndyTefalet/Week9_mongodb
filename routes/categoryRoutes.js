const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Routes for base category endpoint (collection-level operations)
router.route('/')
    .get(categoryController.getCategories)
    .post(categoryController.createCategory);

// Routes for specific category by ID (document-level operations)
router.route('/:id')
    .get(categoryController.getCategory)
    .patch(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);

module.exports = router;