import React from 'react';

import '../Assets/Styles/Calculator.css';

import { ButtonArea } from './ButtonArea';
import { CalcScreen } from './CalcScreen';


export class Calculator extends React.Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div className='calculator'>
        <CalcScreen />
        <ButtonArea />
      </div>
    )
  }
};