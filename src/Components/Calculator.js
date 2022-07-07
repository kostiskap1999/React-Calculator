import React from 'react';

import '../Assets/Styles/Components/Calculator.scss';

import { ButtonArea } from './ButtonArea';
import { CalcScreen } from './Screen';
import { calculate, isInputValid } from '../Functions/Calculator';


export class Calculator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      screenValue: '',
      result: 0
    }
  };

  addScreenValue(value) {
    if(isInputValid(value)) {
      var screenValue = this.state.screenValue + value;
      this.setState({screenValue: screenValue})
      this.setState({result: calculate(screenValue)}) 
    }      
  }

  setScreenValue(value) {
    if(isInputValid(value)){
      var screenValue = value;
      this.setState({screenValue: screenValue})
      this.setState({result: calculate(screenValue)})
    }      
  }


  render(){
    return(
      <div className='calculator'>
        <CalcScreen result={this.state.result} screenValue={this.state.screenValue} setScreenValue={this.setScreenValue.bind(this)} />
        <ButtonArea addScreenValue={this.addScreenValue.bind(this)} />
      </div>
    )
  }
}
