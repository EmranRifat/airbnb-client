import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';
import DashNav from '../Components/Dashboard/DashNav';
import { AuthContext } from '../contexts/AuthProvider';
import { getUserRole } from '../Api/user';
import SmallSpinner from '../Components/Spinner/SmallSpinner';

const DashboardLayout = () => {

  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    getUserRole(user?.email).then((data) => {
      console.log(data);
      setRole(data);
      setLoading(false)
    });
  }, [user]);

    return (
       
        <div>
            <div className='lg:hidden'>
            <DashNav></DashNav>
            </div>

         <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* <!-- Page content here --> */}
   <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="bg-base-200">
      {/* <!-- Sidebar content here --> */}
      
      {loading? <SmallSpinner></SmallSpinner>:
      <Sidebar role={role}></Sidebar>}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;