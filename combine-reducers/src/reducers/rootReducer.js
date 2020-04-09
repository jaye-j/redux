import { combineReducers } from "redux";
import authorsReducer from "./authors";
import booksReducer from "./books";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;
