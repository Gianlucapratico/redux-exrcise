const initialState = {
  favouriteCompany: {
    content: [],
  },
  jobSelected: {
    content: null,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,

          content: [...state.favouriteCompany.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,

          content: state.favouriteCompany.content.filter(
            (_, i) => i !== action.payload
          ),
        },
      };

    case "SELECT_JOB":
      return {
        ...state,
        jobSelected: {
          ...state.jobSelected,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
