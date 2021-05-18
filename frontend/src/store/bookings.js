import { csrfFetch } from './csrf';

const CREATE_BOOKING = 'bookings/CREATE_BOOKINGS'

const createBooking = newBooking => ({
  type: CREATE_BOOKING,
  newBooking
})


export const createNewBooking = addedBooking => async dispatch => {
 
  console.log("***********");
  const response = await csrfFetch(`/api/bookings`, {
  method: 'POST',
  body: JSON.stringify(addedBooking)

  }
)
  const newBooking = await response.json()
   dispatch(createBooking(newBooking))

  console.log(newBooking)
  console.log("Hlloeoifeiofj")
  console.log("This is getting hit")
  console.log(response)
  if(!response.ok) throw response;


}


const bookingsReducer = (state = {all: [], current:{}} , action) => {
    switch(action.type){
        case CREATE_BOOKING: {
            const newState = {}
            const totalBookings = []
            state.all.forEach(booking=>{
            totalBookings.push(booking)
    })
    
        newState.all=totalBookings
        newState.current = {...state.current}
        newState.all.push(action.newBooking)
        return newState
        }

        default:
            return state
    }

}

export default bookingsReducer;