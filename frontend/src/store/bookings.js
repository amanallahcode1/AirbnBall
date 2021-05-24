import { csrfFetch } from './csrf';

const CREATE_BOOKING = 'bookings/CREATE_BOOKINGS'
const LOAD_BOOKINGS = 'bookings/LOAD_BOOKINGS'
const DELETE_BOOKING = 'bookings/DELETE_BOOKINGS'

const createBooking = newBooking => ({
  type: CREATE_BOOKING,
  newBooking
})
const loadBooking = bookings => ({
  type: LOAD_BOOKINGS,
  bookings
})
const deleteBooking = deletedBooking => ({
  type: DELETE_BOOKING,
  deletedBooking
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

export const deleteABooking = (id) => async dispatch => {
  const res = await csrfFetch(`/api/bookings/${id}`, {
    method: "DELETE"
  })
  if (!res.ok) throw res;
  dispatch(deleteBooking(id))
}



const bookingsReducer = (state = {all: [], current:{}} , action) => {
        switch(action.type){
          case LOAD_BOOKINGS: {
            const newState = {}
            const allBookings = []
            action.bookings.forEach(booking=> {
              allBookings.push(booking)
            })
            newState.all=allBookings
            newState.current = {...state.current}
            return newState
          }
          case CREATE_BOOKING: {
            const newState = {}
            const allBookings = []
            state.all.forEach(booking=>{
              allBookings.push(booking)
            })
            newState.all=allBookings
            newState.current = {...state.current}
            newState.all.push(action.booking)
            return newState
          }
          case DELETE_BOOKING: {
            const newState = {}
            newState.all = []
            newState.current = {}
            newState.all = state.all.filter(booking => booking.id !== action.bookingId)
            return newState
          }
          default:
            return state
        }
    }



export default bookingsReducer;