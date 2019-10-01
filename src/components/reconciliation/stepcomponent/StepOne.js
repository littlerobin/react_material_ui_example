import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { OverlayTrigger, ButtonToolbar } from 'react-bootstrap';
import { TextField, InputLabel,FormControl,Select, MenuItem}   from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';


function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `transparent transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  };
}


const useStylesArrow = makeStyles(theme => ({
  tooltip: {
    position: 'relative',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid #007AB3'
  },
  arrow: {
    position: 'absolute',
    fontSize: 6,
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  popper: arrowGenerator('#007AB3'),
}));

function ArrowTooltip(props) {
  const { arrow, ...classes } = useStylesArrow();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <Tooltip
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
      }}
      {...props}
      title={
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
}

ArrowTooltip.propTypes = {
  title: PropTypes.node,
};



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
      
      <div className="stepper">
      <div className = "stepperInner">
      <Form>
        <Row>
          <Col xs={12} lg={6} className="customPaddingForInput">
            <Form.Group controlId="jobName">
            
            <ArrowTooltip title="Create a unique job name.">
            <TextField
                id="JobName"
                label="Job Name"
                className="reconToolInput"
                
              />
             </ArrowTooltip>
            </Form.Group>
          </Col>
          <Col xs={12} lg={6} className="customPaddingForInput">
            <FormControl className="selectOptionCss">
              <InputLabel htmlFor="funcArea">Functional Area</InputLabel>
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
                <option value='advSolutions'>Advisory Solutions</option>
                <option value='complinace'>Compliance</option>
                <option value='investOperations'>Investment Operations</option>
                <option value='investStrategy'>Investment Strategy</option>
                <option value='other'>Other</option>
              </Select>
            </FormControl>   
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="customPaddingForInput">
            <Form.Group controlId="description">
            <ArrowTooltip title="Briefly describe the job description.">
            <TextField
                id="description"
                label="Description"
                className="reconToolInput"
                
                // multiline={true}
                // rows={4}
                // rowsMax={6}
              /></ArrowTooltip>
            
            </Form.Group>
          </Col>
          <Col xs={12} lg={6} className="customPaddingForInput">
            {/* <Form.Group controlId="frequency"> */}
            
              <FormControl className ="selectOptionCss">
              
              
              <InputLabel htmlFor="freqJobInfo">Frequency</InputLabel>
              <ArrowTooltip title="How often the job will run.">
                <Select 
                native
                  value={values.frequency}
                  onChange={handleChange}
                  inputProps={{
                    name: 'frequency',
                    id: 'freqJobInfo',
                  }}
                  >
                  <option value=""></option>
                  <option value='daily'>Daily</option>
                  <option value='monthly'>Monthly</option>
                  <option value='ondemand'>On Demand</option>
                  
                </Select></ArrowTooltip>
              </FormControl>
            {/* </Form.Group> */}
          </Col>
        </Row>
        
      </Form>
      </div>
      </div>
    )
}

export class StepOne extends React.Component {

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
