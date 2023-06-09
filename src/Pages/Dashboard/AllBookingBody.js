import React from 'react';

const AllBookingBody = ({booking}) => {
    return (

                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="block relative">
                          <img
                            alt="profile"
                            src= {booking?.home.image}
                            className="mx-auto object-cover rounded h-10 w-15 "
                          />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 font-bold whitespace-no-wrap">
                         {booking?.home.title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                    {booking?.home.location}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{booking?.price}$</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                    {booking?.home.from}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                    {booking?.home.to}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Cancel</span>
                    </span>
                  </td>
                </tr>

    );
};

export default AllBookingBody;