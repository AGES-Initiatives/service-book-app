import $ from 'jquery';
import React from 'react';
import classNames from 'classnames';

export default React.createClass({
  componentDidUpdate() {
    $('.service').html(this.props.selectedService);
    const lang = this.props.displayLang;
    if (lang == "en") {
      $('.leftCell').hide();
      $('.rightCell').show();
    } else if (lang == "gr") {
      $('.leftCell').show();
      $('.rightCell').hide();
    }
    //this.getDOMNode().scrollTop = 0;
  },

  handleDblClick() {
    console.log("Double click");
  },

  render() {
    return (
      <div
        className={classNames("service", { "show-service": this.props.showService })}
        onClick={this.props.toggleLanguage}
      />
    );
  }
});
