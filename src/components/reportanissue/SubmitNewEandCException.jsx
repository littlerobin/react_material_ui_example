import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Button, Row, Col } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs, Menu, MenuItem } from '@material-ui/core';
import { Router, Link } from "@reach/router"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SuccessIcon from '../../assets/icons/ue911-c-icon--check.svg';
import '../shared/main.css';


// Components....

import EthicsAndComplianceForm from './EthicsAndComplianceForm';


const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Ethics & Compliance Exception Details', 'Submitted' ];
}

// function breadCrumClick(event) {
//   event.preventDefault();
//   alert('You clicked a breadcrumb.');
// }

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <EthicsAndComplianceForm ></EthicsAndComplianceForm>;
    case 1:
      return null;
    
    default:
      return 'Uknown stepIndex';
  }
}

export default function SubmitNewEandCException() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  
  
  function menuToggleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleNext(event) {
    event.preventDefault();
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
          <Typography color="textPrimary"><b></b>Submit a New Ethics and Compliance Exception</Typography>
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
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/reportanissue" >My Main Page</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to = "/reportanissue/mytask" >My Tasks</Link></MenuItem>
        <MenuItem onClick={handleClose}>My Queues</MenuItem>
        <MenuItem onClick={handleClose}><Link to = "/reportanissue/createissue" >Create a New Issue</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to = "/reportanissue/submitnewexception" >Submit a New Exception</Link></MenuItem>
      </Menu>

 
    </div>
      
    </div>
    <form name="ethicsAndComplianceForm" onSubmit = {handleNext.bind(this)}>
<Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
        {activeStep === steps.length ? (
          <div>
            <Row>
          <Col xs={4} lg={4} md={4}>
           
            
          </Col>
          <Col xs={4} lg={4} md={4}>
          <div align="center"><SuccessIcon height="100" width="100" fill="#3DA556" strokeWidth="0"></SuccessIcon></div>
          <div className="successDiv" align="center">The exception has been successfully submitted.</div>
          <div align="center">Exception ID Reference</div>
          <div className="successDiv" align="center">707</div>
          <div align="center"><Button variant="primary">GO TO MANAGE MY EXCEPTIONS</Button></div>
          
          </Col>
          <Col xs={4} lg={4} md={4}>
            
          </Col>
        </Row>
          </div>
        ) : (
          
          <div>{getStepContent(activeStep)}
            <div className="btnGroup">
              {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button> */}
              <Row>
                <Col lg={6}>
                  <i className="mandatoryText">Mandatory field</i>
                </Col>
                <Col lg={6}>
                  <ul className="Stepperbuttonlist text-right">
                    <li>
                      <Button variant="primary" type="submit">
                        {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
                        SUBMIT
                      </Button>
                    </li>
                    <li>
                      <Button variant="outline-primary" onClick={handleNext} disabled >
                        {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
                        SAVE
                      </Button>
                    </li>
                    <li>
                      <Button variant="outline-primary" onClick={handleNext} >
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
        </form>
        
    </div>
    
  );
}