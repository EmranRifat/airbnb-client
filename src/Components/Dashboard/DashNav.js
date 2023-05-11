import React from 'react';
import { Link } from 'react-router-dom';

const DashNav = () => {
    return (
        <div>
              <header className='text-gray-900 body-font shadow-sm'>
            
      <div className=' flex justify-between px-4'>


        <Link
          to='/'
          className='flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 '
        >
          <span className='ml-3 text-2xl font-bold '>Aircnc</span>
        </Link>

        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost  lg:hidden ">
      <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
        
      </div>
    </header>
 
        </div>
    );
};

export default DashNav;