import React from 'react';
import {Row,Col} from 'react-bootstrap';
import NeedHelpIcon from '../../assets/icons/ue975-c-icon--product-communication.svg';

class MainFooter extends React.Component {

    render(){
        return <footer className="footer">  
        <Row>
            <Col sm={true}></Col>
            <Col sm={true}>
                <div className="text-center">
                <NeedHelpIcon height ="20" width = "20" stroke="#fff" strokeWidth="1.5"></NeedHelpIcon> <span style={{ fontSize: '0.9em' }}>Need help?</span>
                </div>
            </Col>
            <Col sm={true}></Col>
        </Row>
        <Row>
            <Col sm={true}></Col>
            <Col sm={true}>
                <Row className="footerCustom">
                    <Col sm = {true}>
                        Copyright <i className="fa fa-copyright" aria-hidden="true"></i> Allianz 2019
                    </Col>
                    <Col sm = {true}>
                        Powered by AIM IT
                    </Col>
                </Row>
            </Col>
            <Col sm={true}></Col>
        </Row>
    </footer>
    }

}
export default MainFooter;