import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';
import { getCategories } from './categories';

import { Types as ProductsTypes } from '../ducks/products';
import { getProducts, getProductById } from './products';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES, getCategories),
    takeLatest(ProductsTypes.GET_PRODUCTS, getProducts),
    takeLatest(ProductsTypes.GET_PRODUCT_BY_ID, getProductById),
  ]);
}
