import React, { Component } from 'react';

export default class Sound extends Component {
    constructor(props){
        super()
         this.handleClick=this.handleClick.bind('this')
    }
    
    handleClick(soundID,soundstatus){
        // eslint-disable-next-line
        soundstatus.map(element => {
            if(element.id===soundID){
                 var position = soundstatus.indexOf(element);
                 soundstatus[position].status= true;
                 // eslint-disable-next-line
                 soundstatus.map(element => {
                    if(element.status===true){
                        let audio= new Audio(element.src)
                        audio.play();
                    }
                })
                soundstatus[position].status= false;
                }
        });
    }
  render(){
      const soundID=this.props.id
      let soundstatus=[{
        id:'Q',
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        status: false
    },
    {
        id:'W',
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        status: false
    },
    {
        id:'E',
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        status: false
    },
    {
        id:'A',
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        status: false
    },
    {
        id:'S',
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        status: false
    },
    {
        id:'D',
        src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        status: false
    },
    {
        id:'Z',
        src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        status: false
    },
    {
        id:'X',
        src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        status: false
    },
    {
        id:'C',
        src:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        status: false
    }
]

  return (
    <div
    style={style}
    onClick={() => this.handleClick(soundID,soundstatus)}
    >
      {soundID}
    </div>
    )
  }
}


const style={ 
    display:'inline-block',
    border:'1px solid #fff',
    width:100,
    height:100,
    textAlign: 'center',
    backgroundColor: '#55dd44'
}