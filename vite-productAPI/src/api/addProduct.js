import axios from "axios";

export const postData = (productData,success,errorHandle) => {
  const url = `${import.meta.env.VITE_ADD_URL}/products/create`;
  return(
    axios.post(url, productData).then(
      (response)=>{
        success()
        console.log("success called",success);
        return response.data;
      },
      (error)=>{
          console.log(error.response.data,"invalid");
          errorHandle(error.response.data)
      }
    )

    )}


