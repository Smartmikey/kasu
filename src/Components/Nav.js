import React, { Component } from 'react';
import logo from '../img/kasu-logo-60_x_60.png';
import {Link} from 'react-router-dom';
import {DataConsumer} from '../Context'
class Nav extends Component {
    
    render() { 
        return ( 
        <DataConsumer>
            {(value)=>{
                
                return(
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand " to="/"><img src={logo} alt="kasu logo"/> </Link><h2 className="">Welcome</h2>
            <button className="navbar-toggler" type="button" onClick={()=>value.openModal()} >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-nav ml-auto d-sm-none d-md-block d-none">
                <Link className="nav-item nav-link d-inline" to="/group">Project Group </Link>
                <Link className="nav-item nav-link d-inline-block" to="/report">Report an abuse </Link>
                
    </div>
            </nav>
                )
                
            }}
            
        </DataConsumer> 
        );
    }
}
 
export default Nav;
