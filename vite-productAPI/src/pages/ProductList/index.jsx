import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { getProducts } from '../../store/product';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  const [displayCount, setDisplayCount] = useState(3); // Number of products to display initially

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const loadMore = () => {
    setDisplayCount(prevCount => prevCount + 1); // Increase displayCount by 1
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
    
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow>
        <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Image&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {products.slice(0, displayCount).map(product => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                {product.name}
              </StyledTableCell>
              <StyledTableCell align="right">{product.category_name}</StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right"><img src={product.image} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }} /></StyledTableCell>
            </StyledTableRow>
          ))}

        </TableBody>
        </Table>
    </TableContainer>
    &nbsp;
      {products.length > displayCount && (
        <div className="load-more-button">
        <button onClick={loadMore}>Load More </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
