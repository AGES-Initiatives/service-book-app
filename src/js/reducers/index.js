import { combineReducers } from 'redux';

import displayLang from './display-lang';
import headerTitle from './header-title';
import selectedService from './selected-service';
import showService from './show-service';
import showSettings from './show-settings';

const rootReducer = combineReducers({
  displayLang,
  headerTitle,
  selectedService,
  showService,
  showSettings
});

export default rootReducer;
