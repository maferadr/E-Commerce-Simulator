const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) =>{
    //find all tags => associated Product data
    try{
        const tagData = await Tag.findAll({
            include: ({ model: Product , through: ProductTag }),
        });
        res.status(200).json(tagData);
    }catch(err){
        res.status(500).json(err);
    };
});

router.get('/:id', async (req, res) =>{
    //find a single tag by its id => associated product data
    try{
        const tagData = await Tag.findByPk(req.params.id, {
            include: ({ model: Product, through: ProductTag }),
        });

        if(!tagData){
            res.status(404).json({ message: `No Product Tag found with this Id.`})
            return;
        };

        res.status(200).json(tagData);
    }catch(err){
        res.status(500).json(err);
    };
});

router.post('/', async (req, res) =>{
    // create a new tag
    try{
        const newTag = await Tag.create(req.body, {
            tag_id : req.body.tag_id,
        });
        res.status(200).json(newTag);
    }catch(err){
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) =>{
    // update a tag`s name by its id value
    // Tag.update(req.body, {
    //     where: {
    //         id: req.params.id,
    //     },
    // })
    // .then((tagProduct)=>{
    //     if(req.body.product && req.body.product.length){
    //         Product.findAll({
    //             where: { tag_id: req.params.id }
    //         }).then((prodTag)=>{
    //             //create 
    //         })
    //     }
    // })
    try{
        const newTag = await Tag.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if(!newTag){
            res.status(404).json({ message: `No Tag Product found with this ID.`})
            return;
        };
        res.status(200).json(newTag);
    }catch(err){
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) =>{
    // delete on tag by its id value
    try{
        const tagData = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!tagData){
            res.status(404).json({ message: `No Tag Product found with this ID.`})
            return;
        }
    }catch(err){    
        res.status(500).json(err);
    }
});

module.exports = router;