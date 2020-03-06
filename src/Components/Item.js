import React, { Component } from 'react';
import {DataConsumer} from '../Context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Item extends Component {
    
    render() { 
        const {title, img, id}=this.props.item;
         
        return ( 
        <ItemWrapper className="col-6 mx-auto col-md-4 col-lg-3  my-2">
            <DataConsumer >
            {value=> (
            <div className="card" onClick={()=>{ 
             value.handleDetails(id)}}>
                <Link to="/details">
                    <div className="img-container p-3 text-center">
                    <img src={img} alt={title} className="w-75"/>
                   
                </div>
                <div className="card-title text-center">{title}</div>
                </Link >
                
             </div>
                )
             } 
            </DataConsumer>
        </ItemWrapper> 
        );
    }
}
 
export default Item;


const ItemWrapper = styled.div`
.card {
    background: #f6f6f6 !important;
}
.card-title {
    font-family: raleway;
    font-weight: 700;
    color: #000;
}


`