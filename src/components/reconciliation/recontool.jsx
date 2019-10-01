import React from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import { SvgIcon, Grid, Button, MuiThemeProvider, createMuiTheme, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import ListIcon from '../../assets/icons/ue922-c-icon--list.svg';
import EditIcon from '../../assets/icons/uea38-c-icon--edit.svg';
import Tab3Icon from '../../assets/icons/ueb38-c-icon--product-voice-of-the-customer.svg';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MultiStep from 'react-multistep'
import ReconList from './ReconList';
import SearchFilter from './SearchFilter';
import { steps } from './stepcomponent/steps';
import ManageJobs from './ManageJobs'
import '../../assets/css/recontoolCss/prog-tracker.css';
import '../../assets/css/recontoolCss/customTabs.css';
// import '../../assets/css/recontoolCss/skeleton.css';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


function createData(reconid, jobname, frequency, createdat, status) {
  return { reconid, jobname, frequency, createdat, status };
}

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

const bluetheme = createMuiTheme({
  palette: {
    primary: {
      main: '#006192',
    }
  }
});

class ReconTab2 extends React.Component {

  constructor(props) {
    super(props);

    let searched = [
      createData('JI000735', 'Job information', 'Daily', '08/06/19', 'Completed'),
      createData('JI019286', 'Job test info111', 'Daily', '03/12/18', 'Completed'),
      createData('JI087390', 'Job data test2', 'Daily', '06/26/17', 'Completed'),
      createData('JI011223', 'Job data test1', 'Daily', '11/15/16', 'Completed'),
      createData('JI000005', 'Job Test name', 'Daily', '10/04/19', 'Completed'),
      createData('JI000001', 'Test job', 'Daily', '10/04/19', 'Completed'),
      createData('JI009377', 'Job info data', 'Daily', '10/04/19', 'Completed'),
      createData('JI008752', 'Data job', 'Daily', '10/04/19', 'Completed'),
      createData('JI004233', 'Data job', 'Daily', '10/04/19', 'Completed'),
    ];

    let searchVisible = false;

    this.state = {
      searched: searched,
      searchVisible: searchVisible,
    }
  }

  render() {
    let searchVisible = this.state.searchVisible;

    function ShowFilter() {
      if (searchVisible === true)
        return <SearchFilter />
      else
        return
    }
    function ShowArrow() {
      if (searchVisible === true)
        return null
      else
        return null
    }

    return (

      <div className="App">
        <Grid container spacing={3} className="Header">
          <Grid item sm={12} xs={12}>
            <MuiThemeProvider theme={bluetheme}>
              <Button className="None-Capital"
                onClick={() => {
                  let newvisible = this.state.searchVisible;
                  newvisible = (newvisible === false ? true : false);
                  this.setState({ searchVisible: newvisible });
                }}>
                {ShowArrow()}Search Recon Jobs
                </Button>

              <div className="Template-List-Subtitle-Underline" />
              <div className="Template-List-Search-Result">
                {ShowFilter()}
              </div></MuiThemeProvider>
          </Grid>
          <MuiThemeProvider theme={bluetheme}>
            <Grid item sm={12} xs={12}>
              <h6 className="Template-List-Subtitle">Job Details</h6>
              <div className="Template-List-Subtitle-Underline" />
              <ReconList rows={this.state.searched} />
            </Grid>
          </MuiThemeProvider>
        </Grid>
      </div>

    );
  }
}

// Icons
class Icon1 extends React.Component {

  render() {
    return (
      <div>
        <NoteAddOutlined /> New Reconciliation Template
      </div>
    )
  }
}

class Icon2 extends React.Component {

  render() {
    return (
      <div>
        <Menu /> View/Edit Reconciliation Template
      </div>
    )
  }
}

class Icon3 extends React.Component {

  render() {
    return (
      <div>
        <PersonOutlineOutlined /> Reconciliation Job Manager
      </div>
    )
  }
}
const StyledRecon = withStyles(theme => ({
  head: {
    backgroundColor: "#5b5b5b",
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#d9d9d9",
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "#f6f6f6",
    },
  },
}))(TableRow);
export default function ReconTool() {
 

  const [ showAllContent, setshowAllContent]= useState(true)
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const dailyChart = [{x: 'Progress', y: 4}, {x: 'Completed', y: 3}, {x: 'Failed', y: 1}, {x: 'Queued', y: 2}]
  const dailyPlot = [{name: 'Progress:4'}, {name: 'Completed:3'}, {name: 'Failed:1'}, {name: 'Queued:2'}]

  const monthlyChart = [{x: 'Progress', y: 1}, {x: 'Completed', y: 2}, {x: 'Failed', y: 1}, {x: 'Queued', y: 2}]
  const demandChart = [{x: 'Progress', y: 0}, {x: 'Completed', y: 0}, {x: 'Failed', y: 0}, {x: 'Queued', y: 3}]

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function showAll() { 
    setshowAllContent(false)
    console.log("clicked");
        
   }
var rows = [
        {reconid: 'JI006543', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
        {reconid: 'JI000001', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
        {reconid: 'JI872552', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
        {reconid: 'JI004233', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
        {reconid: 'JI000735', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
        {reconid: 'JI006543', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
        {reconid: 'JI006543', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
        {reconid: 'JI006543', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
        {reconid: 'JI006543', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
        {reconid: 'JI006543', jobname: 'Job test name', frequency: 'Daily', rundate: '08/07/19', status: 'In Progress'},
      ];

  const findJobs = rows.map(row => {
    console.log("Wrking");
    
    return(
    <StyledTableRow>
      <StyledTableCell component="th" scope="row" align="center">
        {row.reconid}
      </StyledTableCell>
      <StyledTableCell align="left" className="Text-Color-Blue">{row.jobname}</StyledTableCell>
      <StyledTableCell align="left" className="Job-Grid-Padding">{row.frequency}</StyledTableCell>
      <StyledTableCell align="left" className="Job-Grid-Padding">{row.rundate}</StyledTableCell>
      <StyledTableCell align="left" className="">{row.status}</StyledTableCell>
    </StyledTableRow>
  )})
   let options = {
    dataLabels: {
      enabled: false,
      formatter: function(val, opt) {
        return val + opt.w.globals.labels[opt.dataPointIndex]
      }
    },
    chart: {
      events: {
        click: function(event, chartContext, config) {
          console.log(chartContext, config);
          alert('You selected a item to view!');
        }
      }
    },
    labels: ['In Progress', 'Completed', 'Failed', 'Queue'],
    colors: ['#2DADB0', '#3DA556', '#DC3149', '#B9B9B9'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false,
        }
      }
    }],
    legend: {
        position: 'right',
        offsetY: 50,
        height: 230,
        formatter: function(seriesName, opts) {
          return opts.w.globals.series[opts.seriesIndex] + " " + seriesName
      }
    }
  },
  dailyseries = [4, 3, 1, 2],
  monthlyseries = [1, 2, 1, 2],
  demandseries = [0, 0, 0, 3]

  return (
    <div className="content-bg">
    <header className="Titleheader"><h5>Reconciliation Tool</h5>
        <span className="text-muted">Version 1.0</span>
    </header>
      <AppBar className="mt-20" position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          
        >
          <Tab className="customMatTab" label="New Reconciliation Template" icon={<EditIcon width="24" height="25" />} {...a11yProps(0)} ></Tab>
          <Tab className="customMatTab" label="View/Edit Reconciliation Template" icon={<ListIcon width="24" height="25" />} {...a11yProps(1)} ></Tab>
          <Tab className="customMatTab" label="Reconciliation Job Manager" icon={<Tab3Icon width="24" height="25" />} {...a11yProps(2)} ></Tab>
          
        </Tabs>
        
      </AppBar>
      
      <TabPanel value={value} index={0}>
      <div className="tabDesc1" >Building a new reconciliation job is as easy as 1-2-3..</div>
      <div className="innerTab"><MultiStep steps={steps} /></div>
      
      </TabPanel>
     
      <TabPanel value={value} index={1}>
      <div className="tabDesc2" >Manage and edit reconciliation jobs..</div>
      <div className="innerTab"><ManageJobs /></div>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
      
        <div className="tabDesc3" >Review all reconciliation jobs at a glance..</div>
      <div className="innerTab">
        <Grid container>
          <Grid item sm={12} xs={12}>
              <MuiThemeProvider theme={bluetheme}>
                  <Typography color="primary" className="None-Capital" variant="button" gutterBottom>Reconciliation Jobs Report</Typography>
              </MuiThemeProvider>
              <div className="Template-List-Subtitle-Underline" />
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography><span>19</span> Active Reconciliation Jobs</Typography>
            <Typography className="Job-Manager-LastDate">Active Reconciliation Jobs as of 31th August 2019</Typography>
          </Grid>
          <Grid item sm={9} xs={12}/>
          
        </Grid>
        <Grid container className="Force-Fill-400">
          <Grid className="Right-Break-Line" item sm={3} xs={12}>
          
            <div className="Active-Reconciliation-Daily"><div className="Vertical-Center">10 Daily</div></div>
            <div className="Active-Reconciliation-Monthly"><div className="Vertical-Center">6 Monthly</div></div>
            <div className="Active-Reconciliation-Demand"><div className="Vertical-Center">3 On Demand</div></div>
            <MuiThemeProvider theme={bluetheme}>
              <Button className="Text-Center" color="primary" onClick={showAll} variant="outlined">View All</Button>
            </MuiThemeProvider>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className="Active-Reconciliation-Title">
              <span className="Active-Count">10</span>&nbsp;Daily
            </div>
            <ReactApexChart options={options} series={dailyseries} type="donut" width="380" />
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className="Active-Reconciliation-Title">
              <span className="Active-Count">6</span>&nbsp;Monthly
            </div>
            <ReactApexChart options={options} series={monthlyseries} type="donut" width="380" />
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className="Active-Reconciliation-Title">
              <span className="Active-Count">3</span>&nbsp;On Demand
            </div>
            <ReactApexChart options={options} series={demandseries} type="donut" width="380" />
          </Grid>
        </Grid>
        <div style={showAllContent?{"display":"none"}:{"display":"block"}}>
          {/* Write content */}
          <br/>
          <br/>
          <Grid item sm={12} xs={12} className="Margin-Top-15">
            <MuiThemeProvider theme={bluetheme}>
                <Typography color="primary" className="None-Capital" variant="button" gutterBottom>Active Reconciliation Jobs: All</Typography>
            </MuiThemeProvider>
            <div className="Template-List-Subtitle-Underline" />
            <Table>
              <TableHead>
                <TableRow>
                  <StyledRecon align="center" width="200px">
                    <Button style={{ color: "white" }}>
                      <SvgIcon>
                        <path d="M7 10l5-5 5 5H7z M7 15l5 5 5-5H7z" />
                      </SvgIcon>
                      Recon ID
                    </Button>
                  </StyledRecon>
                  <StyledTableCell align="left">
                    <Typography variant="button" className="None-Capital" gutterBottom>
                      Job Name
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                  <Typography variant="button" className="None-Capital" gutterBottom>
                      <SvgIcon>
                        <path d="M7 10l5-5 5 5H7z M7 15l5 5 5-5H7z" />
                      </SvgIcon>
                      Frequency
                      </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                  <Typography variant="button" className="None-Capital" gutterBottom>
                      <SvgIcon>
                        <path d="M7 10l5-5 5 5H7z M7 15l5 5 5-5H7z" />
                      </SvgIcon>
                      Last Run Date
                      </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Typography variant="button" className="None-Capital" gutterBottom>
                      Status
                    </Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {findJobs}
              </TableBody>
            </Table>
          </Grid>
        </div>  
      </div>    
      </TabPanel>
      
    </div>
  );
}