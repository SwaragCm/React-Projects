import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../store/product';
import './Product.css'

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
      <table className="product-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.slice(0, displayCount).map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td><img src={product.image} alt={product.title} style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      {products.length > displayCount && (
        <div className="load-more-button">
        <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
