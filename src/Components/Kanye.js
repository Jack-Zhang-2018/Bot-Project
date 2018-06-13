import React, { Component } from 'react';


class Kanye extends Component {
  render() {
    return (
      <div>
        <h3><u>Kanyebot 5000</u></h3>
        <p>Im gonna let you finish but Beyonce is {this.props.text}</p>
        <br></br>
      </div>
    );
  }
}

export default Kanye;
