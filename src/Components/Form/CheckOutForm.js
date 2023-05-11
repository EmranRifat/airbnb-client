// import React, { useEffect, useState } from 'react';
// import { getPaymentIntent } from '../../Api/Booking';

// const CheckOutForm = ({bookingData}) => {
//     const [clientSecret,setClientSecret]=useState('')
//     console.log(clientSecret);


//     useEffect(()=>{
//         getPaymentIntent(bookingData?.totalPrice)
//         .then(data=>{
//             setClientSecret(data.clientSecret)
//         })
        
//     },[bookingData?.totalPrice])
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default CheckOutForm;