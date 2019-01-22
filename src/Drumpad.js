import React, { Component } from 'react';
import Sound from './Sound';


export default class Drumpad extends Component {  
  render() {
    const text=this.props.text;
  return (
    <div style={style} >
     <Sound id={text} />
    </div>
  )}
}


const style={ 
    display:'inline-block',
    border:'1px solid #fff',
    width:100,
    height:100,
    textAlign: 'center',
    backgroundColor: '#33dd44'
}
