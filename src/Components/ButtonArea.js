import React from 'react';

import '../Assets/Styles/Components/Button.scss';
import '../Assets/Styles/Components/ButtonArea.scss';

import { CalcButton } from './Button';


export class ButtonArea extends React.Component {


  
  addScreenValue(value) {
    this.props.addScreenValue(value);
  };

  render(){

    return(
      <div className='buttonArea'>
        <CalcButton value='1' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='2' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='3' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='4' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='5' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='6' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='7' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='8' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='9' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='+/-' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='0' addScreenValue={this.addScreenValue.bind(this)} />
        <CalcButton value='.' addScreenValue={this.addScreenValue.bind(this)} />

      </div>
    )
  }
};