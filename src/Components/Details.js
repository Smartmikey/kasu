import React, { Component } from 'react';
import {DataConsumer} from '../Context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Details extends Component {
    
    render() { 
        return ( 
            
            <DataConsumer>
                {value=>{
                    const {title, img, aboutBody,provBody,limBody, ref} = value.detailData;
                    const {key, values} = ref;

                    return(
                    <DetailWrapper>
                        <div className="container mb-5">
                            <div className="row my-2">
                                <div className="col-4">
                                    <img src={img} alt={ "Kasu assignment " + title} className="detail-image"/>
                                     
                                </div>
                                <div className="col-8 my-auto"><h3 className="text-right mr-2">{title}</h3></div>
                            </div>

                            <hr />
                            <div className="row">
                                <div className="col-6 text-uppercase"><h6>About This Right</h6></div>
                                <div className="col-6"><Link to="/report" className="report-link text-danger "><button className="btn btn-danger text-right">Report Abuse</button></Link></div>
                            </div>
                            <p>{aboutBody}</p>
                            <h3>Provision of this right</h3>
                            <p>{provBody}</p>
                            <h3>Limitation of this right</h3>
                            <p>{limBody}</p>
                            
                            
                            <h3>Reference</h3>
                            <ul>
                                <li><a target="_blank" rel="noopener noreferrer" href={values}>{key}</a> </li>
                            </ul>
                           
                        </div>
                        
                    </DetailWrapper> 
                    )
            }}
            </DataConsumer>
        
        );
    }
}
 
export default Details;


const DetailWrapper = styled.div`
.detail-image {
    width: 4rem;

}
.report-link{
    float: right; 
}
`