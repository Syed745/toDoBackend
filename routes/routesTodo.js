const router = require('express').Router();

const modelsItem = require('../models/todoItem');

router.post('/api/item', async (req, res) => {
    try {
        const newItem = new modelsItem({
            item: req.body.item
        })
        const saveItem = await newItem.save()
        resizeBy.status(200).json(saveItem)

    } catch (error) {
        res.json(error)
    }
})


router.get('/api/items', async (req, res) => {
    try {
        const allTodoItem = await modelsItem.find({});
        res.status(200).json(allTodoItem)
    } catch (error) {
        res.json(error)
    }
})




router.put('/api/item/:id', async (req, res) => {
    try {
        const updateItem = await modelsItem.findByIdAndUpdate(req.params.id,{$set: req.body});
        res.status(200).json('Its updated')
    } catch (error) {
        res.json(error)
    }
})



router.delete('/api/item/:id', async (req, res) => {
    try {
        const deleteItem = await modelsItem.findByIdAndDelete(req.params.id);
        res.status(200).json('Its Deleted')
    } catch (error) {
        res.json(error)
    }
})


module.exports = router;