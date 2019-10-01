import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { TextField, InputLabel,FormControl,Select, MenuItem}   from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


// components.............
import FileUpload from '../../shared/FileUpload';


  const StepOneContent = () => {
    
    const [values, setValues] = useState({
      fnArea: '',
      name: 'fnArea',
    },{
      frequency: '',
      name: 'frequency',
    });
  
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    // useEffect(() => {
    //   setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);
  
    function handleChange(event) {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
    }
    return (
      
     
      <div className = "ethicsAndComplianceForm">
      <Form className="customPaddingForInput">
        <Row>
        <Col xs={12} lg={6}>
            <FormControl className="selectOptionCss textMandatory">
              <InputLabel htmlFor="funcArea">Type of Issue</InputLabel>
              <Select
              native
                value={values.fnArea}
                onChange={handleChange}
                inputProps={{
                  name: 'fnArea',
                  id: 'funcArea',
                }}
              >
              <option value=""></option>
                <option value='advSolutions'>Data Quality</option>
                <option value='complinace'>Process Breakdown</option>
                <option value='investOperations'>Other Issues</option>                
              </Select>
            </FormControl>   
          </Col>
          <Col xs={12} lg={6} >
            
          </Col> 
          
        </Row>
        <Row className="mt-20">
          <Col xs={12} lg={6}>
            <Form.Group controlId="description">
           
        
            <TextField
                id="describeIssue"
                label="Describe the issue"
                className="textMandatory"
                multiline
                rows="3"
                //defaultValue="Default Value"
                helperText="(e.g., you may add security identifier, portfolio, systems, date and time sensitivity in your description)"
                margin="normal"
                // multiline={true}
                // rows={4}
                // rowsMax={6}
              />
            
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
          <Form.Group controlId="description">
          <TextField
                id="describeIssue"
                label="Describe the impact"
                className="reconToolInput"
                multiline
                rows="3"
                //defaultValue="Default Value"
                helperText="If known, please describe the impact and how issue was identified."
                margin="normal"
                // multiline={true}
                // rows={4}
                // rowsMax={6}
              />
            
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-20">
          <Col xs={12} lg={6}>
            <Form.Group controlId="description">
         
            <TextField
                id="describeIssue"
                label="Attach & Upload file(s)"
                className="reconToolInput"
                
                // multiline={true}
                // rows={4}
                // rowsMax={6}
              />
            
            </Form.Group>
            <FileUpload />
          </Col>
          <Col xs={12} lg={6} >
         
          </Col>
        </Row>
        
      </Form>
      </div>

    )
}

export default class StepOne extends React.Component {

  constructor () {
    super()
    this.state = { 
      firstName: '', 
      lastName: ''
    }
    
    this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
  }

  handleFirstNameChanged (event) {
    this.setState({firstName: event.target.value})
  }

  handleLastNameChanged (event) {
    this.setState({lastName: event.target.value})
  }

  
  render () {
    return (
      <StepOneContent></StepOneContent>
    )
  }
}
