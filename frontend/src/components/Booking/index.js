import './Booking.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewBooking } from '../../store/bookings'

const Booking = ({id}) => {
  const user = useSelector(state=> state.session.user)
  const dispatch = useDispatch()
 

  const handleSubmit = async (e)=>{
      e.preventDefault()
      console.log("Hey")
      const newBooking = {
        spotId: 1,
        userId: 2
      }
    await dispatch(createNewBooking(newBooking))
     console.log("No")

    }
  return (
    <div>
        <button onClick={handleSubmit}>Dispatch Create new booking</button>
    </div>
      )
}

export default Booking