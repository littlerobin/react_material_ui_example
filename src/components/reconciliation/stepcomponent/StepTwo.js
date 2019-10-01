'use strict'

import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, OverlayTrigger, Dropdown, Button } from 'react-bootstrap';
import { TextField, InputLabel,FormControl,Select, MenuItem, ArrowDropDown }   from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import EqualIcon from '../../../assets/images/equal.png';
import GreaterOrEqualIcon from '../../../assets/images/greaterOrEqual.png';
import GreaterThan from '../../../assets/images/greaterthan.png';
import LessThan from '../../../assets/images/lessthan.png';
import LessOrEqual from '../../../assets/images/lessOrEqual.png';
import LessOrGreater from '../../../assets/images/lessOrGreater.png';
import OperatorIcon from '../../../assets/images/ue91e-c-icon--ellipsis-v.png';

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
        borderColor: `transparent transparent ${color} transparent`,
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
        borderColor: `${color} transparent transparent transparent`,
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
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #007AB3'
  },
  arrow: {
    position: 'absolute',
    // backgroundColor: '#007AB3',
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

const ColumnA2andB2 = ()=> {
  
  const [values, setValues] = useState({
    columnA1: '',
    name: 'columnA1',
  },{
    columnB1: '',
    name: 'columnB1',
  });
  const ColumnADesc = {
    desc: 'Amount of security, commodity owned by institution',
    dataType: 'Integer',
    freq: 'Daily'
  }
  const ColumnBDesc = {
    desc: 'Amount of security, commodity owned by institution',
    dataType: 'Integer',
    freq: 'Daily'
  }
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  // useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);
  var state = {
    showColumnA1: false,
    showColumnA2: false,
    column1Val: '',
    column2Val: '',
    columnDec: {},
    OperartorChange: OperatorIcon
  }
  let columnState = [];
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    if(event.target.name == 'columnA1'){
      state.showColumnA1 = true;
      state.column1Val = event.target.value;
      state.columnDesc = ColumnADesc;
    }
    else{
      state.showColumnA2 = true
      state.column2Val = event.target.value;
      state.columnDesc = ColumnBDesc;
    }
    columnState = state;
  }
  function selectOperator(event) {
    // state.OperartorChange = GreaterThan
    console.log(event);
    var op, subString ;
    if(event.currentTarget.name == "GreaterOrEqualIcon"){
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + GreaterOrEqualIcon; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + GreaterOrEqualIcon;
    }
    else if(event.currentTarget.name == "GreaterThan"){
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + GreaterThan; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + GreaterThan;

    }
    else if(event.currentTarget.name == "LessThan"){
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + LessThan; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + LessThan;

    }
    else if(event.currentTarget.name == "LessOrEqual"){
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + LessOrEqual; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + LessOrEqual;

    }
    else if(event.currentTarget.name == "LessOrGreater") {
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + LessOrGreater; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + LessOrGreater;

    }
    else if(event.currentTarget.name == "EqualIcon") {
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + EqualIcon; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + EqualIcon;
    }

  }

  return(
    <Row style={{marginTop: '5px'}}>
            <Col xs={5}>
              
              <Form.Group controlId="columnA">
                <FormControl className="selectOptionCss">
                <InputLabel htmlFor="columnA">Please select a column..</InputLabel>
                <Select
                native
                  value={values.columnA1}
                  onChange={handleChange}
                  inputProps={{
                    name: 'columnA1',
                    id: 'columnA',
                  }}
                >
                <option value=""></option>
                  <option value='pamPosition'>PAM position</option>
                  <option value='complinace'>Compliance</option>
                  <option value='investOperations'>Investment Operations</option>
                  <option value='investStrategy'>Investment Strategy</option>
                  <option value='other'>Other</option>
                </Select>
              </FormControl>
              <Form.Text className="text-muted ">
                  <Column1Desc args = { state }></Column1Desc>
              </Form.Text>
            </Form.Group>

            </Col>
            <Col xs={1} className ="text-center">
              <Dropdown>
              <Form.Label style={{color: '#006192' , fontSize: '12px'}}>OPERATOR</Form.Label>
              <br />
                <Dropdown.Toggle id="dropdown-basic" className="customDropdownBtn">
                      <img src = { state.OperartorChange } />
                </Dropdown.Toggle>
                
                <Dropdown.Menu className="customDropdownMenu">
          <Dropdown.Item name="EqualIcon" onClick={ selectOperator.bind(this) }><img src = { EqualIcon } /></Dropdown.Item>
          <Dropdown.Item name="GreaterOrEqualIcon" onClick={ selectOperator.bind(this) } ><img src = { GreaterOrEqualIcon } /> </Dropdown.Item>
                  <Dropdown.Item name="GreaterThan" onClick={ selectOperator.bind(this) } ><img src = { GreaterThan } /></Dropdown.Item>
                  <Dropdown.Item name="LessThan" onClick={ selectOperator.bind(this) } ><img src = { LessThan } /></Dropdown.Item>
                  <Dropdown.Item name="LessOrEqual" onClick={ selectOperator.bind(this) } ><img src = { LessOrEqual } /></Dropdown.Item>
                  <Dropdown.Item name="LessOrGreater" onClick={ selectOperator.bind(this) } ><img src = { LessOrGreater } /></Dropdown.Item>

          </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col xs={5}>
              
              <FormControl className="selectOptionCss">
                <InputLabel htmlFor="columnA">Please select column..</InputLabel>
                <Select
                native
                  value={values.columnB1}
                  onChange={handleChange}
                  inputProps={{
                    name: 'columnB1',
                    id: 'columnB',
                  }}
                ><option value=""></option>
                  <option value='BBPosition'>BB position</option>
                  <option value='complinace'>Compliance</option>
                  <option value='investOperations'>Investment Operations</option>
                  <option value='investStrategy'>Investment Strategy</option>
                  <option value='other'>Other</option>
                </Select>
              </FormControl>
              <Form.Text className="text-muted ">
              <Column2Desc args = { state }></Column2Desc>
              </Form.Text>
            </Col>
            <Col xs={1} className="customByValue">
              <Form.Group controlId="byValue" style={{paddingRight: '10px'}}>
              
                  {/* <Form.Label style={{color: '#007AB4'}}>BY VALUE <i className="fa fa-info-circle" style={{color: '#007AB4'}} aria-label="true"></i></Form.Label> */}
                  <ArrowTooltip title="Please select value for the rule (if applicable).">
                  <InputLabel className="position-value" htmlFor = "byValue">BY VALUE
              <i className="fa fa-info-circle position-info" style={{color: '#767676'}} aria-label="true"></i>
              </InputLabel></ArrowTooltip>
                <TextField
                id="byValue"
                // label="BY VALUE"
                className="reconToolInput"
              />
                </Form.Group>
            </Col>
          </Row>
  )
}


