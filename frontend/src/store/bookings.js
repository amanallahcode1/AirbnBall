import { csrfFetch } from './csrf';

const CREATE_BOOKING = 'bookings/CREATE_BOOKINGS'
const LOAD_BOOKINGS = 'bookings/LOAD_BOOKINGS'

const createBooking = newBooking => ({
  type: CREATE_BOOKING,
  newBooking
})
const loadBooking = bookings => ({
  type: LOAD_BOOKINGS,
  bookings
})

export const createNewBooking = addedBooking => async dispatch => {
 
  const response = await csrfFetch(`/api/bookings`, {
  method: 'POST',
  body: JSON.stringify(addedBooking)

  }
)
  const newBooking = await response.json()
    dispatch(createBooking(newBooking))


  if(!response.ok) throw response;


}

export const getBookings = (id) => async dispatch => {
  const res = await fetch(`/api/bookings/${id}`)
  if(res.ok){
    
    const bookings = await res.json()
    dispatch(loadBooking(bookings))
  }
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

         case LOAD_BOOKINGS: {
         const newState = {}
         const totalBookings = []
         action.bookings.totalBookings.forEach(booking=>{
          totalBookings.push(booking)
      })
         newState.all=totalBookings
         newState.current = {...state.current}
         return newState
    }

        default:
            return state
    }

}

export default bookingsReducer;