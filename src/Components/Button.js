import React from 'react';

import '../Assets/Styles/Components/Button.scss';


export class CalcButton extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: this.props.value
    }
  };

  render(){
    return(
        <button className='calculatorButton' onClick={() => this.props.addScreenValue(this.state.value)} >
          {this.state.value}
        </button>
    )
  }
};