import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchIcon from '../../assets/icons/ue9c7-c-icon--product-search.svg'
import './main.css';
import MainHeader from '../shared/header';
import MainFooter from '../shared/footer';
import DashBoard from '../plutus/dashboard';




class MainContainer extends React.Component {
    
    render(){
        
        return (
            
            <div className = "mainContent"> 
            <MainHeader />                 
                <div className="content-inner"><DashBoard /></div>
                <MainFooter />
            </div>
            
        )
        
    }

}
export default MainContainer;