const ColumnA1andB1 =()=> {
  const state = {
    showColumnA1: false,
    showColumnA2: false,
    column1Val: '',
    column2Val: '',
    columnDesc :{},
    OperartorChange: OperatorIcon
  }
  let columnState = {}
  const ColumnADesc = {
    desc: 'Identification number of the security',
    dataType: 'Char',
    freq: 'N/A'
  }
  const ColumnBDesc = {
    desc: 'Identification number of the security',
    dataType: 'Varchar',
    freq: 'N/A'
  }

  const [values, setValues] = useState({
    columnA1: '',
    name: 'columnA1',
  },{
    columnB1: '',
    name: 'columnB1',
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
    if(event.target.name == 'columnA1'){
      state.showColumnA1 = true;
      state.column1Val = event.target.value;
      state.columnDesc = ColumnADesc;
    }
    else{
      state.showColumnA2 = true
      state.column2Val = event.target.value;
      state.columnDesc = ColumnBDesc;
    }
    columnState = state;
  }
  function selectOperator(event) {
    // state.OperartorChange = GreaterThan
    console.log(event);
    var op, subString ;
    if(event.currentTarget.name == "GreaterOrEqualIcon"){
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + GreaterOrEqualIcon; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + GreaterOrEqualIcon;
    }
    else if(event.currentTarget.name == "GreaterThan"){
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + GreaterThan; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + GreaterThan;

    }
    else if(event.currentTarget.name == "LessThan"){
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + LessThan; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + LessThan;

    }
    else if(event.currentTarget.name == "LessOrEqual"){
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + LessOrEqual; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + LessOrEqual;

    }
    else if(event.currentTarget.name == "LessOrGreater") {
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange = subString + LessOrGreater; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + LessOrGreater;

    }
    else if(event.currentTarget.name == "EqualIcon") {
      if(event.target.tagName != "IMG") {
        subString = event.target.children[0].baseURI;
      
      }
      else {
        subString = event.currentTarget.baseURI;
        
      }
      state.OperartorChange =  EqualIcon; 
      event.target.parentElement.parentElement.children[2].children[0].src = subString + EqualIcon;
    }

  }
  return (
      
          
    <Row>
      <Col xs={5}>
        <Form.Group >
          
              <FormControl className="selectOptionCss">
                <InputLabel htmlFor="columnA">Please select column..</InputLabel>
                <Select
                native
                  value={values.columnA1}
                  onChange={handleChange}
                  inputProps={{
                    name: 'columnA1',
                    id: 'columnA',
                  }}
                >
                  <option value=""></option>
                  <option value='secID'>Sec ID</option>
                  <option value='complinace'>option2</option>
                  <option value='investOperations'>option3</option>
                  
                </Select>
              </FormControl>
              <Form.Text className="text-muted ">
              <Column1Desc args = { columnState }></Column1Desc>
              </Form.Text>
        </Form.Group>
      </Col>
      <Col xs={1} className ="text-center">
        <Dropdown>
        <Form.Label style={{color: '#006192' , fontSize: '12px'}}>OPERATOR</Form.Label>
        <br />
          <Dropdown.Toggle id="dropdown-basic" className="customDropdownBtn">
          <img src = { state.OperartorChange } />
          </Dropdown.Toggle>
          
          <Dropdown.Menu className="customDropdownMenu">
          <Dropdown.Item name="EqualIcon" onClick={ selectOperator.bind(this) }><img src = { EqualIcon } /></Dropdown.Item>
          <Dropdown.Item name="GreaterOrEqualIcon" onClick={ selectOperator.bind(this) } ><img src = { GreaterOrEqualIcon } /> </Dropdown.Item>
                  <Dropdown.Item name="GreaterThan" onClick={ selectOperator.bind(this) } ><img src = { GreaterThan } /></Dropdown.Item>
                  <Dropdown.Item name="LessThan" onClick={ selectOperator.bind(this) } ><img src = { LessThan } /></Dropdown.Item>
                  <Dropdown.Item name="LessOrEqual" onClick={ selectOperator.bind(this) } ><img src = { LessOrEqual } /></Dropdown.Item>
                  <Dropdown.Item name="LessOrGreater" onClick={ selectOperator.bind(this) } ><img src = { LessOrGreater } /></Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
      </Col>

      <Col xs={5}>
        <Form.Group >
          
          <FormControl className="selectOptionCss">
                <InputLabel htmlFor="columnA">Please select column..</InputLabel>
                <Select
                native
                  value={values.columnB1}
                  onChange={handleChange}
                  inputProps={{
                    name: 'columnB1',
                    id: 'columnB',
                  }}
                >
                <option value=""></option>
                  <option value='securityID'>Security Id</option>
                  <option value='complinace'>Option2</option>
                  <option value='investOperations'>Option3</option>
                  
                </Select>
              </FormControl>
          <Form.Text className="text-muted ">
          <Column2Desc args = { state }></Column2Desc>
          </Form.Text>
        </Form.Group>
      </Col>
      <Col xs={1} className="customByValue">
        <Form.Group controlId="byValue" style={{paddingRight: '10px'}}>
        <ArrowTooltip title="Please select value for the rule (if applicable).">
            {/* <Form.Label style={{color: '#007AB4'}}>BY VALUE <i className="fa fa-info-circle" aria-label="true" style={{color: '#007AB4'}}></i></Form.Label> */}
            <InputLabel className="position-value" htmlFor = "byValue">BY VALUE
              <i className="fa fa-info-circle position-info" style={{color: '#767676'}} aria-label="true"></i>
              </InputLabel></ArrowTooltip>
          <TextField
                id="byValue"
                // label="BY VALUE"
                className="reconToolInput"
              />
          </Form.Group>
      </Col>
    </Row>
)
}


const StepTwoContent = ()=> {
  const state = {
    showColumnA1: true,
    showColumnA2: true,
    showColumnA1andB1: false,
    source1: '',
    source2: ''
  }
  const [values, setValues] = useState({
    sourceA: '',
    name: 'sourceA',
  },{
    sourceB: '',
    name: 'sourceB',
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
    if(event.target.name == 'sourceA'){
      state.source1 = event.target.value;
    }
    else{
      state.source2 = event.target.value;
    }
    if(state.source1 != '' || state.source2 != ''){
      state.showColumnA1andB1 = true;
    }
    else{
      state.showColumnA1andB1 = false;
    }
  }
  return (
    <div className="stepTwoSubContainer">
        <Container>
        <Row>
          <Col>
            <Form.Group controlId="sourceA">
          
              
                <FormControl className="selectOptionCss">
                <InputLabel htmlFor="sourceA">Select SourceA</InputLabel>
                <Select
                native
                  value={values.sourceA}
                  onChange={handleChange}
                  inputProps={{
                    name: 'sourceA',
                    id: 'sourceA',
                  }}
                >
                <option value=""></option>
                  <option value='PAM Positions(ACN4)'>PAM Positions (ACN4)</option>
                  <option value='complinace'>option2</option>
                  <option value='investOperations'>option3</option>
                  
                </Select>
              </FormControl>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="sourceB">
          
              <FormControl className="selectOptionCss">
              <InputLabel htmlFor="sourceB">Select SourceB</InputLabel>
              <Select
              native
                value={values.sourceB}
                onChange={handleChange}
                inputProps={{
                  name: 'sourceB',
                  id: 'sourceB',
                }}
              >
              <option value=""></option>
                <option value='Bloomberg Positions(AF200)'>Bloomberg Positions add col(AF200)</option>
                <option value='complinace'>option2</option>
                <option value='investOperations'>option3</option>
                
              </Select>
            </FormControl>
            </Form.Group>
          </Col>
        </Row>
        </Container>
        
          <StepTwoSubContainer args = { state }></StepTwoSubContainer>
        </div>
      
  )
}

// const StepTwoSubContainer=(props) =>{
//   const state = {newStuff: JSON.parse(JSON.stringify(props.args)),
//     showColumnA2andB2: false }
//   console.log(state.newStuff);
  
//   const columnShowClick =(e) => {
//     state.showColumnA2andB2 = true;
//   }
//   return(
//     <Container className="customSRContainer">
//     <ColumnA1andB1></ColumnA1andB1>
//     <ColumnA2andB2 ></ColumnA2andB2>
//       {/* { props.args.showColumnA1andB1 ? <ColumnA1andB1></ColumnA1andB1> : null }
//         { state.showColumnA2andB2 ? <ColumnA2andB2></ColumnA2andB2> : <ColumnA1andB1></ColumnA1andB1> } */}
//         { props.args.showColumnA1andB1 ? (<Row>
//           <Col>
//             <Button className="btnMargin" variant="outline-primary"
//               onClick = { columnShowClick.bind(this) }
//             ><i class="fa fa-plus-circle" aria-hidden="true"></i>
//               ADD NEW RULE</Button>
//           </Col>
//         </Row>) : null }
        
//         </Container>
//   )
// }

class Column1Desc extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.args;
  }
  render(){
    return(<div>
      { this.state.length > 0 ? (
        
        <Row>
        <Col xs={12}>
          Description = { this.state.columnDesc.desc }  
        </Col>
        <Col xs={12}>Data type = { this.state.columnDesc.dataType }</Col>
        <Col xs={12}>Frequency = { this.state.columnDesc.freq }</Col>
      </Row>
      
      ): null}
      </div>
    )
  }
}

