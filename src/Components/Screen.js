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

    // eslint-disable-next-line
    const nonAcceptableRegex = /[^0-9\+\-\*\/\%\^\!\.]/gi;
    // eslint-disable-next-line
    const consecSymbolsRegex = /[\+\-\*\/\%\^\!\.]{2,}/gi;

    const consecSymbols = consecSymbolsRegex.exec(result);

    if(consecSymbols != null){
      result = result.replace(consecSymbols[0], consecSymbols[0].substring(consecSymbols[0].length - 1))
    }      
    else
      result = result.replace(nonAcceptableRegex, '');
    
    this.props.setScreenValue(result);
  }

  render(){
    return(
      <div className='calculatorScreen'>
        <input className='screenInput' type='text' value={this.props.screenValue}  onChange={this.handleChange}/>   
      </div>
    )
  }
};