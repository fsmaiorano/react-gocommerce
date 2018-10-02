export const Types = {
  GET_CART: 'cart/GET_CART',

  ADD_CART: 'cart/ADD_CART',
  ADD_CART_SUCCESS: 'cart/ADD_CART_SUCCESS',
  ADD_CART_FAILURE: 'cart/ADD_CART_FAILURE',

  DELETE_CART: 'cart/DELETE_CART',
  DELETE_CART_SUCCESS: 'cart/DELETE_CART_SUCCESS',
  DELETE_CART_FAILURE: 'cart/DELETE_CART_FAILURE',

  UPDATE_CART: 'cart/UPDATE_CART',
};

const INITIAL_STATE = {
  feedback: null,
  data: [],
  isLoading: false,
  quantity: 0,
  total: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CART:
      return {
        ...state,
      };
    case Types.ADD_CART:
      return {
        ...state,
      };
    case Types.ADD_CART_SUCCESS:
      return {
        ...state,
        data: [...action.payload.data],
        total: action.payload.totalItems,
        quantity: action.payload.totalQuantity,
      };
    case Types.UPDATE_CART:
      return {
        data: [...state.data],
      };
    case Types.DELETE_CART:
      debugger;
      //   state.items -= action.payload.item.quantity;
      return {
        ...state,
        data: [...state.data],
      };
    default:
      return state;
  }
}

export const Creators = {
  getCart: () => ({
    type: Types.GET_CART,
    payload: { cart },
  }),
  addCart: (product, quantity) => ({
    type: Types.ADD_CART,
    payload: { product, quantity },
  }),
  addCartSuccess: (data, totalItems, totalQuantity) => ({
    type: Types.ADD_CART_SUCCESS,
    payload: { data, totalItems, totalQuantity },
  }),
  addCartFailure: feedback => ({
    type: Types.ADD_CART_FAILURE,
    payload: { feedback },
  }),

  updateCart: item => ({
    type: Types.UPDATE_CART,
    payload: { item },
  }),
  deleteCart: item => ({
    type: Types.DELETE_CART,
    payload: { item },
  }),
};