class Column2Desc extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.args;
  }

  render(){
    return(<div>
      { this.state.length > 0 ? (
        
        <Row>
        <Col xs={12}>
          Description = { this.state.columnDesc.desc }  
        </Col>
        <Col xs={12}>Data type = { this.state.columnDesc.dataType }</Col>
        <Col xs={12}>Frequency = { this.state.columnDesc.freq }</Col>
      </Row>
      
      ): null}
      </div>
    )
  }
}

class StepTwoSubContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      args: this.props.args,
      showColumnA2andB2: false
    }
    this.columnShowClick = this.columnShowClick.bind(this);
    
  }
  columnShowClick(e) {
    this.setState({showColumnA2andB2 :true});
  }
  render(){
    return(
<Container className="customSRContainer">
    {/* <ColumnA1andB1></ColumnA1andB1> */}
    {/* <ColumnA2andB2 ></ColumnA2andB2> */}
    {/* { this.state.showColumnA2andB2 ? <ColumnA2andB2></ColumnA2andB2> : null } */}
      { this.state.args.showColumnA1andB1 ? <ColumnA1andB1></ColumnA1andB1> : null }
        { this.state.showColumnA2andB2 ? <ColumnA2andB2></ColumnA2andB2> : null }
        { this.state.args.showColumnA1andB1 ? (<Row className="customBorderTop">
          <Col>
            <Button className="btnMargin" variant="outline-primary"
              onClick = { this.columnShowClick }
            ><i class="fa fa-plus-circle" aria-hidden="true"></i>
              ADD NEW RULE</Button>
          </Col>
        </Row>) : null }
        {/* <Row>
          <Col>
            <Button className="btnMargin" variant="outline-primary"
              onClick = { this.columnShowClick }
            ><i class="fa fa-plus-circle" aria-hidden="true"></i>
              ADD NEW RULE</Button>
          </Col>
        </Row> */}
        
        </Container>
    )
      
    
  }
}

export class StepTwo extends React.Component {
  
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
