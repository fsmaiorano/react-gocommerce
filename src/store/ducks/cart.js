export const Types = {
  GET_CART: 'cart/GET_CART',
  ADD_CART: 'cart/ADD_CART',
  DELETE_CART: 'cart/DELETE_CART',
};

const INITIAL_STATE = {
  feedback: null,
  data: [],
  isLoading: false,
  items: 0,
  total: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CART:
      return {
        ...state,
      };
    case Types.ADD_CART:
      const item = state.data.filter(x => x.id === action.payload.item.id)[0];
      if (!item) {
        action.payload.item.quantity = 1;
        return {
          ...state,
          items: state.items + 1,
          data: [...state.data, action.payload.item],
          total: state.total + action.payload.item.price,
        };
      }
      item.quantity += +1;
      return {
        ...state,
        items: state.items + 1,
        data: [...state.data, ...item],
        total: state.total + action.payload.item.price,
      };

    case Types.DELETE_CART:
      const filtered = state.data.filter(x => x.id !== action.payload.item.id);
      state.items -= action.payload.item.quantity;
      return {
        ...state,
        data: [...filtered],
        total: state.total + action.payload.item.price,
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
  deleteCart: item => ({
    type: Types.DELETE_CART,
    payload: { item },
  }),
};
