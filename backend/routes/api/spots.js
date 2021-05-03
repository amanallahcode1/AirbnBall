const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Spot} = require('../../db/models')


router.get('/', asyncHandler(async (req, res) => {
 let allDestinations = await Spot.findAll()
  return res.json({ allDestinations })
   
}))

router.get('/:id', asyncHandler(async (req, res) => {
 let oneDest = await Spot.findByPk(req.params.id)
  return res.json({ oneDest })
   
}))
module.exports = router;