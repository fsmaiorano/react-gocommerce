export const Types = {
  GET_CATEGORIES: 'categories/GET_CATEGORIES',
};

const INITIAL_STATE = {
  feedback: null,
  data: [],
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CATEGORIES:
      return {
        ...state,
        data: [...state.data],
      };
    default:
      return state;
  }
}

export const Creators = {
  getCategories: categories => ({
    type: Types.GET_CATEGORIES,
    payload: { categories },
  }),
};
