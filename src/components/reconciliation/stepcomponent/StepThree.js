'use strict'
import React from 'react';
import { Container, Row, Col, Card, Form, OverlayTrigger } from 'react-bootstrap';
import { Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
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
        borderColor: `${color} #007AB3 transparent #007AB3`,
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



const SourceA = () => {
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }
  return(
    <FormGroup className="text-left" aria-label="position" name="position" value={value} onChange={handleChange} column>
        <ArrowTooltip title="Title associated with the user. ">
        <FormControlLabel
          value="secDesc"
          control={<Checkbox color="primary" />}
          label="Security Description"
          labelPlacement="start"
          className="customCheckBox"
        /></ArrowTooltip>
        <FormControlLabel
          value="cusip"
          control={<Checkbox color="primary" />}
          label="CUSIP"
          labelPlacement="start"
          className="customCheckBox"
        />
        <FormControlLabel
          value="longShortInd"
          control={<Checkbox color="primary" />}
          label="Long/Short Indicator"
          labelPlacement="start"
          className="customCheckBox"
        />
        <FormControlLabel
          value="coaAccnt"
          control={<Checkbox color="primary" />}
          label="COAAccnt"
          labelPlacement="start"
          className="customCheckBox"
        />
        <FormControlLabel
          value="holdingDate"
          control={<Checkbox color="primary" />}
          label="Holding Date"
          labelPlacement="start"
          className="customCheckBox"
        />
        <FormControlLabel
          value="portfolioNumber"
          control={<Checkbox color="primary" />}
          label="Portfolio Number"
          labelPlacement="start"
          className="customCheckBox"
        />
        <FormControlLabel
          value="origFaceValue"
          control={<Checkbox color="primary" />}
          label="Original Face Value"
          labelPlacement="start"
          className="customCheckBox"
        />
        </FormGroup>
  )
}

const SourceB = () => {
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }
  return(
    <FormGroup className="text-left" aria-label="position" name="position" value={value} onChange={handleChange} column>
        
        <FormControlLabel
          value="yellowKey"
          control={<Checkbox color="primary" />}
          label="Yellow Key"
          labelPlacement="start"
          className="customCheckBox"
        />
        <FormControlLabel
          value="secDesc"
          control={<Checkbox color="primary" />}
          label="Secruity Desc"
          labelPlacement="start"
          className="customCheckBox"
        />
        <FormControlLabel
          value="fxAvgCost"
          control={<Checkbox color="primary" />}
          label="FX Avg Cost"
          labelPlacement="start"
          className="customCheckBox"
        />
        <FormControlLabel
          value="assetType"
          control={<Checkbox color="primary" />}
          label="Asset Type"
          labelPlacement="start"
          className="customCheckBox"
        />
        <FormControlLabel
          value="currency"
          control={<Checkbox color="primary" />}
          label="Currency"
          labelPlacement="start"
          className="customCheckBox"
        />
        <ArrowTooltip title="Identifier for a financial instrument.">
        <FormControlLabel
          value="ticker"
          control={<Checkbox color="primary" />}
          label="Ticker"
          labelPlacement="start"
          className="customCheckBox"
        /></ArrowTooltip>
        <FormControlLabel
          value="tradeName"
          control={<Checkbox color="primary" />}
          label="Trade Name"
          labelPlacement="start"
          className="customCheckBox"
        />
        </FormGroup>
  )
}


export class StepThree extends React.Component {

  render () {
    return (
      <div className="stepper">
        <div className = "stepperInner">
          <Container className="customSRContainer" style={{borderTop: 'none'}}>
            <h6  style={{paddingBottom: '5px'}}>Output Columns</h6>
            <Row className="stepperHeader">
              <Col xs={12} lg={6}>
                <Card className="customCard">
                  <Card.Body>
                    
                    <Card.Subtitle className="mb-2 text-center">Source : <b>PAM Positions (ACN4)</b></Card.Subtitle>
                    {/* <Card.Text> */}
                    <div className ="cardBodyInner">
                      <b>Selected column(s)</b>
                      <p>Sec ID</p>
                      
                          <ArrowTooltip title="Description = Amount of security, commodity owned by institution, Data type = Integer, Frequency = Daily ">
                      <p>PAM Position</p></ArrowTooltip>
                      <Card className="customCardInner">
                        <Card.Body>
                          
                          <Card.Subtitle className="mb-2 text-left"><b>Add More Column(s)</b></Card.Subtitle>
                          <Card.Text>
                            <SourceA></SourceA>
                              
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </div>
                    {/* </Card.Text> */}
                    
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="customCard">
                  <Card.Body>
                    
                    <Card.Subtitle className="mb-2 text-center">Source : <b>Bloomberg Positions (AF200)</b></Card.Subtitle>
                    <div className ="cardBodyInner">
                        <b>Selected column(s)</b>
                        <p>Security ID</p>
                        <ArrowTooltip title="Description = Amount of security, commodity owned by institution, Data type = Integer, Frequency = Daily ">
                        <p>BB Position</p></ArrowTooltip>
                        <Card className="customCardInner">
                        <Card.Body>
                          
                          <Card.Subtitle className="mb-2 text-left"><b>Add More Column(s)</b></Card.Subtitle>
                          <Card.Text>
                          <SourceB></SourceB>
                            
                          </Card.Text>
                          
                        </Card.Body>
                      </Card>
                      </div>
                      
                    </Card.Body>
                  </Card>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    )
  }
}
