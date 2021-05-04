const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const {Review} = require('../../db/models')

router.get('/:id', asyncHandler(async(req, res)=>{
  const spotReviews = await Review.findAll({
    where: {
      spotId: req.params.id
    }
  })
  console.log("h")
  return res.json(spotReviews)
}))

router.post('/', asyncHandler(async(req, res)=>{
  const {author, review, spotId} = req.body
  let newReview = await Review.create({
    author,
    review,
    spotId
  })
  return res.json(newReview)
}))

router.delete('/:id', asyncHandler(async(req,res)=>{
  const review = await Review.findByPk(req.params.id)
  await review.destroy()
  res.status(204).end()
}))


module.exports = router