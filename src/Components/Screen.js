import React from 'react';

import '../Assets/Styles/Components/Screen.scss';


export class CalcScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  };

  regexCount = (str, regex) => {
    return ((str || '').match(regex) || []).length
  }

  handleChange = event => {
    var result = event.target.value;
    this.props.setScreenValue(result);
  }

  render(){
    return(
        <div className='calculatorScreen'>
          <input className='screenInput' type='text' value={this.props.screenValue}  onChange={this.handleChange}/>   
          <div className='resultText'>
            {this.props.result}
          </div>
        </div>
    )
  }
}
