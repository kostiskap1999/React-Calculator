import React from 'react';

import '../Assets/Styles/Components/Button.scss';


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