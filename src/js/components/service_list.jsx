'use strict';

import $ from 'jquery';
import React from 'react';
import parse_service_listing from '../file_parser';
import { SERVER_BASE_URL } from '../constants';

class ServiceList extends React.Component {
  constructor(props, context) {
    console.log("In constructor");
    super(props, context);
    this.state = {};
  }

  loadServiceList() {

  }

  componentDidMount() {
    // Temporary hack, will reduxify this later
    let that = this;
    $.ajax({
      type: 'GET',
      headers: { 'Access-Control-Allow-Origin': '*' },
      dataType: 'json',
      url: SERVER_BASE_URL + 'servicesindex.json',
      // url: 'http://localhost:3003/servicesindex.json',
      // url: 'http://www.agesinitiatives.com/dcs/public/dcs/servicesindex.json',
      crossDomain: true,
      success(resp) {
        console.log("Resp: ", resp);
        let service_listing = parse_service_listing(resp);
        console.log("Service json", service_listing);
        that.setState({data: service_listing});
      },
      error(err) {
        $('#app-mountpoint').append('Error:' + err.toString());
      }
    })
  }

  render() {
    if (this.state.data) {
      let months = this.state.data.map((month, i) => {
        return(
            <MonthList 
              key={i} 
              data={month.data}
              monthName={month.name}
              changeTitle={this.props.changeTitle}
              fetchService={this.props.fetchService} 
            />
        );
      });
      return (
        <div className="service-list">
          <ul className="full-list">
          {months}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="service-list">
          <ul className="full-list"></ul>
        </div>
      );    
    }
  }
}

class MonthList extends React.Component {
  render() {
    let day_list_items = this.props.data.map((day, i) => {
      return(
        <DayListItem key={this.props.monthName + day.title}
          title={day.title}
          services={day.services}
          changeTitle={this.props.changeTitle}
          fetchService={this.props.fetchService}
        />
      );
    });
    return (
      <li key={this.props.name + 'root'} className="month-wrapper">
      <p className="month-header">{this.props.monthName}</p>
        <ul className="month-list">
          {day_list_items}
        </ul>
      </li>
    );
  }
}

class DayListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'showDayList': false };
  }

  _toggleShowDays() {
    this.setState({ showDayList: !this.state.showDayList });
  }

  render() {
    const showClass = (this.state.showDayList) ? 'day-item show-days' : 'day-item';
    const day_service_filtered = _.reject(this.props.services, (service) => {
      return service.name === "Matins - Customizable";
    })
    const day_service_items = day_service_filtered.map((service, i) => {
      return (
        <DayServiceList 
          key={service.name}
          changeTitle={this.props.changeTitle}
          fetchService={this.props.fetchService}
          serviceName={service.name}
          serviceLink={service.href}
        />
      );
    });
    return(
      <li 
        key={this.props.key} 
        className={showClass}
      >
        <div
          className="day-header"
          onClick={this._toggleShowDays.bind(this)}
        >
          {this.props.title}
        </div>
        <ul className="day-list">
          {day_service_items}
        </ul>
      </li>
    );
  }
}

class DayServiceList extends React.Component {
  _handleClick() {
    this.props.fetchService(this.props.serviceLink);
    this.props.changeTitle(this.props.serviceName);
  }

  render() {
    return (
      <li
        key={this.props.key}
        className="day-service-li"
        onClick={this._handleClick.bind(this)}
      >
        {this.props.serviceName}
      </li>
    )
  }
}

export default ServiceList;
