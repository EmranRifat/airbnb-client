import React, { useEffect, useState } from 'react'
// import Spinner from '../Components/Spinner/Spinner'
import SearchForm from '../Components/Form/SearchForm'
import ExpCard from '../Components/Card/ExpCard';
import { Link } from 'react-router-dom';
import HomeCard from '../Components/Card/HomeCard'
import { getAllHome } from '../Api/Services';

const Home = () => {
  const [loading,setLoading]=useState(false);
  const [allExp,setAllExp]=useState([]);
  const [homes,setHomes]=useState([]);
// console.log(homes);

  useEffect(()=>{
    setLoading(true)
    getAllHome()
    .then(data=>setHomes(data))
    .catch(err=>console.log(err))


    fetch('expdata.json')
    .then(data=>data.json())
    .then(data=>{ 
      setAllExp(data)
      setLoading(false)
      // console.log(data);
    })
  },[])

  return (
    <>
   <div
    className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20 '>
   <div className='mt-4 '> 
   <SearchForm/>
   </div>
  

   <div className='flex-1'>
   <div>
   <div className='flex justify-between px-4 mt-10 '>
    <p className='text-xl font-bold'>Homes</p>
    <Link  className='hover:underline mouse-pointer hover:text-blue-500 hover:font-semibold' to="/all-home"><p>See All</p></Link>
  </div>
   
   <div className='container pb-8 pt-2 mx-auto '>
   <div className='flex flex-wrap '>
    {
     homes.slice(0,3).map((home,i)=>(
      <HomeCard key={i} home={home}></HomeCard>

     ))}
   </div>
   </div>
   </div>

<div>
  <div className='flex justify-between px-4 '>
    <p className='text-xl font-bold'>Experience</p>
    <Link  className='hover:underline mouse-pointer hover:text-blue-500 hover:font-semibold' to="/coming-soon"><p>See All</p></Link>
  </div>
</div>




   <div className='container pb-8 pt-2 mx-auto '>
   <div className='flex flex-wrap '>
    {
     allExp.map((exp,i)=>(
      <ExpCard key={i} exp={exp}></ExpCard>

     ))}
   </div>
   </div>
   </div>
   </div>
    </>
  )
}

export default Home
