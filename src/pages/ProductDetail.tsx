import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProductStore from '../store/useProductStore.ts';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = useProductStore((state) =>
    state.products.find((product) => product.id === Number(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <button onClick={() => navigate('/products')}>Back to Products</button>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;