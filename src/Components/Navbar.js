import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import PrimaryButton from '../Components/Button/PrimaryButton'
import { toast } from 'react-hot-toast'


const Navbar = () => {
  const navigate=useNavigate();
  const { user,logout } = useContext(AuthContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [dark,setDark]=useState(false);

  return (
    <header data-theme={dark ? "dark" : "light"} className='text-gray-900 body-font shadow-sm'>
      <div className=' mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0'
        >
          <span className='ml-3 text-2xl font-bold '>Aircnc</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          {user?.email ? (
            <>
              <div className='relative inline-block '>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className='relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className='absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl '>
                    <Link
                      to='/Dashboard'
                      className='flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '
                    >
                      <svg
                        className='w-5 h-5 mx-1'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z'
                          fill='currentColor'
                        ></path>
                        <path
                          d='M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z'
                          fill='currentColor'
                        ></path>
                      </svg>

                      <span className='mx-1'>Dashboard</span>
                    </Link>

                    <hr className='border-gray-200' />

                    <div
                    onClick={()=>{
                      setIsDropdownOpen(false)
                      toast.success ("SignOut Successfully...")
                      navigate("/login")
                      logout()
                    }}
                     className='flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '>
                      <svg
                        className='w-5 h-5 mx-1'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z'
                          fill='currentColor'
                        ></path>
                      </svg>

                      <span className='mx-1'>Sign Out</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to='/login' className='mr-5 hover:text-green-600'>
                Login
              </Link>
              <Link to='/signup' className='mr-5'>
                <PrimaryButton classes='rounded-full px-2 py-1'>
                  Signup
                </PrimaryButton>
              </Link>
            </>
          )}
          <label className="swap swap-rotate">
  
  {/* <!-- this hidden checkbox controls the state --> */}
  <input type="checkbox" onClick={()=>setDark(!dark)}/>
  
  {/* <!-- sun icon --> */}
  <svg className="swap-on fill-current w-10 h-10 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* <!-- moon icon --> */}
  <svg className="swap-off fill-current w-6 h-6 mt-2 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>        </nav>
      </div>
    </header>
  )
}

export default Navbar
