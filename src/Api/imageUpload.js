export const getImageUrl=async image=>{

    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?key=354ed7877ebd48e85fe07daa9039ecc9";
    // console.log(formData);
    
    const response =await fetch(url, {
      method: "POST",
      body: formData,
    })
    const data=await response.json()
    return data.data.display_url
}