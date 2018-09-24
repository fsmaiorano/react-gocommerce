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
