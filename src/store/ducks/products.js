export const Types = {
  GET_PRODUCTS: 'products/GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'products/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'products/GET_PRODUCTS_FAILURE',

  GET_PRODUCT_BY_ID: 'products/GET_PRODUCTS_BY_ID',
  GET_PRODUCT_BY_ID_SUCCESS: 'products/GET_PRODUCTS_BY_ID_SUCCESS',
  GET_PRODUCT_BY_ID_FAILURE: 'products/GET_PRODUCTS_BY_ID_FAILURE',
};

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  feedback: null,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case Types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: true,
        data: [...action.payload.productsList],
      };
    case Types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: true,
        feedback: [...action.payload.error],
      };

    default:
      return state;
  }
}

export const Creators = {
  getProducts: () => ({
    type: Types.GET_PRODUCTS,
  }),
  getProductsSuccess: productsList => ({
    type: Types.GET_PRODUCTS_SUCCESS,
    payload: { productsList },
  }),
  getProductsFailure: error => ({
    type: Types.GET_PRODUCTS_FAILURE,
    payload: { error },
  }),
};
