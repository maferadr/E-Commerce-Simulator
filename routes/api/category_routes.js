const router = require('express').Router();
const { Category, Product } = require('../../models');

//The /api/categories endpoint

router.get('/', async (req, res) =>{
    //find all categories => its associated products
   try{
        const categoriesData = await Category.findAll({
            include: [{ model: Product}],
        });
        res.status(200).json(categoriesData);
   }catch(err){
    res.status(500).json(err);
   }
});

router.get('/:id', async (req, res) =>{
    // find one category by its 'id' value => Include associated Products
    try{
        const categoriesData = await Category.findByPk(req.params.id, {
            include: [{ model: Product}],
        });
        //If the category doesnt exist, a 404 response will be sent.
        if(!categoriesData){
            res.status(404).json({ message: `No Category Product found with this ID.`})
            return;
        }
        res.status(200).json(categoriesData);
    }catch(err){
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) =>{
    //Create a new category
    try{
        const newCategory = await Category.create({
            category_id : req.body.category_id,
        });
        res.status(200).json(newCategory);
    }catch(err){
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) =>{
    // update a category by its id value
    try{
        const newCategory = await Category.update({
            where:{
                id: req.params.id,
            },
        });
        if(!newCategory[0]){
            res.status(404).json({ message: `No Category found with this id to Update.`})
            return;
        };
        res.status(200).json(newCategory);
    }catch(err){
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) =>{
    // delete a category by itd id value
    try{
        const categoriesData = await Category.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!categoriesData){
            res.status(404).json({ message: `No Category Product found with this ID.`})
            return;
        }
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;