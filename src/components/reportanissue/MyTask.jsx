import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import { Grid, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import ListIcon from '../../assets/icons/ue922-c-icon--list.svg';
import EditIcon from '../../assets/icons/uea38-c-icon--edit.svg';
import Tab3Icon from '../../assets/icons/ueb38-c-icon--product-voice-of-the-customer.svg';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Router, Link } from "@reach/router";
// import MultiStep from 'react-multistep';
import '../../assets/css/reportanissueCss/prog-tracker.css';
import '../../assets/css/reportanissueCss/skeleton.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Row, Col, Button } from 'react-bootstrap';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CheckIcon from '../../assets/icons/ue96c-c-icon--product-check-paper.svg';

// ..........................


export default function MyTask() {
 
  return (
    <div className="content-bg">
      <header className="Titleheader"><h5>Report an Issue</h5>
          <span className="text-muted">Version 2.0</span>
      </header>
      <div className="mt-20 pos-relative customBreadCrumb">  
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" to="/ethicsandcompliance" >
              Overview
            </Link>
            {/* <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
              Core
            </Link> */}
            <Typography color="textPrimary">My Tasks</Typography>
          </Breadcrumbs>

        <div className="Breadcrumb-menu-button">
          <Button className="breadcrumb-btn" variant="outline-primary">
              <CheckIcon height="20" width="20" fill="#007AB3" strokeWidth="0"></CheckIcon> MY QUEUES
          </Button>  
        </div>
      </div>
      <Row className="myTaskContainer">
          <Col lg={6}>
            <div className="cardpanel">
              <div className="cardpanelheader">
                <h5 className="totaltasktext">Total number of Tasks
                  <span className="viewalltaskbutton-pos">
                  <Button className="viewalltaskbutton" variant="outline-primary" >
                          VIEW ALL TASK
                  </Button>
                    </span>
                </h5>
              </div>
              <div className="cardpanelbody">
                <span className="totalcount">24</span>
                <div className="statustrackinginfo">
                  <h6>Status Tracking Info</h6>
                </div>
              </div>
            </div>     
          </Col>
          <Col lg={6}>
            <div className="cardpanel">
              <ul className="buttonlist-vertical">
                <li>
                  <Link to="/reportanissue/manageissues" ><Button className="taskbuttons" variant="outline-primary" >REVIEW & MANAGE ALL ISSUES</Button></Link>
                </li>
                <li>
                  <Link to="/reportanissue/manageexceptions"><Button className="taskbuttons" variant="outline-primary" >REVIEW & MANAGE ALL EXCEPTIONS</Button></Link>
                </li>
                <li>
                  <Link to="/reportanissue/createissue" ><Button className="taskbuttons" variant="outline-primary" >CREATE A NEW ISSUE</Button></Link>
                </li>
                <li>
                  <Link to="/reportanissue/submitnewexception"><Button className="taskbuttons" variant="outline-primary" >SUBMIT A NEW EXCEPTION</Button></Link>
                </li>
              </ul>
            </div>
          </Col>   
      </Row>   
    </div>
  );
}