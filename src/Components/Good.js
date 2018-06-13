import React, { Component } from 'react';


class Good extends Component {
  render() {
    return (
      <div>
      <h3><u>Good Robot</u></h3>
      <p>I hear you saying {this.props.text}. Is that correct?</p>
      <br></br>
      </div>
    );
  }
}

export default Good;
