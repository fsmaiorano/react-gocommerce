import { put, select } from 'redux-saga/effects';
import { Creators as CartActions } from '../ducks/cart';

export function* addCart(action) {
  try {
    const { data } = yield select(state => state.cart);
    const index = data.findIndex(p => p.id === action.payload.product.id);
    if (!('quantity' in action.payload.product)) {
      action.payload.product.quantity = 1;
      data.push(action.payload.product);
    } else if (action.payload.quantity !== 1) {
      data[index].quantity = isNaN(action.payload.quantity) === true ? 0 : action.payload.quantity;
    } else {
      data[index].quantity += 1;
    }

    const sumItems = data.reduce((prevVal, item) => prevVal + item.price * item.quantity, 0);
    const sumQuantity = data.reduce((prevVal, item) => prevVal + item.quantity, 0);
    yield put(CartActions.addCartSuccess(data, sumItems, sumQuantity));
  } catch (err) {
    yield put(CartActions.addCartFailure('Erro ao colocar o produto no carrinho'));
  }
}

export function* deleteCart(action) {
  try {
    const { data, total, quantity } = yield select(state => state.cart);
    const index = data.findIndex(p => p.id === action.payload.product.id);
    const filteredData = data.filter(x => x.id !== action.payload.product.id);

    const sumItems = total - data[index].price * data[index].quantity;
    const sumQuantity = quantity - data[index].quantity;

    yield put(CartActions.deleteCartSuccess(filteredData, sumItems, sumQuantity));
  } catch (err) {
    yield put(CartActions.deleteCartFailure('Erro ao remover o produto do carrinho'));
  }
}
