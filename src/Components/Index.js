import React, { Component } from 'react';
import Item from './Item';
import {DataConsumer} from '../Context'

class Index extends Component {
    
    render() { 
        return ( 
        <React.Fragment>
            <div className="container mb-5">
                <p className="text-muted text-center my-2">Acc 113 project</p>
                <div className="row">

                
                <DataConsumer >
                    {value=>
                       {
                           return value.dataStore.map(data =>{
                               return  <Item  key={data.id} item={data} />
                           })
                       }
                        
                    }
                </DataConsumer>
            </div>

            </div>
        </React.Fragment> 
        );
    }
}
 
export default Index;