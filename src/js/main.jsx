"use strict";

import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './app.jsx';
import reducers from './reducers';

// // import Widget from "./widget.jsx";
// import Header from './components/header.jsx';
// import ServiceList from './components/service_list.jsx';
// import SettingsPanel from './components/settings_panel.jsx';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, logger));

var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {
    app.receivedEvent('deviceready');

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app-mountpoint')
    );

  },

  receivedEvent: function(id) {
    // var parentElement = document.getElementById(id);
    // var listeningElement = parentElement.querySelector('.listening');
    // var receivedElement = parentElement.querySelector('.received');

    // listeningElement.setAttribute('style', 'display:none;');
    // receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
}

app.initialize();
app.onDeviceReady();
$(document).trigger('deviceready');

