import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts.tsx';
import ProductCard from '../components/ProductCard.tsx';
import styles from './ProductList.module.css';

const ProductList: React.FC = () => {
  const products = useFetchProducts();
  const navigate = useNavigate();
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredProducts = showFavorites
    ? products.filter(product => product.liked)
    : products;

  return (
    <div className={styles.productListContainer}>
      <button
        className={styles.productButton}
        onClick={() => navigate('/create-product')}
      >
        Create New Product
      </button>

      <button
        className={styles.productButton}
        onClick={() => setShowFavorites(!showFavorites)}
      >
        {showFavorites ? "Show All" : "Show Favorites"}
      </button>

      <div className={styles.productGrid}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            liked={product.liked}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;