'use strict';

import $ from 'jquery';
import classNames from 'classnames';
import React from 'react';

class Header extends React.Component {
  handleNavClick() {
    if (this.props.showService) {
      this.props.changeTitle("Service Book");
      this.props.toggleService();
    } else {
      this.props.toggleSettings();
    }
  }

  render() {
    const faClass = (this.props.showService) ? "fa-chevron-left" : "fa-bars";
    return (
      <div className="header-wrap">
        <a className="left-header" onClick={this.handleNavClick.bind(this)}>
          <i className={classNames("fa", faClass)}></i>
        </a>
        <h2>{this.props.headerTitle}</h2>
      </div>
    );
  }
}

class HeaderNavButton extends React.Component {
  handleClick() {
    console.log("Nav clicked");
    //$('.settings-panel').toggleClass('visible-panel');
    //this.props.toggleSettings();
  }

  render() {
    return (
      <a className="left-header" onClick={this.props.toggleSettings}>
        <i className="fa fa-bars"></i>
      </a>
    );
  }
}

export default Header;