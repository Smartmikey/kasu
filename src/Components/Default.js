import React, { Component } from 'react';
import undraw from '../icons/undraw_page_not_found_su7k.svg';
import {Link} from 'react-router-dom';

class Default extends Component {
    
    render() { 
        return ( 
        <React.Fragment>
            <div className="container">
                <img src={undraw} className="img-fluid " alt="404 page"/>
                <h2>Page not found , would you like to <Link to="/">Go Home?</Link></h2>
            </div>
        </React.Fragment> 
        );
    }
}
 
export default Default;