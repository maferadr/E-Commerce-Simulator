const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) =>{
    //find all tags => associated Product data
});

router.get('/:id', (req, res) =>{
    //find a single tag by its id => associated product data
});

router.post('/', (req, res) =>{
    // create a new tag
});

router.put('/', (req, res) =>{
    // update a tag`s name by its id value
});

router.delete('/', (req, res) =>{
    // delete on tag by its id value
});

module.exports = router;