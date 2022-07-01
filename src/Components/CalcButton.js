import React from 'react';

import '../Assets/Styles/Button.css';


export class CalcButton extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  };

  render(){

    this.state.value = this.props.value;

    return(
        <button className='calculatorButton'>
          {this.state.value}
        </button>
    )
  }
};