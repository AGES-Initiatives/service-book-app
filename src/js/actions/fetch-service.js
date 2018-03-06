import $ from 'jquery';
import _ from 'lodash';
import { ACTIONS } from './constants';
import fetch from 'isomorphic-fetch';
import toggleService from './toggle-service';
import { SERVER_BASE_URL } from '../constants';

// const BASE_URL = 'http://www.agesinitiatives.com/dcs/public/dcs/';
// const BASE_URL = 'http://localhost:3003/';

function requestService(url) {
  return {
    type: ACTIONS.REQUEST_SERVICE,
    payload: url
  }
}

function receiveService(res) {
  return {
    type: ACTIONS.RECEIVE_SERVICE,
    payload: res
  }
}

export default function fetchService(url) {
  return (dispatch) => {
    dispatch(requestService(url));

    return fetch(SERVER_BASE_URL + url, { mode: 'cors', 'Content-Type': 'text/html' })
      .then((resp) => {
        //console.log('jQuery: ', $);
        //console.log("Response: ", resp);
        //dispatch(receiveService(resp));
        //dispatch(toggleService());
        return resp.text();
      })
      .then((resp) => {
        const serviceHtml = resp.valueOf();
        const serviceText = _.filter($(serviceHtml), (h) => {
          return h.className === 'content';
        })[0];
        dispatch(receiveService(serviceText));
        dispatch(toggleService());
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }
}