import React from 'react';

import '../Assets/Styles/Pages/Dashboard.scss'

import { Calculator } from '../Components/Calculator.js'

export class Dashboard extends React.Component {
    render(){
        return(
            <div className="center">
                <Calculator />
            </div>
        );
    }
}