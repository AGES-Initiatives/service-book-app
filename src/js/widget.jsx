'use strict';

import React from 'react';

class Widget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    document.getElementById('messages').innerHTML += " inWidget ";
    return (
      <h2>Success! Cry havoc!</h2>
    );
  }
}

export default Widget;
