import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Button, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { TextField, InputLabel, Select } from '@material-ui/core';
import { Breadcrumbs, Menu, MenuItem } from '@material-ui/core';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Router, Link } from "@reach/router";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//  style sheets..................
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../shared/main.css';

// icons..............
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import UpArrow from '../../assets/icons/ue900-c-icon--arrow-up.svg';
import SuccessIcon from '../../assets/icons/ue911-c-icon--check.svg';
import ExportIcon from '../../assets/icons/uea40-c-icon--export-and-share.svg'
// Components....
import MyDatePicker from '../shared/MyDatePicker';
import EnhancedTable from './Table';

function breadCrumClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

function BreadCrumb(){
    const [anchorEl, setAnchorEl] = React.useState(null);
 
    function menuToggleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuItemClick() {
        setAnchorEl(null);
    }
    function handleClose() {
    setAnchorEl(null);
  }

    return (
        <div className="mt-20 pos-relative customBreadCrumb">    
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" to="/reportanissue">
            <UpArrow height = "16" width="16" stroke="#006192" />
                <span>Overview</span>
            </Link>
            {/* <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Core
            </Link> */}
            <Typography color="textPrimary"><b></b>Manage My Issues</Typography>
            </Breadcrumbs>
            <div className="Breadcrumb-menu">
                <Button aria-controls="simple-menu" className="Breadcrumb-menu-box" aria-haspopup="true" onClick={menuToggleClick}>
                    ...
                </Button>
                <Menu anchorOrigin={{
                    vertical: 'bottom',
                     horizontal: 'right',
                    }}
                    transformOrigin={{
                         vertical: 'top',
                        horizontal: 'right',
                    }}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuItemClick}
                >
                    <MenuItem onClick={handleClose}><Link to="/reportanissue" >My Main Page</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to = "/reportanissue/mytask" >My Tasks</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/reportanissue/queueoverview">My Queues</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to = "/reportanissue/createissue" >Create a New Issue</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to = "/reportanissue/submitnewexception" >Submit a New Exception</Link></MenuItem>
                </Menu>
            </div>
        </div>
    )
}

