import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as ProductsAction } from '../ducks/products';

export function* getProducts() {
  try {
    const { data } = yield call(api.get, '/products');
    yield put(ProductsAction.getProductsSuccess(data));
  } catch (err) {
    yield put(ProductsAction.getProductsFailure('Erro ao carregar os produtos'));
  }
}

export function* getProductById(action) {
  try {
    const { data } = yield call(api.get, '/category_products');
    const productCategory = data.filter(c => c.id === parseInt(action.payload.id, 0))[0].products;
    yield put(ProductsAction.getProductByIdSuccess(productCategory));
  } catch (err) {
    yield put(ProductsAction.getProductByIdFailure('Erro ao carregar o produto'));
  }
}
