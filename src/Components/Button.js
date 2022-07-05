import React from 'react';

import '../Assets/Styles/Components/Button.scss';


export class CalcButton extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  };

  handleClick() {

  };


  render(){

    this.setState({value: this.props.value});

    return(
        <button className='calculatorButton' onClick={this.handleClick}>
          {this.state.value}
        </button>
    )
  }
};