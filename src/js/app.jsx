import React from 'react';
import {connect} from 'react-redux';
import selectors from './selectors';
import actions from './actions';

import Header from './components/header.jsx';
import Service from './components/service.jsx';
import ServiceList from './components/service_list.jsx';
import SettingsPanel from './components/settings_panel.jsx';

const App = React.createClass({
  render() {
    return (
      <div className="service-book-app">
        <Header
          showService={this.props.showService}
          changeTitle={this.props.changeTitle}
          headerTitle={this.props.headerTitle}
          toggleService={this.props.toggleService}
          toggleSettings={this.props.toggleSettings}
        />
        <ServiceList
          changeTitle={this.props.changeTitle}
          fetchService={this.props.fetchService}
        />
        <SettingsPanel showSettings={this.props.showSettings} />
        <Service
          displayLang={this.props.displayLang}
          showService={this.props.showService}
          selectedService={this.props.selectedService}
          toggleLanguage={this.props.toggleLanguage}
        />
      </div>
    )
  }
});

function mapStateToProps(state) {
  const boundSelectors = selectors(state);
  return {
    displayLang: boundSelectors.displayLang(),
    headerTitle: boundSelectors.headerTitle(),
    selectedService: boundSelectors.selectedService(),
    showService: boundSelectors.showService(),
    showSettings: boundSelectors.showSettings()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle(title) {
      dispatch(actions.changeTitle(title));
    },
    fetchService(url) {
      dispatch(actions.fetchService(url));
    },
    toggleLanguage() {
      dispatch(actions.toggleLanguage());
    },
    toggleService() {
      dispatch(actions.toggleService());
    },
    toggleSettings() {
      dispatch(actions.toggleSettings());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
