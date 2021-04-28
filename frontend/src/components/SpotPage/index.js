import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOneSpot } from '../../store/spots';
import './SpotPage.css';
require('dotenv').config();


function SpotPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector((state) => state.spot[id]);
    console.log(spot)


    useEffect(() => {
        dispatch(getOneSpot(id));
    }, [dispatch, id])

    if (!spot) {
        return null;
    }

    if (!sessionUser) {
        return <Redirect to='/login' />;
    }

    let content = null;

    content = (
        <h1>Helo</h1>
        )
    return (
    <div className="spot__host-spot">
        <h1>Hel</h1>
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
//     const dispatch = useDispatch();
//     const sessionUser = useSelector((state) => state.session.user);
//     const spot = useSelector(state => state.spots[id]);



//     useEffect(() => {
//         dispatch(getOneSpot(id));
//     }, [dispatch, id])

//     if (!spot) {
//         return null;
//     }

//     if (!sessionUser) {
//         return <Redirect to='/login' />;
//     }

//     let content = null;

//     content = (
//         <h1>Helo</h1>
//         )
//     return (
//     <div className="he">
//         <h1>Hl</h1>
//     </div>
//     )
// }
