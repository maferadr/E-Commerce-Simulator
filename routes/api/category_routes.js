const router = require('express').Router();
const { Category, Product } = require('../../models');

//The /api/categories endpoint

router.get('/', (req, res) =>{
    //find all categories => its associated products
});

router.get(':id/', (req, res) =>{
    // find one category by its 'id' value => Include associated Products
});

router.post('/', (req, res) =>{
    //Create a new category
});

router.put('/:id', (req, res) =>{
    // update a category by its id value
});

router.delete('/:id', (req, res) =>{
    // delete a category by itd id value
});

module.exports = router;