'use strict'
import React from 'react';
import { Container, Row, Col, Card, Form, OverlayTrigger, Tooltip, Carousel } from 'react-bootstrap';
import { Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export class StepFour extends React.Component {

  render () {
    return (
      <div className="stepper">
        <div className = "stepperInner">
          <Container className="customSRContainer" style={{borderTop: 'none'}}>
          <Row className="mb-2" style={{paddingBottom: '5px'}}>
            <Col lg={10}>
              <h6><b>Job Summary</b></h6>
            </Col>
            <Col lg={2}>
              Recon ID : JID00001
            </Col>
          </Row> 
            <Row className="stepperHeader pt-20">
              <Col xs={12} lg={5}>
                <Card className="step4CustomCard">
                  <Card.Body>
                    <Card.Subtitle className="text-left">
                      <Row >
                        <Col lg={10}>
                          <h6  >Job Info</h6>
                        </Col>
                        <Col lg={2}>
                          <a href="#">Edit</a>
                        </Col>
                      </Row>
                    </Card.Subtitle>
                    <Card.Text>
                      <Card className="customCard">
                        <Card.Body className="stepFourBody">
                          <Container>
                          <Table className="customTable">
                                    
                                    <TableBody>
                                      
                                        <TableRow >
                                          <TableCell align="right">
                                            Job Name
                                          </TableCell>
                                          <TableCell align="left">PAM & Bloomberg Position reconciliation</TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                          Description
                                          </TableCell>
                                          <TableCell align="left">Reconcile PAM & Bloomberg positions daily.Report any variance greater than 5.</TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                          Department
                                          </TableCell>
                                          <TableCell align="left">Investment Operations</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                          Frequency
                                          </TableCell>
                                          <TableCell align="left">Daily</TableCell>
                                        </TableRow>
                                        
                                    </TableBody>
                                  </Table>
                            {/* <Row className="mb-2">
                              <Col>Job Name</Col>
                              <Col>PAM & Bloomberg Position reconciliation</Col>
                            </Row>
                            <Row className="mb-2">
                              <Col>Description</Col>
                              <Col>Reconcile PAM & Bloomberg positions daily.Report any variance greater than 5.</Col>
                            </Row>
                            <Row className="mb-2">
                              <Col>Department</Col>
                              <Col>Investment Operations</Col>
                            </Row>
                            <Row className="mb-2">
                              <Col>Frequency</Col>
                              <Col>Daily</Col>
                            </Row> */}
                          </Container>
                          <Card.Text> 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} lg={7}>
              <Card className ="step4CustomCard ">
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-left">
                    <Row >
                        <Col lg={10}>
                          <h6  >Source and Rules</h6>
                        </Col>
                        <Col lg={2}>
                          <a href="#">Edit</a>
                        </Col>
                      </Row>
                    </Card.Subtitle>
                    <Card.Text>
                      <Card className="customCard">
                        <Card.Body>
                        <Carousel interval = { null } controls = {false}>
                          <Carousel.Item>
                          <Container>
                              <Row className="mb-2">
                                <Col lg={6} className="carouselColumn">
                                  <Container>
                                  <Table className="customTable">
                                    
                                    <TableBody>
                                      
                                        <TableRow >
                                          <TableCell align="right">
                                            Rule1
                                          </TableCell>
                                          <TableCell align="right"></TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source A
                                          </TableCell>
                                          <TableCell align="left">PAM Positions (ACN4)</TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Sec ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Operator
                                          </TableCell>
                                          <TableCell align="left">+</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source B
                                          </TableCell>
                                          <TableCell align="left">Bloomberg Positions (AF200)</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Security ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            BY Value
                                          </TableCell>
                                          <TableCell align="left">5</TableCell>
                                        </TableRow>
                                    </TableBody>
                                  </Table>
                                   
                                  </Container>
                                  </Col>
                                  <Col lg={6} className="carouselColumn">
                                  <Container>
                                  <Table className="customTable">
                                    
                                    <TableBody>
                                      
                                        <TableRow >
                                          <TableCell align="right">
                                            Rule2
                                          </TableCell>
                                          <TableCell align="right"></TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source A
                                          </TableCell>
                                          <TableCell align="left">PAM Positions (ACN4)</TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Sec ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Operator
                                          </TableCell>
                                          <TableCell align="left">=</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source B
                                          </TableCell>
                                          <TableCell align="left">Bloomberg Positions (AF200)</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Security ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            BY Value
                                          </TableCell>
                                          <TableCell align="left">5</TableCell>
                                        </TableRow>
                                    </TableBody>
                                  </Table>
                                   
                                  </Container>
                                  </Col>
                                  </Row>
                                  </Container>
                                  
                          </Carousel.Item>
                          <Carousel.Item>
                          <Container>
                              <Row className="mb-2">
                                <Col lg={6} className="carouselColumn">
                                  <Container>
                                  <Table className="customTable">
                                    
                                    <TableBody>
                                      
                                        <TableRow >
                                          <TableCell align="right">
                                            Rule1
                                          </TableCell>
                                          <TableCell align="right"></TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source A
                                          </TableCell>
                                          <TableCell align="left">PAM Positions (ACN4)</TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Sec ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Operator
                                          </TableCell>
                                          <TableCell align="left">+</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source B
                                          </TableCell>
                                          <TableCell align="left">Bloomberg Positions (AF200)</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Security ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            BY Value
                                          </TableCell>
                                          <TableCell align="left">5</TableCell>
                                        </TableRow>
                                    </TableBody>
                                  </Table>
                                   
                                  </Container>
                                  </Col>
                                  <Col lg={6} className="carouselColumn">
                                  <Container>
                                  <Table className="customTable">
                                    
                                    <TableBody>
                                      
                                        <TableRow >
                                          <TableCell align="right">
                                            Rule2
                                          </TableCell>
                                          <TableCell align="right"></TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source A
                                          </TableCell>
                                          <TableCell align="left">PAM Positions (ACN4)</TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Sec ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Operator
                                          </TableCell>
                                          <TableCell align="left">=</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source B
                                          </TableCell>
                                          <TableCell align="left">Bloomberg Positions (AF200)</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Security ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            BY Value
                                          </TableCell>
                                          <TableCell align="left">5</TableCell>
                                        </TableRow>
                                    </TableBody>
                                  </Table>
                                   
                                  </Container>
                                  </Col>
                                  </Row>
                                  </Container>
                                  
                          </Carousel.Item>
                          <Carousel.Item>
                          <Container>
                              <Row className="mb-2">
                                <Col lg={6} className="carouselColumn">
                                  <Container>
                                  <Table className="customTable">
                                    
                                    <TableBody>
                                      
                                        <TableRow >
                                          <TableCell align="right">
                                            Rule1
                                          </TableCell>
                                          <TableCell align="right"></TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source A
                                          </TableCell>
                                          <TableCell align="left">PAM Positions (ACN4)</TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Sec ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Operator
                                          </TableCell>
                                          <TableCell align="left">+</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source B
                                          </TableCell>
                                          <TableCell align="left">Bloomberg Positions (AF200)</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Security ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            BY Value
                                          </TableCell>
                                          <TableCell align="left">5</TableCell>
                                        </TableRow>
                                    </TableBody>
                                  </Table>
                                   
                                  </Container>
                                  </Col>
                                  <Col lg={6} className="carouselColumn">
                                  <Container>
                                  <Table className="customTable">
                                    
                                    <TableBody>
                                      
                                        <TableRow >
                                          <TableCell align="right">
                                            Rule2
                                          </TableCell>
                                          <TableCell align="right"></TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source A
                                          </TableCell>
                                          <TableCell align="left">PAM Positions (ACN4)</TableCell>
                                          
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Sec ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Operator
                                          </TableCell>
                                          <TableCell align="left">=</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Source B
                                          </TableCell>
                                          <TableCell align="left">Bloomberg Positions (AF200)</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            Column
                                          </TableCell>
                                          <TableCell align="left">Security ID</TableCell>
                                        </TableRow>
                                        <TableRow >
                                          <TableCell align="right">
                                            BY Value
                                          </TableCell>
                                          <TableCell align="left">5</TableCell>
                                        </TableRow>
                                    </TableBody>
                                  </Table>
                                   
                                  </Container>
                                  </Col>
                                  </Row>
                                  </Container>
                                  
                          </Carousel.Item>
                          </Carousel>
                          <Card.Text> 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-20">
              <Col>
              <Card className="step4CustomCard">
              <Card.Body>
                    <Card.Subtitle className="text-left">
                    <Row >
                        <Col lg={11}>
                          <h6>Job Output</h6>
                        </Col>
                        <Col lg={1}>
                          <a href="#">Edit</a>
                        </Col>
                      </Row>
                    </Card.Subtitle>
                    <Card.Text>
                      <Card className="customCard">
                        <Card.Body className="stepFourBody">
                          <Container>
                            <Row>
                              <Col xs={12} lg ={6} className="carouselColumn">
                                <Row className="mb-2 text-center">
                                <Col className="text-right">Source</Col><Col className="text-left">PAM Positions(ACN4)</Col>
                              </Row>
                              <Container className="step4Joboutput">
                              <Row className="mb-2">
                                <Col className="text-right">Added column(s)</Col>
                                <Col className="text-left">Security Description</Col>
                              </Row>
                              {/* <Row className="mb-2">
                                <Col>Department</Col>
                                <Col>Investment operations</Col>
                              </Row>
                              <Row className="mb-2">
                                <Col>Frequency</Col>
                                <Col>Daily</Col>
                              </Row> */}
                              </Container>
                              </Col>
                              
                              <Col xs={12} lg ={6} className="carouselColumn">
                              <Row className="mb-2 text-center">
                              <Col className="text-right">Source</Col><Col className="text-left">Bloomber positions(AF200)</Col>
                            </Row>
                            <Container className="step4Joboutput">
                            <Row className="mb-2">
                              <Col className="text-right">Added column(s)</Col>
                              <Col className="text-left">Ticker</Col>
                            </Row>
                            {/* <Row className="mb-2">
                              <Col>Department</Col>
                              <Col>Investment operations</Col>
                            </Row>
                            <Row className="mb-2">
                              <Col>Frequency</Col>
                              <Col>Daily</Col>
                            </Row> */}
                            </Container>
                              </Col>
                            </Row>
                          </Container>
                          <Card.Text> 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Card.Text>
                    
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
