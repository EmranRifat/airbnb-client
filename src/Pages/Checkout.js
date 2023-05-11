import { Tab } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import CheckoutCart from "../Components/Checkout/CheckoutCart";
import ReviewHouse from "../Components/Checkout/ReviewHouse";
import WhosComing from "../Components/Checkout/WhosComing";
import Payment from "../Components/Checkout/Payment";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckOutForm from "../Components/Form/CheckOutForm";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { state: checkoutData } = useLocation();
  // const stripePromise=className=(process.env.STRIPE_PUBLIC_KEY)
  console.log(user);
  // console.log(checkoutData);

  // const homeData = {
  //   id: "123az789",
  //   location: "Dhaka,Bangladesh",
  //   title: "Huge apprtment with 4 bedroos",
  //   image:
  //     "https://thumbs.dreamstime.com/b/close-portrait-casual-man-wearing-glasses-smiling-looking-camera-studio-background-66706656.jpg",
  //   from: 21 / 11 / 2022,
  //   to: 30 / 11 / 2022,
  //   host: {
  //     name: "John Doe",
  //     image:
  //       "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
  //     email: "johndoe@gmai.com",
  //   },
  //   price: 98,
  //   ratings: 4.8,
  // };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [bookingData, setBookingData] = useState({
    home: {
      id: checkoutData?.homeData?._id,
      image: checkoutData?.homeData?.image,
      title: checkoutData?.homeData?.title,
      location: checkoutData?.homeData?.location,
      from: checkoutData?.homeData?.from,
      to: checkoutData?.homeData?.to,
    },
    hostEmail: checkoutData?.homeData?.host?.email,
    comment: "",
    price: parseFloat(checkoutData?.totalPrice),
    guestEmail: user?.email,
  });

  // const [bookingData, setBookingData] = useState({
  //   homeId: homeData.id,
  //   HostEmail: homeData?.host?.email,
  //   message: " ",
  //   totalPrice: parseFloat(homeData.price) + 31,
  //   guestEmail: user?.email,
  // });
const navigate=useNavigate();

  const handleBooking = () => {
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("booking successful...!");
        navigate("/dashboard/mybookings")
      });
  };

  return (
    <div>
      <div className="flex justify-center space-x-28 py-4 ">
        <div>
          <Tab.Group>
            <Tab.List>
              <div className="container flex flex-wrap items-center py-4 mx-auto overflow-y-auto whitespace-nowrap">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "text-blue-700" : "text-gray-600"}
                    >
                      1. Reviews house rules
                    </button>
                  )}
                </Tab>

                <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "text-blue-600" : "text-gray-600"}
                    >
                      2. Who's coming?
                    </button>
                  )}
                </Tab>

                <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "text-blue-600" : "text-gray-600"}
                    >
                      3. Confirm and pay
                    </button>
                  )}
                </Tab>
              </div>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <ReviewHouse
                  setSelectedIndex={setSelectedIndex}
                  homeData={{
                    ...checkoutData?.homeData,
                    totalNights: checkoutData?.totalNights,
                  }}
                ></ReviewHouse>
              </Tab.Panel>
              <Tab.Panel>
                <WhosComing
                  setSelectedIndex={setSelectedIndex}
                  host={checkoutData?.homeData?.host}
                  bookingData={bookingData}
                  setBookingData={setBookingData}
                ></WhosComing>
              </Tab.Panel>
              <Tab.Panel>
                <Payment handleBooking={handleBooking}></Payment>
                {/* <Elements stripe={stripePromise} >
                  <CheckOutForm bookingData={bookingData}></CheckOutForm>
                </Elements> */}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        <CheckoutCart
          homeData={{
            ...checkoutData?.homeData,
            totalNights: checkoutData?.totalNights,
          }}
        />
      </div>
    </div>
  );
};

export default Checkout;
