import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../../components/category/category.component';

// import { ProductsContainer } from './shop.styles';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop;