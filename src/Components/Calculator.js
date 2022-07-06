import React from 'react';

import '../Assets/Styles/Components/Calculator.scss';

import { ButtonArea } from './ButtonArea';
import { CalcScreen } from './Screen';


export class Calculator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      screenValue: ''
    }
  };

  addScreenValue(value) {
    var screenValue = this.state.screenValue + value;
    this.setState({screenValue: screenValue})
  }

  setScreenValue(value) {
    var screenValue = value;
    this.setState({screenValue: screenValue})
  }


  render(){
    return(
      <div className='calculator'>
        <CalcScreen screenValue={this.state.screenValue} setScreenValue={this.setScreenValue.bind(this)} />
        <ButtonArea addScreenValue={this.addScreenValue.bind(this)} />
      </div>
    )
  }
};