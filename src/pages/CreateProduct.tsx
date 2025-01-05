import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../store/useProductStore.ts';
import styles from './CreateProduct.module.css';

const CreateProduct: React.FC = () => {
  const { addProduct } = useProductStore();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description && image) {
      addProduct({ id: Date.now(), title, description, image, liked: false });
      navigate('/products');
    } else {
      alert('Please fill all fields');
    }
  };

  const handleCancel = () => {
    navigate('/products');
  };

  return (
    <div className={styles.container}>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <div className={styles.buttonContainer}>
          <button type="submit">Create</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;