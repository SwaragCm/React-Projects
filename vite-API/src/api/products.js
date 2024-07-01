import axios from "axios";

const instance = axios.create({
    baseURL : 'https://fakestoreapi.com',
});

export const fetchProduct = ()=>{
    return instance.get('/products')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching products:', error);
      throw error;
    });
}

