import React, { Component } from 'react';
import logo from '../img/kasu-logo-60_x_60.png';
import {Link} from 'react-router-dom';

class Nav extends Component {
    
    render() { 
        return ( 
        <React.Fragment>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand " to="/"><img src={logo} alt="kasu logo"/> </Link><h2 className="">Welcome</h2>
            <button className="navbar-toggler" type="button" onClick={()=>alert('yes')} >
                <span className="navbar-toggler-icon"></span>
            </button>
            
            </nav>
        </React.Fragment> 
        );
    }
}
 
export default Nav;