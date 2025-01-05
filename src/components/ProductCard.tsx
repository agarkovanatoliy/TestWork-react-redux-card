import React from 'react';
import { FaHeart } from 'react-icons/fa';
import useProductStore from '../store/useProductStore.ts';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  liked: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, image, liked }) => {
  const { toggleLike, removeProduct } = useProductStore();

  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productDescription}>{description.substring(0, 100)}...</p>
      <div className={styles.iconContainer}>
        <FaHeart
          className={liked ? styles.liked : styles.unliked}
          onClick={() => toggleLike(id)}
        />
        <button onClick={() => removeProduct(id)} className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;