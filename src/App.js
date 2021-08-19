
import Button from "./Button";
import Input from "./Input";
import React from "react";

let timer=0;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: "",
      end:'',
      time:'',
      min:'',
      sec:'',
      totalSec:'',
      resume:false,
      label:'Pause'
    };
  }

  start =(event)=>{
    this.setState({start:event.target.value,min:event.target.value})
  }
  End =(event)=>{
    this.setState({end:event.target.value,sec:event.target.value})
  }
  callInterval =(totalSec)=>{
    timer= setInterval(()=>{
      
       // let time = (min+sec)-1
       this.setState({totalSec:this.state.totalSec-1})
      //  this.setState({start:min}) 
      //  this.setState({end:sec})
   

    },1000)
  }
  startTimer =()=>{
    let min=Number(this.state.start)*60
      let sec=Number(this.state.end)
      let totalSec=min+sec;
      this.setState({totalSec:totalSec})
      this.callInterval(totalSec)

   
 
  }

  pause = ()=>{
    this.setState({resume:!this.state.resume})
    let min=Number(this.state.start)*60
      let sec=Number(this.state.end)
      let totalSec=min+sec;
    if(this.state.resume){
      this.setState({label:"Pause"})
      this.callInterval(totalSec)
    }else{
      this.setState({label:"Resume"})
      clearInterval(timer)
    }
   
  }

  onReset = ()=>{
   
    let min=Number(this.state.min)*60
    let sec=Number(this.state.sec)
    let totalSec=min+sec;
    clearInterval(timer)
    this.setState({totalSec:totalSec})
   
   
  }
  display=()=>{
    let min=Number(this.state.totalSec)/60
    let sec=Number(this.state.totalSec)%60
    console.log(min)
    return (Math.floor(min)+":"+Math.floor(sec))
  }
  render() {
    return (
      <span className="App">
        <Input name="start"  value = {this.state.start} onChange={this.start}></Input>
        <Input name="End"  value ={this.state.end} onChange={this.End}></Input>
        <Button name="Start"  onClick={this.startTimer}></Button>
        <Button name={this.state.label} onClick={this.pause}></Button>
        <Button name="Reset" onClick={this.onReset}></Button>
        <div>Time</div>
        <div>{this.display()}</div>
      </span>
    );
  }
}

export default App;
