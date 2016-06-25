"use strict";

import classNames from 'classnames';
import React from 'react';

class SettingsPanel extends React.Component {
  render() {
    return (
      <div className={classNames("settings-panel", {"visible-panel": this.props.showSettings })}>
        <ul className="settings-list">
          <UserSettingsPanel />
          <li className="setting-break"></li>
          <li className="setting-item">
            <i className="fa fa-book"></i>
            <span>SERVICE BOOK</span>
          </li>
          <li className="setting-item">
            <span>GOA Edition</span>
          </li>
          <li className="setting-item">
            <i className="fa fa-calendar"></i>
            <span>Calendar</span>
          </li>
          <li className="setting-item">
            <span>Sacraments, etc</span>
          </li>
          <li className="setting-break"></li>
          <li className="setting-item">
            <i className="fa fa-cog"></i>
            <span>PREFERENCES</span>
          </li>
          <li className="setting-item">
            <span>Default Lang</span>
          </li>
          <li className="setting-item">
            <span>Version Swap</span>
          </li>
          <li className="setting-item">
            <span>Text Size: - / +</span>
          </li>
          <li className="setting-item">
            <span>ABOUT</span>
          </li>
          <li className="setting-item">
            <span>Sign Out</span>
          </li>
        </ul>
      </div>
    )
  }
}

class UserSettingsPanel extends React.Component {
  render() {
    return (
      <li className="setting-item">
        <i className="fa fa-user"></i>
        <span>jdaly101@aol.com</span>
      </li>
    );
  }
}

export default SettingsPanel;
