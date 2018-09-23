export const Types = {
  GET_CATEGORIES: 'categories/GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'categories/GET_CATEGORIES_FAILURE',
};

const INITIAL_STATE = {
  feedback: null,
  categories: [],
  isLoading: false,
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case Types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [...action.payload.categoriesList],
        isLoading: false,
      };
    case Types.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        feedback: [...action.payload.error],
        isLoading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  getCategories: () => ({
    type: Types.GET_CATEGORIES,
  }),
  getCategoriesSuccess: categoriesList => ({
    type: Types.GET_CATEGORIES_SUCCESS,
    payload: { categoriesList },
  }),
  getCategoriesFailure: error => ({
    type: Types.GET_CATEGORIES_FAILURE,
    payload: { error },
  }),
};
