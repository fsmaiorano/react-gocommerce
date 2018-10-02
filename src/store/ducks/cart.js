export const Types = {
  GET_CART: 'cart/GET_CART',
  ADD_CART: 'cart/ADD_CART',
  DELETE_CART: 'cart/DELETE_CART',
  UPDATE_CART: 'cart/UPDATE_CART',
};

const INITIAL_STATE = {
  feedback: null,
  data: [],
  isLoading: false,
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
        data: [...state.data, action.payload.item],
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
  addCart: item => ({
    type: Types.ADD_CART,
    payload: { item },
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
