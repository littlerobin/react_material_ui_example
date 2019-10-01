import React from 'react';
import "../../assets/css/reportanissueCss/myMainPage.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Router, Link } from "@reach/router"
import { SvgIcon, Typography, TextField, Input, FormControl, InputLabel, NativeSelect, Button, Grid,
  MuiThemeProvider, createMuiTheme, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Breadcrumbs, Menu, MenuItem } from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import UpArrow from '../../assets/icons/ue900-c-icon--arrow-up.svg';

const bluetheme = createMuiTheme({
  palette: {
    primary: {
      main: '#006192',
    },
    secondary: {
      main: '#006192',
    }
  },
});


class MyMainPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render(){
      return (
        <div className="content-bg WholeComponent">
          
            <header className="Titleheader"><h5>Report an Issue</h5>
                <span className="">Version 2.0</span>
            </header>
            <div className = "ethicsAndComplianceForm">
                <div class="Margin-Top-15">
                  <Link color="inherit" to="/reportanissue">
                    <UpArrow height = "16" width="16" stroke="#006192" />
                        <span>Overview</span>
                  </Link>
                  <NavigateNextIcon fontSize="small" />
                  <RadioGroup className="DurationFilterGroup" aria-label="position" name="position" row>
                    <FormControlLabel
                      value="1"
                      control={<Radio color="initial" />}
                      label="Last 24 Hours"
                      labelPlacement="end"
                      checked={true}
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio color="initial" />}
                      label="Last 7 days"
                      labelPlacement="end"
                      checked={false}
                    />
                    <FormControlLabel
                      value="30"
                      control={<Radio color="initial" />}
                      label="Last 30 days"
                      labelPlacement="end"
                      checked={false}
                    />
                  </RadioGroup>
                </div>
                <div class="Margin-Top-15 Template-List-Subtitle-Underline"></div>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <h5 className="Template-IssueSubtitle"><span style={{ fontSize: '0.8em' }}>IssuesCreated</span></h5>
                    <Typography className="IssueCount">4</Typography>
                    <Typography color="initial">My last created Issue</Typography>
                    <Typography className="Margin-Left-25 Margin-Top-15" color="initial">ISSUE-001</Typography>
                    <Typography className="Margin-Left-25 Margin-Top-15" color="initial">Data Quality</Typography>
                    <Typography className="Margin-Left-25 Margin-Top-15" color="initial">08/16/2019, 10:44 AM</Typography>
                    <Typography className="Margin-Left-25 Margin-Top-15" color="initial">Analysis</Typography>
                    <div className="Margin-Left-45 Margin-Top-50">
                    <Link to="createissue">  <Button color="primary" variant="contained" className="Back-Blue Margin-Top-5 Margin-Right-45">CREATE A NEW ISSUE</Button></Link><br/>
                    <Link to="manageissues"> <Button color="inherit" variant="outlined" className="Margin-Top-5 Margin-Right-45">MANAGE MY ISSUES</Button></Link>
                    </div>
                  </Grid>
                  <Grid>
                  <div class="Template-List-Subtitle-Verticalline"></div>
                    </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <h5 className="IssueSubtitled"><span style={{ fontSize: '0.8em' }}>Ethics & Compliance Exceptions Logged</span></h5>
                    <Typography className="Template-IssueCounted">16</Typography>
                    <Typography color="initial" className="Margin-Left-25 Margin-Top-5">My last submitted exception:</Typography>
                    <Typography className="Margin-Left-45 Margin-Top-15" color="initial">ISSUE-001</Typography>
                    <Typography className="Margin-Left-45 Margin-Top-15" color="initial">Data Quality</Typography>
                    <Typography className="Margin-Left-45 Margin-Top-15" color="initial">08/16/2019, 10:44 AM</Typography>
                    <Typography className="Margin-Left-45 Margin-Top-15" color="initial">&nbsp;Open</Typography>
                    <div className="Margin-Left-55 Margin-Top-50">
                    <Link to="submitnewexception">
                      <Button color="primary" variant="contained" className="Back-Blue Margin-Right-45">SUBMIT A NEW EXCEPTION</Button></Link><br/>
                    <Link to="manageexceptions"> <Button color="inherit" variant="outlined" className="Margin-Top-5 Margin-Right-45">MANAGE MY EXCEPTIONS</Button></Link>
                    </div>
                  </Grid>
                </Grid>
              
                </div>
            
            </div>
      )
    }
}

export default MyMainPage;