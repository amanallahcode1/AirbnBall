  
const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const {review} = require('../../db/models')

router.get('/:id', asyncHandler(async(req, res)=>{
  const reviews = await review.findAll({
    where: {
      spotId: req.params.id
    }
  })
  return res.json(reviews)
}))

router.post('/', asyncHandler(async(req, res)=>{
  let newReview = await review.create(req.body)
  return res.json(newReview)
}))



module.exports = router