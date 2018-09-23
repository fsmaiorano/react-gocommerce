import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as CategoriesActions } from '../ducks/categories';

export function* getCategories() {
  try {
    const { data } = yield call(api.get, '/categories');

    yield put(CategoriesActions.getCategoriesSuccess(data));
  } catch (err) {
    yield put(CategoriesActions.getCategoriesFailure('Erro ao adicionar usuário'));
  }
}
