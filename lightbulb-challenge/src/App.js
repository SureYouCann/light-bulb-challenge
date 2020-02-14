import React, { Component } from 'react';
import './App.css';
import lightBulb from './inc.png'
import upperCut1 from './uppercut1.png'
import upperCut2 from './uppercut2.png'


export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            whichUpperCut: upperCut1,
            lightColor: "white",
            arrRyu: []
        }

    }

turnOn = () => {
    if(this.state.whichUpperCut==upperCut1) {
        this.setState({whichUpperCut: upperCut2, lightColor: "yellow"})

    } else if (this.state.whichUpperCut==upperCut2){
        this.setState({whichUpperCut: upperCut1, lightColor: "white"})
    }
}

addRyu = () => {
    let newArr = this.state.arrRyu
    newArr.push(<img src={this.state.whichUpperCut} onClick= {this.turnOn} /> )
    this.setState({arrRyu: newArr})
}




  render() {
    return (
      <div>
        <img src={lightBulb} className="square" style={{backgroundColor:this.state.lightColor}} />
        <br />
        <img src={this.state.whichUpperCut} onClick= {this.turnOn} />
        <br />
        <div>{this.state.arrRyu}</div>
        <button onClick= {this.addRyu} > Add Ryu</button>
      </div>
    );
  }
}
