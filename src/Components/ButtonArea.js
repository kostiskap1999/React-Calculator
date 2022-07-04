import React from 'react';

import '../Assets/Styles/Components/Button.scss';
import '../Assets/Styles/Components/ButtonArea.scss';

import { CalcButton } from './Button';


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
      <div className='buttonArea'>
        <CalcButton value='1' />
        <CalcButton value='2' />
        <CalcButton value='3' />
        <CalcButton value='4' />
        <CalcButton value='5' />
        <CalcButton value='6' />
        <CalcButton value='7' />
        <CalcButton value='8' />
        <CalcButton value='9' />
        <CalcButton value='+/-' />
        <CalcButton value='0' />
        <CalcButton value='.' />

      </div>
    )
  }
};