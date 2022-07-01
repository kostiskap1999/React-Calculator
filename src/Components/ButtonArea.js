import React from 'react';

import '../Assets/Styles/Button.css';

import { CalcButton } from './CalcButton';


export class ButtonArea extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  };

  render(){
    
    this.state.value = this.props.value;

    return(
      <div>
        <CalcButton value='1' />
        <CalcButton value='2' />
        <CalcButton value='3' />
        <CalcButton value='4' />
        <CalcButton value='5' />
        <CalcButton value='6' />
        <CalcButton value='7' />
        <CalcButton value='8' />
        <CalcButton value='9' />
        <CalcButton value='0' />

      </div>
    )
  }
};