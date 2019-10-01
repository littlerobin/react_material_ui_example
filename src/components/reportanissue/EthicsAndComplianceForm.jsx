import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { OverlayTrigger, ButtonToolbar } from 'react-bootstrap';
import { TextField, InputLabel,FormControl,Select, MenuItem, Input, FloatingActionButton, Switch }   from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Router, Link } from "@reach/router";
// components....................
import MyDatePicker from '../shared/MyDatePicker';
import FileUpload from '../shared/FileUpload';

// icons..............
import CloseIcon from '../../assets/icons/uea33-c-icon--close-circle-o.svg';
import AddAccountIcon from '../../assets/icons/uea60-c-icon--plus-circle-o.svg';
import DeleteRowIcon from '../../assets/icons/ue96f-c-icon--product-cleanup-trash.svg';
import InfoIcon from '../../assets/icons/ue920-c-icon--info-circle.svg';



  class AccountInfo extends React.Component {

    constructor(props) {
      super(props);
        this.state = {
          show: false,
          accNum: "",
          reimbReq: true,
          amountInUSD: 0,
          justification: "",
          reimbDate: "",
          switchClassYes: "switchYes",
          switchClassNo: "switchNo"
        }
        this.onHide = this.onHide.bind(this);
        this.openModal = this.openModal.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeField = this.changeField.bind(this);
        this.cancelModal = this.cancelModal.bind(this);
        this.addAcctPopUpSubmit = this.addAcctPopUpSubmit.bind(this);
        this.deleteAccRow = this.deleteAccRow.bind(this);
        this.accountData = [ {
          class: 'evenRow',
          key: 'ACCT-0010',
          data: {
            Account: 'ACCT-0010',
            reimbursement: 'Yes',
            justification: 'Not applicable',
            amountInUSD: 100,
            reimbursementDate: '08/06/2019'
          }
        }
        ];
    }
        
    onHide (event) {
      console.log("modal hidden");
      this.setState({
        accNum: "ACCT-0010",
        reimbReq: true,
        amountInUSD: 100,
        justification: "sample",
        reimbDate: "",
        show: false,
      })
    }

    cancelModal (event) {
      this.setState({
        accNum: "ACCT-0010",
        reimbReq: true,
        amountInUSD: 100,
        justification: "sample",
        reimbDate: "",
        show: false,
      })
    }

    openModal (event) {
      console.log("modal open");
      var key = event.currentTarget.id;
      this.accountData.map((value, i) => {
        if(value.key == key){
          this.setState({
            show: true,
            accNum: value.data.Account,
            reimbReq: (value.data.reimbursement == "Yes" ? true : false),
            amountInUSD: value.data.amountInUSD,
            justification: value.data.justification,
            reimbDate: "",
            switchClassYes: "switchYes",
            switchClassNo: "switchNo"
          })
        }
        else {
          this.setState({
            show: true,
            accNum: "",
            reimbReq: true,
            amountInUSD: 0,
            justification: "",
            reimbDate: "",
            switchClassYes: "switchYes",
            switchClassNo: "switchNo"
          })
        }
      })     
    }

    changeState (event) {
      
      console.log("change state");
      this.setState({
        reimbReq: !this.state.reimbReq
      })

      if(this.state.reimbReq){
        this.setState({
          switchClassYes: "switchNo",
          switchClassNo: "switchYes"
        })
      }
      else{
        this.setState({
          switchClassYes: "switchYes",
          switchClassNo: "switchNo"
        })
      }
    }

    changeField (event) {
      console.log(event.currentTarget.id);
      var id = event.currentTarget.id;
      switch(event.currentTarget.id){
        case "accNumber": 
           this.setState({
              accNum: event.currentTarget.value
            })
            break;
        case "reinmbAmount": 
           this.setState({
              amountInUSD: event.currentTarget.value
            })
            break;
        case "reinmJustification": 
           this.setState({
              justification: event.currentTarget.value
            })
            break;
        default:
            break;
      }
     
    }
    addAcctPopUpSubmit (event) {
      console.log("popup submit");
      event.preventDefault();
      this.accountData.push({
          class: (this.accountData.length % 2 == 0 ? 'evenRow' : 'oddRow'),
          key: this.state.accNum.trim(),
          data: {
            Account: this.state.accNum,
            reimbursement: this.state.reimbReq.toString(),
            justification: this.state.justification,
            amountInUSD: this.state.amountInUSD,
            reimbursementDate: '08/06/2019'
          }
        })
      this.setState({
        show: false
      })

    }
    
    deleteAccRow (event) {
      // console.log(event.currentTarget.parentNode.parentNode);
      var parent = event.currentTarget.parentNode.parentNode.parentNode;
      var childId = event.currentTarget.parentNode.parentNode.id;
      var child = document.getElementById(childId);
      parent.removeChild(child);
    }

    render(){
      return (
        <div className="mt-20">
          <Row className="borderBottom">
            <Col xs={12} lg={6} className="text-left">
              <div>Account Info</div>
            </Col>
            <Col xs={12} lg={6} className="text-right">
              <Button
                variant="outline-primary"
                onClick={ this.openModal }
                ><AddAccountIcon height="20" width="20" stroke="#007ab3" /><span>&nbsp;&nbsp;Add Account</span>
                </Button>
            </Col>
          </Row>
          <Row className="tablePadding">
            <Table >
              <TableHead className="customTableHeader">
                <TableRow>
                  <TableCell align="center">Account</TableCell>
                  <TableCell align="center">Reimbursement</TableCell>
                  <TableCell align="center">Justification</TableCell>
                  <TableCell align="center">Amount in USD</TableCell>
                  <TableCell align="center">Reimbursement Date</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.accountData.map(row => (
                  
                  <TableRow key = {row.data.Account} id={row.data.Account} className= {row.class}>
                    <TableCell align="center"><a href="#" id={row.data.Account} onClick={ this.openModal }>{row.data.Account}</a></TableCell>
                    <TableCell align="center">{row.data.reimbursement}</TableCell>
                    <TableCell align="center">{row.data.justification}</TableCell>
                    <TableCell align="center">{row.data.amountInUSD}</TableCell>
                    <TableCell align="center">{row.data.reimbursementDate}</TableCell>
                    <TableCell align="center" style={{ cursor: 'pointer'}}><DeleteRowIcon height='20' width='20' stroke="#006192" onClick = { this.deleteAccRow } /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Row>


            

          <Modal show={ this.state.show } onHide={ this.onHide }>
              <Modal.Header className="customModalHeaderAccount" closeButton>
                <h6>Ethics & Compliance Exception : Add Account</h6>
              </Modal.Header>
              <Modal.Body>
                
                  <TextField
                    id="accNumber"
                    label="Account Number"
                    value={this.state.accNum}
                    onChange={ this.changeField }
                    margin="normal"
                    className="textMandatory"
                    required
                  />
                  <Row>
                     <Col>
                        <Row>
                          <Col className="textMandatory">
                            <label>Reinbursement Required?</label>
                          </Col>
                          <Col>
                            <Row>
                            <div><span className = {this.state.switchClassYes} >YES</span><span><Switch
                                  checked={this.state.reimbReq}
                                  onClick={this.changeState}
                                  value="reimbReq"
                                  color="primary"
                                  inputProps={{ 'aria-label': 'primary checkbox' }}
                                /></span><span className = {this.state.switchClassNo}>NO</span>
                              
                              </div>
                            </Row>
                          </Col>
                          <Col lg={2}></Col>
                        </Row>
                      </Col>
                  </Row>
                  { this.state.reimbReq ? (
                    <div className="reinbursementContainer">
                    <Row>
                      <TextField
                        id="reinmbAmount"
                        label="Amount in USD"
                        value={this.state.amountInUSD}
                        margin="normal"
                        className="textMandatory"
                        onChange={ this.changeField }
                        required
                      />
                    </Row>
                    <Row>
                      <TextField
                        id="reinmJustification"
                        label="Justification"
                        value={this.state.justification}
                        margin="normal"
                        multiline
                        rows="3"
                        className="textMandatory"
                        helperText="Please describe how reimbursement calculation was determined, if applicable, why reimbursement is not required."
                        onChange={ this.changeField }
                        required
                      />
                    </Row>
                  </div>
                  ) : (
                    <div className="reinbursementContainer">
                    <Row>
                      <TextField
                        id="reinmbAmount"
                        label="Amount in USD"
                        value={this.state.amountInUSD}
                        margin="normal"
                        className="textMandatory"
                        onChange={ this.changeField }
                        required
                      />
                    </Row>
                    <Row>
                      <MyDatePicker name="ReinbursementDate" required className="textMandatory" label="Reinbursement Date"/>
                    </Row>
                  </div>
                  )}
                  <div className="btnGroup">
                    <Row>
                      <Col lg={4}>
                        <i className="mandatoryText">Mandatory field</i>
                      </Col>
                      <Col lg={8}>
                        <ul className="Stepperbuttonlist text-right">
                          <li>
                            <Button variant="primary" type="submit" onClick={this.addAcctPopUpSubmit} >
                              SUBMIT
                            </Button>
                          </li>
                          <li>
                            <Button variant="outline-primary" onClick={this.cancelModal} >
                              CANCEL
                            </Button>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
         
              </Modal.Body>    
        </Modal>
      </div>
      )
    }
  }

  export default function EthicsAndComplianceForm() {
    const FormValues = {
        PolicyAssociated: "",
        IssueIdentifiedBy: "",
        OriginalIssueDate: "",
        DateIssueDiscovered: "",
        DateOfResolution: "",
        IssueDescription: "",
        IssueIdentified: "",
        IssueImpact: "",
        IssueResolve: "",
        IssuePrecaution: "",
        IssueComments: "",
        FieldsArray: [],
        isFormValid: false
      }
    const [values, setValues] = useState({
      PolicyAsso: '',
      name: 'PolicyAsso',
    },{
      frequency: '',
      name: 'frequency',
    });

    const show = false;

    var fileName = "";
    
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    // useEffect(() => {
    //   setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);
    function onHide (event) {
      console.log("hidden");
      show = false;
    }
    function openModal (event) {
      console.log("show");
      show= true;
    }
    function handleFormChange(event) {
      console.log(event.target.name);
      switch(event.target.name) {
        case 'IssueIdentifiedBy':
          FormValues.IssueIdentifiedBy = event.target.value
          break;
        case 'PolicyAsso':
          FormValues.PolicyAssociated = event.target.value;
          // setValues(oldValues => ({
          //   ...oldValues,
          //   [event.target.name]: event.target.value,
          // }));
          break;
        case 'OriginalIssueDate':
          FormValues.OriginalIssueDate = event.target.value;
          break;
        case 'DateIssueDiscovered':
          FormValues.DateIssueDiscovered = event.target.value;
          break;
        case 'DateOfResolution':
          FormValues.DateOfResolution = event.target.value;
          break;
        case 'IssueDescription':
          FormValues.IssueDescription = event.target.value;
          break;
        case 'IssueIdentified':
          FormValues.IssueIdentified = event.target.value;
          break;
        case 'IssueImpact':
          FormValues.IssueImpact = event.target.value;
          break;
        case 'IssueResolve':
          FormValues.IssueResolve = event.target.value;
          break;
        case 'IssuePrecaution':
          FormValues.IssuePrecaution = event.target.value;
          break;
        case 'IssueComments':
          FormValues.IssueComments = event.target.value;
          break;
        default:
          break;
      }

      if ( FormValues.PolicyAssociated !="" && FormValues.IssueDescription !="" && FormValues.IssueIdentified !="" && FormValues.IssueImpact !="" && FormValues.IssueResolve !="" && FormValues.IssuePrecaution !="" && FormValues.IssueComments !="") {
        FormValues.isFormValid = true;
      }
    }
    return (
      
      
      <div className = "ethicsAndComplianceForm">
      <div className="customPaddingForInput">
        <Row>
          <Col xs={12} lg={6} >
            <FormControl className="selectOptionCss">
                <InputLabel htmlFor="policyAsso">Policy Associated</InputLabel>
                <Select
                native
                    value={values.fnArea}
                    onChange={handleFormChange}
                    inputProps={{
                    name: 'PolicyAsso',
                    id: 'policyAsso',
                    }}
                >
                <option value=""></option>
                    <option value='Policy401'>Policy401 - CUSTODY OF CLIENT SECURITIES</option>
                    
                    <option value='other'>Other</option>
                </Select>
                </FormControl>
            
          </Col>
          <Col xs={12} lg={6} >
            <Form.Group controlId="issueIdentifiedBy">
                <TextField
                    id="issueIdentifiedBy"
                    label="Resource who identified the issue"
                    className="textMandatory"
                    name="IssueIdentifiedBy"
                    onChange={handleFormChange}
                    required                   
                />
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col>
            <MyDatePicker name="OriginalIssueDate" className="textMandatory" label="Original Issue Date" required = "true"/>
          </Col>
          <Col>
            <MyDatePicker name="DateIssueDiscovered" className="textMandatory" label="Date Issue Discovered" required = "true"/>
          </Col>
          <Col>
            <MyDatePicker name="DateOfResolution" className="textMandatory" label="Date of Resolution" required = "true"/>
          </Col>
        </Row>
        <Row >
          <Col xs={12} lg={6} >
            <Form.Group controlId="issueDescription">
           
            <TextField
                id="issueDescription"
                label="Describe the Issue"
                className="textMandatory"
                multiline
                rows="3"
                margin="normal"
                name="IssueDescription"
                onChange={handleFormChange}
                required
              />
            
            </Form.Group>
          </Col>
          <Col xs={12} lg={6} >
            <Form.Group controlId="issueIdentified">
           
            <TextField
                id="issueIdentified"
                label="How was the issue identified"
                className="textMandatory"
                multiline
                rows="3"
                margin="normal"
                name="IssueIdentified"
                onChange={handleFormChange}
                required
              />
            
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col xs={12} lg={6} >
            <Form.Group controlId="issueImpact">
           
            <TextField
                id="issueImpact"
                label="Describe the impact"
                className="textMandatory"
                multiline
                rows="3"
                margin="normal"
                name="IssueImpact"
                onChange={handleFormChange}
                required
              />
            
            </Form.Group>
          </Col>
          <Col xs={12} lg={6} >
            <Form.Group controlId="issueResolve">
           
            <TextField
                id="issueResolve"
                label="Describe how the issue was or will be resolved"
                className="textMandatory"
                multiline
                rows="3"
                margin="normal"
                name="IssueResolve"
                onChange={handleFormChange}
                required
              />
            
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col xs={12} lg={6} >
            <Form.Group controlId="issuePrecaution">
           
            <TextField
                id="issuePrecaution"
                label="What is being done to ensure this doesn't happen again?"
                className="textMandatory"
                multiline
                rows="3"
                margin="normal"
                name="IssuePrecaution"
                onChange={handleFormChange}
                required
              />
            
            </Form.Group>
          </Col>
          <Col xs={12} lg={6} >
            <Form.Group controlId="issueComments">
           
            <TextField
                id="issueComments"
                label="Comments"
                className="reconToolInput"
                multiline
                rows="3"
                margin="normal"
                name="IssueComments"
                onChange={handleFormChange}
              />
            
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col xs={12} lg={6} >
            <Form.Group>
              <label className="control-label labelBorder">Attach & upload file(s)</label>
              <Form.Text className="text-muted">
                Note : Maximum size to upload is 8Mb.
              </Form.Text>
            </Form.Group>
            <FileUpload fileName = { fileName }/>
            
          </Col>
          <Col xs={12} lg={6} >
            
          </Col>
        </Row>
        
      </div>
      <div className="customInfoDiv mt-40">
        <span><InfoIcon height='20' width='20' fill="#006192" /></span><span className="customInfoDivText">If a Client account is impacted, please add the following account information below. </span>
      </div>
      <AccountInfo />
      </div>
    )
  }

