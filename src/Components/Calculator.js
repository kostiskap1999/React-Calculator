import React from 'react';

import '../Assets/Styles/Components/Calculator.scss';

import { ButtonArea } from './ButtonArea';
import { CalcScreen } from './Screen';
import { calculate, isExpressionFinished } from '../Functions/Calculator';


export class Calculator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      screenValue: '',
      result: 0
    }
  };

  addScreenValue(value) {
    var screenValue = this.state.screenValue + value;
    this.setState({screenValue: screenValue})

    if(isExpressionFinished(value))
      this.setState({result: calculate(value)})
      
  }

  setScreenValue(value) {
    var screenValue = value;
    this.setState({screenValue: screenValue})
    
    if(isExpressionFinished(value))
      this.setState({result: calculate(value)})
  }


  render(){
    return(
      <div className='calculator'>
        <CalcScreen result={this.state.result} screenValue={this.state.screenValue} setScreenValue={this.setScreenValue.bind(this)} />
        <ButtonArea addScreenValue={this.addScreenValue.bind(this)} />
      </div>
    )
  }
};