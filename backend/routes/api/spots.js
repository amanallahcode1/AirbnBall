const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const Spot = db.Spot;

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    res.json({ spots: spots })
    console.log("Hello")
}))



router.get('/:id', asyncHandler(async (req, res) => {
    const spot = [];
    const id = req.params.id

    const spotObj = await Spot.findByPk(id)

    spot.push(spotObj);

    res.json({ spot });
}))

module.exports = router;