'use strict'
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, OverlayTrigger, Dropdown, Button } from 'react-bootstrap';
import { TextField, InputLabel,FormControl,Select, MenuItem, ArrowDropDown }   from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import SuccessIcon from '../../../assets/icons/ue911-c-icon--check.svg';




const StepTwoContent = ()=> {
  
    
  
  
  return (
    <div>
        <Container>
        <Row>
          <Col xs={4} lg={4} md={4}>
           
            
          </Col>
          <Col xs={4} lg={4} md={4}>
          <div align="center"><SuccessIcon height="100" width="100" fill="#3DA556" strokeWidth="0"></SuccessIcon></div>
          <div className="successDiv" align="center">The issue has been succesfully Created.</div>
          <div align="center">Issue ID Reference</div>
          <div className="successDiv" align="center">Issue-010</div>
          <div align="center"><Button variant="primary">GO TO MANAGE MY ISSUES</Button></div>
          
          </Col>
          <Col xs={4} lg={4} md={4}>
            
          </Col>
        </Row>
        </Container>
        
         
        </div>
      
  )
}


export default class StepTwo extends React.Component {
  
  render () {
    return (
      <div className="stepper">
        <div className = "stepperInner">
          <StepTwoContent></StepTwoContent>
        </div>
      </div>
    )
  }
}
