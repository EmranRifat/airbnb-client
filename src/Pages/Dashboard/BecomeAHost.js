import React, { useContext, useEffect, useState } from "react";
import BecomeHostForm from "../../Components/Form/BecomeHostForm";
import { getImageUrl } from "../../Api/imageUpload";
import { AuthContext } from "../../contexts/AuthProvider";
import { getUserRole, hostRequest } from "../../Api/user";

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    getUserRole(user?.email).then((data) => {
      // console.log(data);
      setRole(data);
      setLoading(false)
    });
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];

    getImageUrl(image).then((data) => {
      const hostData = {
        location: location,
        documentIMG: data,
        role: "requested",
        email: user?.email,
      };
      hostRequest(hostData).then((data) => console.log(data));
    });
  };

  return (
    <>
      {role ? (
        <div className="h-screen text-gray-500 flex flex-col justify-center items-center text-xl lg:text-3xl ">Request sent,wait for admin approval</div>
   
      ) : (
     <>{loading===false &&   <BecomeHostForm handleSubmit={handleSubmit}></BecomeHostForm>}</>
      )}
    </>
  );
};

export default BecomeAHost;
