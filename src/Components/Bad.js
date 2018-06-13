import React, { Component } from 'react';


class Bad extends Component {
  render() {
    return (
      <div>
        <h3><u>Bad Robot</u></h3>
        <br></br>
        <p>I hear you saying</p>
      </div>
    );
  }
}

export default Bad;


//PSEUDOCODE

//Find the length of the number of characters in the box
//Divide the number of characters in the box with the number of charcters in f

let inputCount = this.props.text.length
let blaCount = 3
let ratio = inputCount/blaCount
let bla = "bla"

if (ratio < 1) {
    return string.split("").splice(0,ratio*3).join("")
  }
} else if (Number.isInteger(ratio)) {
  for (let index = 1; index < ratio; index++) {
    bla += bla
  } return bla
} else {

} 
