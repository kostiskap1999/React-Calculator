import React from 'react';

import '../Assets/Styles/Button.css';


export class CalcScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: '222'
    }
  };

  render(){
    return(
      <div>
        <input type='text' />   
      </div>
    )
  }
};