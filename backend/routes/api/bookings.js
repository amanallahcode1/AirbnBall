const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {Booking} = require('../../db/models')


router.get('/', asyncHandler(async (req, res) => {
    const bookings = await Booking.findAll();
    return res.json({bookings});
   
}))

router.post('/:id', asyncHandler(async (req, res) => {
const {spotId, userId} = req.body;

let newBooking = await Booking.create({
    spotId,
    userId
})
 
return res.json(newBooking);
}));


router.delete('/:id', asyncHandler(async (req,res)=>{
  const booking = await Booking.findByPk(req.params.id)
  await booking.destroy()
  res.status(204).end()


}))
module.exports = router;