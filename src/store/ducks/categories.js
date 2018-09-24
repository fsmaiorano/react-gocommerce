export const Types = {
  GET_CATEGORIES: 'categories/GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'categories/GET_CATEGORIES_FAILURE',

  SET_CATEGORIES_ACTIVE: 'categories/SET_CATEGORIES_ACTIVE',
  GET_CATEGORIES_ACTIVE: 'categories/GET_CATEGORIES_ACTIVE',
};

const INITIAL_STATE = {
  feedback: null,
  activeCategory: null,
  data: [],
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
        data: [...action.payload.categoriesList],
        isLoading: false,
      };
    case Types.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        feedback: [...action.payload.error],
        isLoading: false,
      };

    case Types.SET_CATEGORIES_ACTIVE:
      return {
        ...state,
        activeCategory: action.payload.category,
      };
    case Types.GET_CATEGORIES_ACTIVE:
      return {
        ...state,
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

  setActiveCategory: category => ({
    type: Types.SET_CATEGORIES_ACTIVE,
    payload: { category },
  }),
  getActiveCategory: () => ({
    type: Types.GET_CATEGORIES_ACTIVE,
  }),
};
