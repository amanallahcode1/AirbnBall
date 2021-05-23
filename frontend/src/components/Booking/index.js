import './Booking.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewBooking } from '../../store/bookings'
import BookingResult from '../BookingResult'
import * as bookingActions from '../../store/bookings'
import * as spotActions from '../../store/spots'
import { useParams, Redirect, Link } from 'react-router-dom';
import React, { useEffect } from 'react'

function Booking() {
  const user = useSelector(state=> state.session.user)
  const dispatch = useDispatch()
  const { id } = useParams();
  const spots = useSelector(state => state.spots.all)
  console.log(spots)
  const bookings = useSelector(state => state.bookings.all)
  console.log(bookings)

  useEffect(() => {
        dispatch(bookingActions.getBookings(user.id))
        dispatch(spotActions.getSpots())
  }, [dispatch, user.id])

if (user) {
      console.log(bookings)
}
// Let's think about the implementation
// So, we want booking -> Spot Id
// Take that spot id
// Show it
// Want it to be in booking result
let spotDest;
  return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                  <h1 className='textsize'>Your Bookings</h1>
            </div>
            {bookings.map(booking => {
                  spotDest = booking.spotId
                  console.log(spots[spotDest].imgUrl1)
                  // This is giving access to the booking spotDest
                  // Need to unseed files and put 3 booking data instead of 18
                  // All that needs to be done is add BookingResult component
                  // With url, title, etc.
                  // Implement Delete Booking Functionality

            })}
        </div>
//     <div className='searchPage'>
//       <div className='searchPage__info'>
//             <h1 className='textsize'>Your Bookings</h1>
//             <h6 className='textsize'>booking functionality still not implemented (coming soon) for show only</h6>
//       </div>
//       <button>Click ME FOR CREATE NEW BOOKING</button>
//        <BookingResult
//           img = "https://www.gannett-cdn.com/presto/2020/07/01/PSTC/a5165d8b-d3a0-4e1e-a6d6-de3ba077b145-Sartell_basketball_1.JPG"
//           location="Basketball gym in Los Angeles"
//           title="Equinox Gym"
//           description="8 guests · 1 full court · 8 gatorades · 1 shared locker room · Wifi · Towels · Free parking · Shower"
//                 // star={`${parseFloat((Math.random(1)*5) + 1).toFixed(2)} *`}
//           price={`$30 / day`}
//           total={`$90 total`}
//       />
//       <BookingResult
//           img = "https://www.gannett-cdn.com/presto/2020/07/01/PSTC/a5165d8b-d3a0-4e1e-a6d6-de3ba077b145-Sartell_basketball_1.JPG"
//           location="Basketball gym in Los Angeles"
//           title="Equinox Gym"
//           description="8 guests · 1 full court · 8 gatorades · 1 shared locker room · Wifi · Towels · Free parking · Shower"
//                 // star={`${parseFloat((Math.random(1)*5) + 1).toFixed(2)} *`}
//           price={`$30 / day`}
//           total={`$90 total`}
//       />
//       <BookingResult
//           img = "https://www.gannett-cdn.com/presto/2020/07/01/PSTC/a5165d8b-d3a0-4e1e-a6d6-de3ba077b145-Sartell_basketball_1.JPG"
//           location="Basketball gym in Los Angeles"
//           title="Equinox Gym"
//           description="8 guests · 1 full court · 8 gatorades · 1 shared locker room · Wifi · Towels · Free parking · Shower"
//                 // star={`${parseFloat((Math.random(1)*5) + 1).toFixed(2)} *`}
//           price={`$30 / day`}
//           total={`$90 total`}
//       />

      
//     </div>
      )
}

export default Booking