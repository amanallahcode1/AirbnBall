const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const Booking = db.Booking;

const router = express.Router();


router.post('/', asyncHandler(async (req, res) => {
    const { startDate, endDate, userId, spotId } = req.body;

    const booking = await Booking.create({
        startDate,
        endDate,
        userId,
        spotId
    });

    res.json({ booking })
}));


module.exports = router

// router.delete('/:id', asyncHandler(async (req,res)=>{
//   const booking = await Booking.findByPk(req.params.id)
//   await booking.destroy()
//   res.status(204).end()


// }))
