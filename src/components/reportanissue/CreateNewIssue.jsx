import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Box, Breadcrumbs, Menu, MenuItem, Stepper, Step, StepLabel } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Row, Col, Button } from 'react-bootstrap';
import DotIcon from '../../assets/icons/ue91e-c-icon--ellipsis-v.svg';

import { Router, Link } from "@reach/router";
// custom Components....................

import StepOne from './stepcomponent/StepOne';
import StepTwo from './stepcomponent/StepTwo';

// ..........................




function breadCrumClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}


function getSteps() {
  return ['Issue Details', 'Submitted' ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <StepOne></StepOne>;
    case 1:
      return null;
    
    default:
      return 'Uknown stepIndex';
  }
}





export default function CreateNewIssue() {
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();


  function handleChange(event, newValue) {
    setValue(newValue);
  }
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  function menuToggleClick(event) {
    setAnchorEl(event.currentTarget);
  }
function handleClose() {
    setAnchorEl(null);
  }
  function menuToggleListClick() {
    setAnchorEl(null);
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 2);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 2);
  }

  function handleReset() {
    setActiveStep(0);
  }


  return (
    <div className="content-bg">
    <header className="Titleheader"><h5>Report an Issue</h5>
        <span className="text-muted">Version 2.0</span>
    </header>
    <div className="mt-20 pos-relative customBreadCrumb">
        
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" to="/reportanissue">
            Overview
          </Link>
          {/* <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Core
          </Link> */}
          <Typography color="textPrimary">Create a New Issue</Typography>
        </Breadcrumbs>

      <div className="Breadcrumb-menu">
        <Button aria-controls="simple-menu" variant="outline-primary" className="Breadcrumb-menu-box" aria-haspopup="true" onClick={menuToggleClick}>
         <DotIcon height="20" width="20" fill="#007AB3" strokeWidth="0"></DotIcon>
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
                onClose={menuToggleListClick}
              >
                 <MenuItem onClick={handleClose}><Link to="/reportanissue" >My Main Page</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to = "/reportanissue/mytask" >My Tasks</Link></MenuItem>
        <MenuItem onClick={handleClose}>My Queues</MenuItem>
        <MenuItem onClick={handleClose}><Link to = "/reportanissue/createissue" >Create a New Issue</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to = "/reportanissue/submitnewexception" >Submit a New Exception</Link></MenuItem>
        </Menu>

  
      </div>
      
    </div>

    

     
        <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
        {activeStep === steps.length ? (
          <div>
            <StepTwo></StepTwo>
          </div>
        ) : (
          
          <div>{getStepContent(activeStep)}
            <div className="btnGroup">
              <Row>
                <Col lg={6}>
                  <i className="mandatoryText">Mandatory field</i>
                </Col>
                <Col lg={6}>
                 
                  <ul className="Stepperbuttonlist text-right">
                  <li><Button variant="primary" onClick={handleNext} >
                        SUBMIT
                      </Button></li>
                  <li>
                  <Button variant="outline-primary" onClick={handleNext}>
                        {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
                        CANCEL
                      </Button>
                  </li>
                  </ul>                  
                </Col>
              </Row>
            </div>
          </div>
        )}
    </div>
  );
}