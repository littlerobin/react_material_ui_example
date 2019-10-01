import React from 'react';
import {Row,Col} from 'react-bootstrap';
import SearchIcon from '../../assets/icons/ue9c7-c-icon--product-search.svg'
import logoImg from '../../assets/images/plutus-logo.png';
class MainHeader extends React.Component {

    render(){
        return(
            <header className="header">  
                <Row>
                    <Col sm={true}>
                        
                    <div><b>Allianz</b> Investment Management</div>
                               
                    </Col>  
                </Row>
                <Row>
                    <Col sm={true} >
                        
                    <h3><img src={logoImg} /> <b>Plutus</b></h3>
                                
                    </Col>
                    <Col sm={true}>
                        
                    </Col>
                    <Col sm={true}>
                    
                    <input className="form-control form-control-sm w-95 inputCustom" type="text" placeholder="Search" aria-label="Search" />
                    <i className="fa fa-search customSearch" aria-hidden="true"></i>         
                    </Col>
                </Row>
            </header>    )
    }

}
export default MainHeader;