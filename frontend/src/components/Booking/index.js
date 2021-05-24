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


// Let's think about the implementation
// So, we want booking -> Spot Id
// Take that spot id
// Show it
// Want it to be in booking result
let spotDest;
let spotDet;
let content;

const deleteBooking = (id) => {
      dispatch(bookingActions.deleteABooking(id))
}

  return (
      <div className='searchPage'>
            <div className='searchPage__info'>
                  <h1 className='textsize'>Your Bookings</h1>
            </div>
            {bookings.map((booking) => (
                  
                  <div class="card card-1">
                        <h3 value={spots[booking.spotId].title}>{spots[booking.spotId].title}</h3>
                        <img id="bookingImage" value={spots[booking.spotId].imgUrl1} src={spots[booking.spotId].imgUrl1} />
                        <button onClick={deleteBooking}>Delete Booking</button>
                  </div>
            ))}
      </div>

      


      )
}

export default Booking