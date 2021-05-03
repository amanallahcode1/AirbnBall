import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import * as spotActions from '../../store/spots'
import './SpotPage.css';
import { NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function SpotPage() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector(state => state.spots.all[id-1]);

    useEffect(() => {
        dispatch(spotActions.getOneSpot(id));
    }, [dispatch, id])

    if (!spot) {
        return null;
    }



    return (
        <div className="listingDetail">
            <div className="title">
                {spot.title}
            </div>
            <div className="listingPicture">
                <img className="bigPic" src={spot.imgUrl1} alt='Court'/>
                <img className="smallPic" src={spot.imgUrl2} alt='Court'/>
                <img className="smallPic" src={spot.imgUrl3} alt='Court'/>
                <img className="widerPic" src={spot.imgUrl3} alt="Court" />
            </div>
            <div className='splash-form'>
                <h2 id='book'>Book this court!</h2>
                <div className="date-box">
                    <DatePicker selected={startDate} onChange={date=> setStartDate(date)} />
                    <DatePicker selected={endDate} onChange={date=> setEndDate(date)} />
                </div>
                <a href="#">
                    <button className="submitLocButton" id="reserveButton">Reserve</button>
                </a>
            </div>

            <p id="description">{spot.description}</p>
            <p id="price">${spot.price} per day</p>
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
