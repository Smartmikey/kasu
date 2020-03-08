import React, { Component } from 'react';
import {DataConsumer} from '../Context';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Modal extends Component {
    const
    
    render() { 
        return ( 
            <DataConsumer >
                {value=>{
                    const {openModal,modal, closeModal} = value;
                    console.log(openModal);
                    
                    if(!modal){
                        return null
                    }else{
                        return(
                        <ModalWrapper onClick={closeModal}>
                            <div className="container custModal"onClick={closeModal}>
                                <div className="row">
                                    <div className="col-12 text-right mr-5 mt-3 text-light large-icon"><FontAwesomeIcon icon={faTimes} onClick={closeModal} /></div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-right semi-icon"><Link className="text-light" to="/group">Project Group</Link></div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-right semi-icon"><Link className="text-light" to="/report">Report an Abuse</Link></div>
                                </div>
                            </div>
                        </ModalWrapper>
                    )}
                    
                    return
                }}
                
            </DataConsumer>
         );
    }
}
 
export default Modal;


const ModalWrapper = styled.div`

    .large-icon{
        font-size: 2rem;
        
    }
    .semi-icon{
        font-size: 1.4rem;
        
    }
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000d;
`