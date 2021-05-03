import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import * as spotActions from '../../store/spots'
import './SpotPage.css';
import { NavLink } from 'react-router-dom';


function SpotPage() {
    const { id } = useParams();
    console.log(id)
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector(state => state.spots.all[id-1]);

    console.log(spot)
    useEffect(() => {
        dispatch(spotActions.getOneSpot(id));
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
    <div className="he">
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
