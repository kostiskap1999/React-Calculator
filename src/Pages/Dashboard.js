import React from 'react';

import '../Assets/Styles/Dashboard.css'

import { Calculator } from '../Components/Calculator.js'

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="center">
                <Calculator />
            </div>
        );
    }
}