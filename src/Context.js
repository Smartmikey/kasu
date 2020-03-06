import React, { Component } from 'react';
import {detailData, data} from './Data';
const DataContext = React.createContext();


class DataProvider extends Component {
    state = { 
        dataStore: [],
        detailData: detailData,
        openModal: false
     }
     componentDidMount(){
        this.setData();
    }
    
    
    setData =() => {
        let tempData = [];
        data.forEach(item =>{
            const singleItem = {...item};
            tempData = [...tempData, singleItem];
        })
        this.setState(()=>{
            return {dataStore:tempData}
        })
        
    }
    getData =(id)=>{
        const Right = this.state.dataStore.find(item => item.id === id);
        return Right;
    }

    handleDetails = id =>{
        const item = this.getData(id);
        this.setState(()=>{
            return {detailData:item};
        })
    }
    render() { 
        return ( 
            <DataContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails
            }}>
                {this.props.children}
            </DataContext.Provider>
         );
    }
}

const DataConsumer = DataContext.Consumer;
 
export  {DataProvider, DataConsumer};