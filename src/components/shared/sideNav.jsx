import React from 'react';
import img1 from '../../assets/images/menuimg2.png';
import Home from '../../assets/icons/ue99c-c-icon--product-house.svg';
import Ethics from '../../assets/icons/ue9e0-c-icon--product-student-school-graduation.svg';
import InvestStr from '../../assets/icons/ue9dd-c-icon--product-stock-data-graph.svg';
import InvestOps from '../../assets/icons/ue9eb-c-icon--product-wall-balance.svg';
import ReconIcon from '../../assets/icons/ue9a0-c-icon--product-job-processes.svg';
import AdvSol from '../../assets/icons/ue9a2-c-icon--product-light-bulb-idea.svg';
import ArmsIcon from '../../assets/icons/ue9ad-c-icon--product-office-chair.svg';
import ReportsIcon from '../../assets/icons/ue9e6-c-icon--product-to-do-list.svg';
import AdminIcon from '../../assets/icons/ue92d-c-icon--user-business-o.svg';
import ReportIssueIcon from '../../assets/icons/ue993-c-icon--product-help.svg';

import BellIcon from '../../assets/icons/ue95f-c-icon--product-bullhorn.svg';
import SettingsIcon from '../../assets/icons/ue972-c-icon--product-cog-wheel.svg';
import userImg from '../../assets/images/menuimg1.png';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Row,Col} from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ClickOutside from './clickOutside.jsx'


class SideMenu extends React.Component {
      
    constructor(props) {
        super(props);
        this.title = "Plutus Dashboard";
      } 
    
      state = {
        selected: 'dashBoard',
        expanded: false
    };
    
    lastUpdateTime = new Date().toISOString();
    
    onSelect = (selected) => {
        this.setState({ selected: selected });
        
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
        
    };
    onSelectCollapse = () => {
        console.log('The link was clicked.');
    }

     

    
    render() {
        const { expanded, selected } = this.state;
        return (
            <ClickOutside onClickOutside={() => { this.setState({ expanded: false }); }}>
            <BrowserRouter>
            <SideNav expanded={this.state.expanded} onToggle={(expanded) => { this.setState({ expanded }); }} >
                    <Toggle />
                    
                    <Nav
                        defaultSelected={selected} 
                        expanded={expanded}
                        
                    >
                    <NavItem eventKey="">
                            <NavIcon>
                            <img src={userImg} />
                            <Row className="notificationIcons">
                                <Col sm={true}><BellIcon height ="15" width = "15" stroke="#066495" strokeWidth="1"></BellIcon></Col>
                                <Col sm={true}><SettingsIcon height ="15" width = "15" stroke="#066495" strokeWidth="1"></SettingsIcon></Col>
                            </Row>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="User Details">
                                <div className="userDesc">Melvin Clark<br />
                                VP. IT AIM<br />
                                North America</div>
                            </NavText>
                        </NavItem>
                    <NavItem eventKey="dashBoard" onClick={() => { this.setState({ expanded: false }); }}>
                            <NavIcon>
                            <Home height ="25" width = "25" stroke="#066495" strokeWidth="1"></Home><div >Dashboard</div>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="dashBoard">
                                Short decription about the plutus dashboard.
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="e&c">
                            <NavIcon>
                            <Ethics height ="25" width = "25" stroke="#066495" strokeWidth="1"></Ethics><div >Ethics & Compliance</div>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="e&c">
                                Short description about the Ethics & Compliance
                            </NavText>
                            <NavItem eventKey="e&c/policy" onSelect={this.onSelectCollapse}>
                            
                            
                            
                            <NavText title="POLICIES" onClick={() => { this.setState({ expanded: false }); }}>POLICIES</NavText> 
                                
                           
                                
                            </NavItem>
                            <NavItem eventKey="e&c/network">
                                <NavText title="NETWORK" onClick={() => { this.setState({ expanded: false }); }}>
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="investOps">
                            <NavIcon>
                            <InvestOps height="25" width ="25" stroke="#066495" strokeWidth="1"></InvestOps><div>Investment Operations</div>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="investOps">
                                Short description about Investment Operations.
                            </NavText>
                            <NavItem eventKey="investOps/policy">
                                <NavText title="POLICIES">
                                    POLICIES
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="investOps/network">
                                <NavText title="NETWORK">
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="investStgy">
                            <NavIcon>
                            <InvestStr height = "25" width="25" stroke="#066495" strokeWidth="1"></InvestStr><div>Investment Strategy</div>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="investStgy">
                                Short description about Investment Strategy.
                            </NavText>
                            <NavItem eventKey="investStgy/policy">
                                <NavText title="POLICIES">
                                    POLICIES
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="investStgy/network">
                                <NavText title="NETWORK">
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="arms">
                            <NavIcon>
                            <ArmsIcon height = "25" width = "25" stroke="#066495" strokeWidth="1"></ArmsIcon><div>ARMS</div>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="arms">
                                Short description about ARMS.
                            </NavText>
                            <NavItem eventKey="arms/policy">
                                <NavText title="POLICIES">
                                    POLICIES
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="arms/network">
                                <NavText title="NETWORK">
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem>
                       
                        <NavItem eventKey="recon">
                            <NavIcon>
                            <ReconIcon height = "25" width="25" stroke="#066495" strokeWidth="1"></ReconIcon><div>Reconciliation</div>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="recon">
                                Short description about Reconciliation.
                            </NavText>
                            <NavItem eventKey="recon/policy">
                                <NavText title="POLICIES">
                                    POLICIES
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="recon/network">
                                <NavText title="NETWORK">
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="advSol">
                            <NavIcon>
                            <AdvSol height = "25" width="25" stroke="#066495" strokeWidth="1"></AdvSol><div>Advisory Solutions</div>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="advSol">
                                Short description about Advicory Solutions.
                            </NavText>
                            <NavItem eventKey="advSol/policy">
                                <NavText title="POLICIES">
                                    POLICIES
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="advSol/network">
                                <NavText title="NETWORK">
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="reports">
                            <NavIcon>
                            <ReportsIcon height = "25" width="25" stroke="#066495" strokeWidth="1"></ReportsIcon><div>Reports</div>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="reports">
                                Short description about Reports.
                            </NavText>
                            <NavItem eventKey="reports/policy">
                                <NavText title="POLICIES">
                                    POLICIES
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="reports/network">
                                <NavText title="NETWORK">
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="reportAnIssue">
                            <NavIcon>
                            <ReportIssueIcon height = "25" width="25" stroke="#066495" strokeWidth="1"></ReportIssueIcon><div>Report An Issue</div>
                            </NavIcon>
                            <NavText style={{ padding: 7 }} title="reportAnIssue">
                                Short description about ARMS.
                            </NavText>
                            <NavItem eventKey="reportAnIssue/policy">
                                <NavText title="POLICIES">
                                    POLICIES
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="reportAnIssue/network">
                                <NavText title="NETWORK">
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem>
                    </Nav>
                </SideNav>
                </BrowserRouter>
                </ClickOutside>
        );
    }
}

export default SideMenu;