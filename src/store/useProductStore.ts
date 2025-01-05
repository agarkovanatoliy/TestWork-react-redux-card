import {create} from 'zustand';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  liked: boolean;
}

interface ProductState {
  products: Product[];
  favorites: Product[];
  loadProducts: (products: Product[]) => void;
  toggleLike: (id: number) => void;
  removeProduct: (id: number) => void;
  addProduct: (product: Product) => void;
}

const useProductStore = create<ProductState>((set) => ({
  products: [],
  favorites: [],
  loadProducts: (products) => set({ products }),
  toggleLike: (id) => set((state) => {
    const products = state.products.map(product =>
      product.id === id ? { ...product, liked: !product.liked } : product
    );
    const favorites = products.filter(product => product.liked);
    return { products, favorites };
  }),
  removeProduct: (id) => set((state) => ({
    products: state.products.filter(product => product.id !== id),
    favorites: state.favorites.filter(product => product.id !== id),
  })),
  addProduct: (product) => set((state) => ({
    products: [...state.products, product],
  })),
}));

export default useProductStore;