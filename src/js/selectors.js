import _ from 'lodash';

export function displayLang(state) {
  return _.get(state, 'displayLang', 'en');
}

export function headerTitle(state) {
  return _.get(state, 'headerTitle', 'Service Book');
}

export function selectedService(state) {
  return _.get(state, 'selectedService', null);
}

export function showSettings(state) {
  return _.get(state, 'showSettings', false);
}

export function showService(state) {
  return _.get(state, 'showService', false);
}

export default function selectors(state) {
  return {
    displayLang: _.partial(displayLang, state),
    headerTitle: _.partial(headerTitle, state),
    selectedService: _.partial(selectedService, state),
    showService: _.partial(showService, state),
    showSettings: _.partial(showSettings, state)
    
  }
}
