import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../store/productAdd';
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@mui/base/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ProductAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMsg] = useState(null);
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
  });
  const [open, setOpen] = useState(false); // State for modal

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const success = () => {
    navigate('/products/list');
    console.log('successcb running');
    setErrorMsg(null);
    handleClose(); // Close modal on success
  };

  const errorHandle = (error) => {
    setErrorMsg(error.error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ productData: product, successCB: success, errorCB: errorHandle })).then(() => {
      navigate("/products/list")
      setProduct({
        name: '',
        category: '',
        price: '',
        image: '',
      });
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div>
      <Modal open={true} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            width: 300,
            backgroundColor: 'background.paper',
            boxShadow: 100,
            p: 6,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add New Product
          </Typography>

          <FormControl onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Product Name"
              variant="outlined"
              value={product.name}
              onChange={handleInputChange}
              style={{ marginBottom: '1rem' }}
            />

            <TextField
              id="category"
              name="category"
              label="Category"
              variant="outlined"
              value={product.category}
              onChange={handleInputChange}
              style={{ marginBottom: '1rem' }}
            />

            <TextField
              id="price"
              name="price"
              label="Price"
              type="number"
              variant="outlined"
              value={product.price}
              onChange={handleInputChange}
              style={{ marginBottom: '1rem' }}
            />

            <TextField
              id="image"
              name="image"
              label="Image URL"
              variant="outlined"
              value={product.image}
              onChange={handleInputChange}
              style={{ marginBottom: '1rem' }}
            />

            <Button  onClick={handleSubmit} variant="contained" type="submit" style={{ marginBottom: '1rem' }}>
              Submit
            </Button>
            {errorMessage}
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductAdd;