class ManageMyIssues  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            IssueID: "",
            IssueType: "",
            ExceptionStatus: ""
        }
       this.options = {
            defaultSortName: 'IssueID',  // default sort column name
            defaultSortOrder: 'desc',  // default sort order
            onRowClick: this.onRowClick
            };
        this.excData = [{
            
            IssueID: "Issue-010",
            IssueType: "Data Quality",
            ExceptionStatus: "Submitted",
            IssueDate : "08/06/2019",
            LastUpdatedDate: "25/07/2019",
           
        },
        {
            
            IssueID: "Issue-013",
            IssueType: "Other issue",
            ExceptionStatus: "Permanent",
            IssueDate : "07/22/2019",
            LastUpdatedDate: "25/07/2019"
           
        },
        {
            
            IssueID:"Issue-210",
            IssueType: "Policy Breakdown",
            ExceptionStatus: "Analysis",
            IssueDate : "07/19/2019",
            LastUpdatedDate: "01/08/2019"
            
        },
        {
           
            IssueID: "Issue-015",
            IssueType: "Data Quality",
            ExceptionStatus: "Submitted",
            IssueDate : "08/02/2019",
            LastUpdatedDate: "08/08/2019"
            
        },
        {
            
            IssueID: "Issue-101",
            IssueType: "Other issue",
            ExceptionStatus: "Analysis",
            IssueDate : "08/01/2019",
            LastUpdatedDate: "08/08/2019"
            
        },
        {
            
            IssueID: "Issue-016",
            IssueType: "Process breakdown",
            ExceptionStatus: "Closed",
            IssueDate : "08/05/2019",
            LastUpdatedDate: "30/07/2019",
            
        }]
        
        this.handleSelectChange = this.handleSelectChange.bind(this);
        
    }
    handleSelectChange (event) {
        this.setState({
            ExceptionStatus: event.currentTarget.value,
            IssueType:  event.currentTarget.value
        })
    }
    rowClassNameFormat (row, rowIdx){
        return rowIdx % 2 === 0 ? 'evenRow' : 'oddRow';
    }
    onRowClick(row, e) {
        if( e != 0){
            return false;
        }
        else{
            console.log(e);
        }
    }
    render(){
        const selectRow = {
            mode: 'checkbox',  // multi select
            onSelect: this.handleRowSelect
        };
        return ( 
            <div className="content-bg">
                <header className="Titleheader"><h5>Report an Issue</h5>
                    <span className="text-muted">Version 2.0</span>
                </header>
                <BreadCrumb />
                <div className = "ethicsAndComplianceForm">
                    <form className="customPaddingForInput">
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group controlId="Issueid">
                                        <TextField
                                            id="Issueid"
                                            label="IssueID"
                                            name="Issueid"
                                            value={ this.state.IssueID }               
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="Issuetype">
                                        <TextField
                                            id="Issuetype"
                                            label="Keywords"
                                            name="Issuetype"
                                            value={ this.state.IssueType }               
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                      <InputLabel htmlFor="excStatus" className="customSelectLabel">IssueType</InputLabel>
                                        <Select
                                            native
                                            value={this.state.IssueType}
                                            onChange={this.handleSelectChange}
                                            id="excStatus"
                                        >
                                            <option value=""></option>
                                            <option value='Policy401'>Policy401 - CUSTODY OF CLIENT SECURITIES</option> 
                                            <option value='other'>Data Quality</option>
                                        </Select>
                                </Col>
                            </Row>
                            <Row className="mt-10">
                                <Col>
                                    <MyDatePicker name="IssueDate" label="Date Created From"/>
                                </Col>
                                    
                                <Col>
                                    <MyDatePicker name="LastUpdatedDate" label="Date Created "/>
                                </Col>
                                <Col>
                                        <InputLabel htmlFor="excStatus" className="customSelectLabel">Status</InputLabel>
                                        <Select
                                            native
                                            value={this.state.ExceptionStatus}
                                            onChange={this.handleSelectChange}
                                            id="excStatus"
                                        >
                                            <option value=""></option>
                                            <option value='Policy401'>Policy401 - CUSTODY OF CLIENT SECURITIES</option> 
                                            <option value='other'>Other</option>
                                        </Select>
         
                                </Col>
                            </Row>
                        </Container>
                        <div className="btnGroup">
                            <Row>
                                <Col lg={6}>
                                </Col>
                                <Col lg={6}>
                                    <ul className="Stepperbuttonlist text-right">
                                        <li>
                                        <Button variant="primary" type="submit">
                                            APPLY FILTERS
                                        </Button>
                                        </li>
                                        <li>
                                        <Button variant="outline-primary" >
                                            CLEAR
                                        </Button>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </form>

                    <div className="mt-20">
                        <Row className="borderBottom">
                            <Col xs={12} lg={6} className="text-left">
                            <div>Issue details</div>
                            </Col>
                            <Col xs={12} lg={6} className="text-right">
                            <Button
                                variant="outline-primary"
                                ><ExportIcon height="20" width="20" stroke="#007ab3" /><span>&nbsp;&nbsp;EXPORT</span>
                                </Button>
                            </Col>
                        </Row>
                        <Row className="tablePadding">
                            <BootstrapTable data={this.excData} options={ this.options } version='4' className = "customTableHeader" trClassName={this.rowClassNameFormat}>
                                <TableHeaderColumn isKey dataField='IssueID' dataSort>IssueID</TableHeaderColumn>
                                <TableHeaderColumn dataField='IssueDate' dataSort>Issue Date</TableHeaderColumn>
                                <TableHeaderColumn dataField='IssueType' dataSort>Issue Type</TableHeaderColumn>
                                <TableHeaderColumn dataField='LastUpdatedDate' dataSort>Last Updated Date</TableHeaderColumn>
                                <TableHeaderColumn dataField='ExceptionStatus' dataSort>Status</TableHeaderColumn>
                            </BootstrapTable>
                        </Row>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ManageMyIssues ;