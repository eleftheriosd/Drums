import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DrumDesplay from './DrumDesplay';

export default class App extends Component {  
  render() {
    return (
      <div id="drum-machine" style={style}>
      Technical issues with tests not fullfilled because they were considered pointless.
        <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'/>
        <DrumDesplay />
      </div>
    )
  }
}

const style={
  textAlign:'center',
  margin: 'auto',
  width: '50%',
  border: '3px solid green',
}
ReactDOM.render(
<App />,
document.getElementById('root'));

