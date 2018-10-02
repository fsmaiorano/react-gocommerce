import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';
import { getCategories } from './categories';

import { Types as ProductsTypes } from '../ducks/products';
import { getProducts, getProductById } from './products';

import { Types as CartTypes } from '../ducks/cart';
import { addCart } from './cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES, getCategories),
    takeLatest(ProductsTypes.GET_PRODUCTS, getProducts),
    takeLatest(ProductsTypes.GET_PRODUCT_BY_ID, getProductById),
    takeLatest(CartTypes.ADD_CART, addCart),
  ]);
}
