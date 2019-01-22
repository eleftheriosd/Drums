import React, { Component } from 'react';
import Drumpad from './Drumpad';

export default class DrumDesplay extends Component {
  constructor(props){
    super()
     this.handlePress=this.handlePress.bind('this')
}

  handlePress(soundstatus){
    document.addEventListener('keypress',(e)=>{
       
        
        const soundID=e.key.toUpperCase()
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
)}

render() {
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
this.handlePress(soundstatus);
  return (
    <div id="display" style={style} >
      <Drumpad id={0} text="Q" className='drum-pad' />
      <Drumpad id={1} text="W" className='drum-pad' />
      <Drumpad id={2} text="E" className='drum-pad' /><br/>
      <Drumpad id={3} text="A" className='drum-pad' />
      <Drumpad id={4} text="S" className='drum-pad' />
      <Drumpad id={5} text="D" className='drum-pad' /><br/>
      <Drumpad id={6} text="Z" className='drum-pad' />
      <Drumpad id={7} text="X" className='drum-pad' />
      <Drumpad id={8} text="C" className='drum-pad' />
    </div>
  )
}
}

const style={
  width:'100%',
  height:306,
  textAlign: 'center',
  backgroundColor: '#44cc33'
}

