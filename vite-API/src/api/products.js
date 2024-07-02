import axios from "axios";
const url = import.meta.env.VITE_API_URL

const instance = axios.create({
    baseURL : url
});

export const fetchProduct = ()=>{ 
    return instance.get("/products")
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching products:', error);
      throw error;
    });
}

