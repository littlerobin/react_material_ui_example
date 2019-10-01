import React from 'react';
import { Typography,  Button, Grid, MuiThemeProvider, createMuiTheme} from '@material-ui/core';

import ReactApexChart from 'react-apexcharts';

import '../../assets/css/reportanissueCss/custom.css';
import '../../assets/css/reportanissueCss/queue.css';

const bluetheme = createMuiTheme({
  palette: {
    primary: {
      main: '#006192',
    },
    secondary: {
      main: '#2AB2D3',
    }
  },
});

export default class QueueOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showState: true
    }
  }

  issueState = {
    options: {
      plotOptions: {
      bar: {
        barHeight: '70%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f'
    ],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return val
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        }
      },
      yaxis: {
        lines: {
          show: false,
        }
      },
    },
  
    xaxis: {
      categories: ['Submitted','Analysis','Pending Interim Fix','Interim Fix','Permanent Solution','Cancelled'
      ],
      labels: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: ['#8a679c','#2AB2ff','#2AB2ff','#2AB2ff','#2AB2ff','#2AB2ff',],
          fontSize: '14px',
          cssClass: 'apexcharts-xaxis-label',
        },
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
    },
    series: [{
      data: [21,17,25,19,30,11]
    }],
  }

  expState = {
    options: {
      plotOptions: {
      bar: {
        barHeight: '70%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom',
        },
      }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e','#33b2df', '#546E7A', '#d4526e'
    ],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return val
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        }
      },
    },
    stroke: {
      width: 2,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['Open','Pending','Close','','',''
      ],
      labels: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: ['#2AB2ff','#2AB2ff','#2AB2ff','#2AB2ff','#2AB2ff','#2AB2ff',],
          fontSize: '14px',
          cssClass: 'apexcharts-xaxis-label',
        },
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
    },
    series: [{
      data: [12,20,10,,,,]
    }],
  }

  taskState = {
    options: {
      plotOptions: {
      bar: {
        barHeight: '70%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom',
        },
      }
    },
    colors: ['#503368', '#CCDD61', '#49648C','#33b2df', '#546E7A', '#fff'
    ],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return val
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['Analysis','Completed','Cancelled','','',''
      ],
      labels: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: ['#8a679c','#2AB2ff','#2AB2ff','#2AB2ff','#2AB2ff','#2AB2ff',],
          fontSize: '14px',
          cssClass: 'apexcharts-xaxis-label',
        },
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
    },
    series: [{
      data: [21,17,25,,,,]
    }],
  }

  setShowState = () => {
    this.setState(
      {showState: !this.state.showState}
    )
  }

  render() {

    let {showState} = this.state;

    return (
      <div className="content-bg">
        <header className="Titleheader">
          <h3>Report An Issue</h3>
          <span className="text-muted">Version 2.0</span>
        </header>
        <div className={showState === true ? "" : "HIDDEN"}>
          <MuiThemeProvider theme={bluetheme}>
            <Typography color="primary" className="None-Capital IssueTitle" variant="button" gutterBottom>Overview: My Queue</Typography>
            <Button color="secondary" variant="outlined" className="DurationFilterGroup" aria-label="position" name="position" onClick={this.setShowState}>My Tasks</Button>
            <div className="QueueTemplate-List-Subtitle-Underline"/>
    
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <h5 className="QueueSubtitle">Total number of Issues</h5>
                <Typography className="IssueCount">123</Typography>
                <Typography color="secondary">Status Tracking Info</Typography>
                <div id="chart">
                  <ReactApexChart options={this.issueState.options} series={this.issueState.series} type="bar" height="350" />
                </div>
                <Grid container style={{textAlign: 'center'}}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button style={{width: '50%'}}  color="secondary" variant="contained" className="Issue-Exception-Contained-Button Margin-Top-5">REVIEW AND MANAGE ALL ISSUES</Button>  
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button style={{width: '50%'}} color="secondary" variant="outlined" className="Queue-button-Margin-Top-10">CREATE A NEW ISSUE</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <h5 className="QueueIssueSubtitle">Total number of Ethics & Complaince Exceptions</h5>
                <Typography className="IssueCount">42</Typography>
                <Typography color="secondary">Status Tracking Info</Typography>
                <div id="chart">
                  <ReactApexChart options={this.expState.options} series={this.expState.series} type="bar" height="350" />
                </div>
                <Grid container style={{textAlign: 'center'}}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button style={{width: '50%'}} color="secondary" variant="contained" className="Issue-Exception-Contained-Button Margin-Top-5">REVIEW AND MANAGE ALL EXCEPTIONS</Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button style={{width: '50%'}} color="secondary" variant="outlined" className="Queue-button-Margin-Top-10">SUBMIT A NEW EXCEPTION</Button>
                  </Grid>
                </Grid>                                  
              </Grid>
            </Grid>
          
          </MuiThemeProvider>
        </div>
        <div className={showState === false ? "" : "HIDDEN"}>
          <MuiThemeProvider theme={bluetheme} >
            <Typography color="primary" className="None-Capital IssueTitle" variant="button" gutterBottom>Overview: My Tasks</Typography>
            <Button color="secondary" variant="outlined" className="DurationFilterGroup" aria-label="position" name="position" onClick={this.setShowState}>My Queue</Button>
            <Typography className="Margin-Left-25 Margin-Top-0" color="secondary">&nbsp;</Typography>
            <div className="Template-List-Subtitle-Underline"/>
    
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <h5 color="primary" className="QueueIssuetitle" variant="button" gutterBottom>Total Number of Tasks</h5>
                <Button color="secondary" variant="outlined" className="QueueDurationFilter" aria-label="position" name="position" >View All Tasks</Button>
                <Typography className="IssueCount">24</Typography>
                <Typography color="secondary">Status Tracking Info</Typography>
                <div id="chart">
                  <ReactApexChart options={this.taskState.options} series={this.taskState.series} type="bar" height="350" />
                </div>                            
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <h5 color="primary" className="None-Capital IssueTitle" variant="button" gutterBottom>&nbsp;</h5>
                <Typography className="IssueCount">&nbsp;</Typography>
                <Typography color="secondary">&nbsp;</Typography>
                <Grid container style={{textAlign: 'center'}}>    
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button style={{width: '50%'}} color="secondary" variant="outlined" className="Queue-button-Margin-Top-10">REVIEW & MANAGE ALL ISSUES</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button style={{width: '50%'}} color="secondary" variant="outlined" className="Queue-button-Margin-Top-10">REVIEW & MANAGE ALL EXCEPTIONS</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button style={{width: '50%'}} color="secondary" variant="outlined" className="Queue-button-Margin-Top-10">CREATE A NEW ISSUE</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button style={{width: '50%'}} color="secondary" variant="outlined" className="Queue-button-Margin-Top-10">SUBMIT A NEW EXCEPTION</Button>
                    </Grid>
                </Grid> 
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}