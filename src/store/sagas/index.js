import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';
import { getCategories } from './categories';

export default function* rootSaga() {
  return yield all([takeLatest(CategoriesTypes.GET_CATEGORIES, getCategories)]);
}
