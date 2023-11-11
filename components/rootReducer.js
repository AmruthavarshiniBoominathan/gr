// reducers.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';  // Adjust the path accordingly

const rootReducer = combineReducers({
  products: productReducer,
  // Add other reducers as needed
});

export default rootReducer;
