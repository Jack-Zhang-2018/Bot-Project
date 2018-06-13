import React, { Component } from 'react';
import Good from './Components/Good'
import Bad from './Components/Bad'
import Kanye from './Components/Kanye'

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        text: 'XYZZY'
      }
    }

    updateText(e){
      this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        <h1><u>Robo Active Listening</u></h1>
        <div>
            <input type = "text" onChange={this.updateText.bind(this)} />
                </div><br></br>
        <Good text={this.state.text}/>
        <Bad text={this.state.text}/>
        <Kanye text={this.state.text}/>
      </div>
    );
  }
}

export default App;
