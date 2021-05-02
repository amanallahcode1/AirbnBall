const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Spot} = require('../../db/models');
router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    res.json({ spots: spots })
    console.log("Hello")
}))



router.get('/:id', asyncHandler(async (req, res) => {
   const spotDet = await Spot.findByPk(req.params.id);
   console.log("Hello l")
   return res.json(spotDet);
   
}))

module.exports = router;