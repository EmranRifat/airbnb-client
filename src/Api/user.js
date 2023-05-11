
export const hostRequest=async hostData=>{

    const url=`http://localhost:5000/user/${hostData?.email}`
    
    const response=await fetch(url,{
        method:'PUT',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(hostData),
    })
    const data=await response.json()
    return data;

}



// get user role 
export const getUserRole = async email=> {
    const url=`http://localhost:5000/user/${email}`
    
    const response=await fetch(url)
    const user= await response.json()
    return user?.role;

}

// get all users

export const getAllUsers = async email=> {
    const url='http://localhost:5000/users'
    
    const response=await fetch(url)
    const users= await response.json()
    console.log(users);
    return users

}


export const makeHost = async user => {
    delete user._id
    const response = await fetch(
      `http://localhost:5000/user/${user?.email}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ ...user, role: 'host' }),
      }
    )
    const users = await response.json()
  
    return users
  }
