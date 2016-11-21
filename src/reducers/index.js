import { combineReducers } from 'redux';
import BookStore from './books_reducer'
import SelectedBook from './selected_book_reducer'
import WeatherReducer from './weather_reducer'
const rootReducer = combineReducers({
  books: BookStore,
  selectedBook:SelectedBook,
  weather:WeatherReducer
});

export default rootReducer;
