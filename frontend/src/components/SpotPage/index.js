import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, Link } from 'react-router-dom';
import * as spotActions from '../../store/spots'
import './SpotPage.css';
import { NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as reviewActions from '../../store/reviews'
import * as bookingActions from '../../store/bookings'
import LoginFormPage from '../LoginFormPage'
import styled from 'styled-components';
import { Modal } from '../Modal';

function SpotPage() {

    const [showModal, setShowModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector(state => state.spots.all[id-1]);
    const reviews = useSelector(state=> state.reviews.all)
    const bookings = useSelector(state => state.bookings.all)
    console.log(bookings)
  
    // const currentUserId = sessionUser.id
    // console.log(currentUserId)
    // const currentSpotId = spot.id
    useEffect(() => {
        dispatch(spotActions.getOneSpot(id));
        dispatch(reviewActions.getReviews(id));
        // Might be the issue for not seeing all reviews get set up immediately
       dispatch(bookingActions.getBookings(id))
    }, [dispatch, id])

    const deleteOneReview = (id) => {
     dispatch(reviewActions.deleteReview(id))   
    }
    const reserveCourt = async e => {
        e.preventDefault()
       
        const newBooking = {
          startDate:"03/06/2021",
          endDate: "03/09/2021",
          spotId: spot.id,
          userId: sessionUser.id
        }
        dispatch(bookingActions.createNewBooking(newBooking))
        
    }
    const openModal = () => {
        setShowModal(prev => !prev)
    }
  

    if (!spot) {
        return null;
    }
    let content;
   if (sessionUser) {
        content = (
            <div className="listingDetail">
            <div className="title">
                {spot.title}
            </div>
            <div className="listingPicture">
                <img className="bigPic" src={spot.imgUrl1} alt='Court'/>
                <img className="smallPic" src={spot.imgUrl1} alt='Court'/>
                <img className="smallPic" src={spot.imgUrl3} alt='Court'/>
                <img className="widerPic" src={spot.imgUrl3} alt="Court" />
            </div>
            <p id="description">{spot.description}</p>
            <p id="price">${spot.price} per day</p>

            <div className="container2">
                <div className="row">
                    <div className="col-md-4">
                        <h2 id="reviewtext">Reviews</h2>
                        <button id="modal1" id="modal1" onClick={openModal}>Leave Review</button>
                        <button id="modal1" className="modal1" className="reserveButton" onClick={reserveCourt}>Reserve Court
                        </button>
                        
                        <Modal showModal={showModal} setShowModal={setShowModal}/>    
                            {reviews.map(review => (
                                <div class="card card-1">
                                    <h3 value={review.author}>{review.author}</h3>
                                    <p value={review.review}>{review.review}</p>
                                </div>
                            ))}
                        
                           
                     
                    </div>

                </div>
            </div>
        </div>
        )
   } else {
       content = (

           <LoginFormPage />
       )
   }

    return (
        <div>
            {content}
        </div>
        
    )












}

export default SpotPage;
//    <div className="spot__host-spot">
//                     <div className="spot__name-img-map-container">
//                         <div className="spot__name-img">
//                             <div className="spot__name">
//                                 <h2>{`${spot.title} in ${spot.address.split(', ')[1]}`}</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="spot__description">
//                         <h3>Description</h3>
//                         {spot.description}
//                     </div>
//                     <div className="spot__price">
//                         <h3>Price</h3>
//                         <span>{`$${spot.price}/ night`}</span>
//                     </div>
                   
//                 </div>


// Up top is the return

// on top of return

//     const { id } = useParams();
   
// }
