import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import Home from './assets/icons/ue967-c-icon--product-car-tacho-fast.svg';
import Ethics from './assets/icons/ue9ae-c-icon--product-pages-documents.svg';
import InvestStr from './assets/icons/ue9dd-c-icon--product-stock-data-graph.svg';
import InvestOps from './assets/icons/ue9c8-c-icon--product-share-chart.svg';
import ReconIcon from './assets/icons/ue9a0-c-icon--product-job-processes.svg';
import AdvSol from './assets/icons/ue9a2-c-icon--product-light-bulb-idea.svg';
import ArmsIcon from './assets/icons/ue9eb-c-icon--product-wall-balance.svg';
import ReportsIcon from './assets/icons/ue9ac-c-icon--product-notebook.svg';
import AdminIcon from './assets/icons/ue92d-c-icon--user-business-o.svg';
import ReportIssueIcon from './assets/icons/ue97b-c-icon--product-danger.svg';
import NeedHelpIcon from './assets/icons/ue93c-c-icon--mail-circle.svg';
import BellIcon from './assets/icons/uea13-c-icon--bell-o.svg';
import SettingsIcon from './assets/icons/ue932-c-icon--setting.svg';
import userImg from './assets/images/menuimg1.png';
import logoImg from './assets/images/plutus-logo.png';
import DashBoard from './components/plutus/dashboard';
import ClickOutside from './components/shared/clickOutside';
import { Router, Link } from "@reach/router"
import './components/shared/main.css';
//import ensureArray from 'ensure-array';
import styled from 'styled-components';

import ReconTool from './components/reconciliation/recontool';
import CreateNewIssue from './components/reportanissue/createnewissue';
import MyTask from './components/reportanissue/mytask';
import SubmitNewEandCException from './components/reportanissue/SubmitNewEandCException';
import MyMainPage from './components/reportanissue/MyMainPage';
import ManageExceptions from './components/reportanissue/ManageExceptions';
import IssueOverview from './components/reportanissue/Managemyissue';
import PlutusRouter from './Router.js';

const Main = styled.main`
    position: relative;
    overflow: hidden;
    
    padding: 0 20px;
    margin-right: ${props => (props.expanded ? 185 : 65)}px;
`;

class App extends React.Component {

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
        return (<div className="wrapper-inner">
            <div className="mainContent">

                
                    <div
                        style={{
                            marginRight: expanded ? 185 : 65
                        }}
                    >

                    </div>
                    <ClickOutside
                        onClickOutside={() => {
                            this.setState({ expanded: false });
                        }}
                    >
                        <SideNav

                            expanded={this.state.expanded}
                            onToggle={(expanded) => {
                                this.setState({ expanded });
                            }}
                        >
                            <Toggle />

                            <Nav
                                defaultSelected={selected}
                                expanded={expanded}

                            >
                                <NavItem eventKey="">
                                    <NavIcon>
                                        <img src={userImg} className="pt-pb-10" />
                                        <Row ClassName="notificationIcons">
                                            <Col sm={true}><BellIcon height="15" width="15" stroke="#066495" strokeWidth="1"></BellIcon></Col>
                                            <Col sm={true}><SettingsIcon height="15" width="15" stroke="#066495" strokeWidth="1"></SettingsIcon></Col>
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
                                        <Home height="25" width="25" stroke="#066495" strokeWidth="1"></Home><Link to="/"><div >Dashboard</div></Link>
                                    </NavIcon>
                                    <NavText style={{ padding: 7 }} title="dashBoard">
                                        Short decription about the plutus dashboard.
                            </NavText>
                                </NavItem>
                                <NavItem eventKey="e&c">
                                    <NavIcon>
                                        <Ethics height="25" width="25" stroke="#066495" strokeWidth="1"></Ethics><div >Ethics & Compliance</div>
                                    </NavIcon>
                                    <NavText style={{ padding: 7 }} title="e&c">
                                        Short description about the Ethics & Compliance
                            </NavText>
                                    <NavItem eventKey="e&c/policy" onSelect={this.onSelectCollapse}>



                                        <NavText title="POLICIES" onClick={() => { this.setState({ expanded: false }); }}>POLICIES </NavText>



                                    </NavItem>
                                    <NavItem eventKey="e&c/network">
                                        <NavText title="NETWORK" onClick={() => { this.setState({ expanded: false }); }}>
                                            NETWORK
                                </NavText>
                                    </NavItem>
                                </NavItem>
                                <NavItem eventKey="investOps">
                                    <NavIcon>
                                        <InvestOps height="25" width="25" stroke="#066495" strokeWidth="1"></InvestOps><div>Investment Operations</div>
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
                                        <InvestStr height="25" width="25" stroke="#066495" strokeWidth="1"></InvestStr><div>Investment Strategy</div>
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
                                        <ArmsIcon height="25" width="25" stroke="#066495" strokeWidth="1"></ArmsIcon><div>ARMS</div>
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
                                        <ReconIcon height="25" width="25" stroke="#066495" strokeWidth="1"></ReconIcon><div>Reconciliation</div>
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
                                        <AdvSol height="25" width="25" stroke="#066495" strokeWidth="1"></AdvSol><div>Advisory Solutions</div>
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
                                        <ReportsIcon height="25" width="25" stroke="#066495" strokeWidth="1"></ReportsIcon><div>Reports</div>
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
                                        <ReportIssueIcon height="25" width="25" stroke="#066495" strokeWidth="1"></ReportIssueIcon><Link to="reportanissue"><div>Report An Issue</div></Link>
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
                    </ClickOutside>
                    <Main expanded={expanded}>
                        <header class="header">
                            <Row>
                                <Col sm={true}>

                                    <div><b>Allianz</b> Investment Management</div>

                                </Col>
                            </Row>
                            <Row>
                                <Col sm={true} >

                                    <h2><img src={logoImg} /> <b>Plutus</b></h2>

                                </Col>
                                <Col sm={true}>

                                </Col>
                                <Col sm={true}>

                                    <input className="form-control form-control-sm w-95 inputCustom" type="text" aria-label="Search" />
                                    <i class="fa fa-search customSearch" aria-hidden="true"></i>
                                </Col>
                            </Row>
                        </header>
                        <div className="content-inner"><PlutusRouter /></div>

                    </Main>
                    <footer className="footer">
                        <Row>
                            <Col sm={true}></Col>
                            <Col sm={true}>
                                <div className="text-center">
                                <NeedHelpIcon height="30" width="30" stroke="#fff" fill="#fff" strokeWidth="1"></NeedHelpIcon> <span style={{ fontSize: '1.4em' }}>Need help?</span>
                                </div>
                            </Col>
                            <Col sm={true}></Col>
                        </Row>
                        <Row className="mt-20">
                            <Col sm={true}></Col>
                            <Col sm={true}>
                                <Row className="footerCustom">
                                    <Col sm={true}>
                                        Copyright <i class="fa fa-copyright" aria-hidden="true"></i> Allianz 2019
                    </Col>
                                    <Col sm={true}>
                                        Powered by AIM IT
                    </Col>
                                </Row>
                            </Col>
                            <Col sm={true}></Col>
                        </Row>
                    </footer>
                
            </div>

        </div>
        );
    }
}

export default App;
