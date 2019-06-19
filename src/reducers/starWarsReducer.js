/* we need our action types here*/
import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from '../actions';
const initialState = {
  characters: [],
  isLoading: true,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
        error: ''
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: ''
      };
    default:
      return state;
  }
};

// Fill me in with the important reducers
// action types should be FETCHING, SUCCESS and FAILURE
// your switch statement should handle all of these cases.
