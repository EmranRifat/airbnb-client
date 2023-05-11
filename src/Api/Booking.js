//  get all Bookings for users

export const getAllBookingsByEmail=async email=>{

    const url=`http://localhost:5000/bookings?email=${email}`
  
    const response=await fetch(url)
    const data=await response.json()
    return data;
}


// get all bookings for admin
export  const getAllBookings=async()=>{
  const   url='http://localhost:5000/bookings'

    const response=await fetch(url)
    const data=await response.json()
    return data


}
export const getBookings = async email => {
  const response = await fetch(
    `http://localhost:5000/bookings?email=${email}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
      },
    }
  )
  const bookings = await response.json()
  return bookings
}


// Delete a booking
export const deleteBooking = async id => {
  const response = await fetch(
    `http://localhost:5000/booking/${id}`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
      },
    }
  )

  const data = await response.json()
  return data
}



// create payment intent
export const getPaymentIntent = async price => {
  const response = await fetch('http://localhost:5000/create-payment-intent',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
      },
      body: JSON.stringify({ price }),
    }
  )

  const data = await response.json()
  return data
}

