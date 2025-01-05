import { useEffect } from 'react';
import axios from 'axios';
import useProductStore from '../store/useProductStore.ts';

const useFetchProducts = () => {
  const { products, loadProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          loadProducts(response.data.map((product: any) => ({
            ...product,
            liked: false
          })));
        })
        .catch(error => console.error("Error loading products", error));
    }
  }, [products.length, loadProducts]);

  return products;
};

export default useFetchProducts;