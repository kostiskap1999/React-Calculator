import React from 'react';

import '../Assets/Styles/Components/Screen.scss';


export class CalcScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  };

  render(){
    return(
      <div className='calculatorScreen'>
        <input className='screenInput' type='text' />   
      </div>
    )
  }
};