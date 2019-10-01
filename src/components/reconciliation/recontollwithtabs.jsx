import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import PhoneIcon from '@material-ui/icons/Phone';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MultiStep from 'react-multistep'
import { steps } from './stepcomponent/steps'
import '../../assets/css/recontoolCss/prog-tracker.css';
import '../../assets/css/recontoolCss/skeleton.css';

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

export default function ReconToolWithTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

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
          <Tab label="New Reconciliation Template" {...a11yProps(0)} ></Tab>
          <Tab label="View/Edit Reconciliation Template" {...a11yProps(1)} ></Tab>
          <Tab label="Reconciliation Job Manager" {...a11yProps(2)} ></Tab>
          
        </Tabs>
        
      </AppBar>
      
      <TabPanel value={value} index={0}>
      <div className="tabDesc1" >Building a new reconciliation job is as easy as 1-2-3..</div>
      <div className="innerTab"><MultiStep steps={steps} /></div>
      
      </TabPanel>
     
      <TabPanel value={value} index={1}>
      <div className="tabDesc2" >Manage and edit reconcilition jobs..</div>
        Item Two
      </TabPanel>
      
      <TabPanel value={value} index={2}>
      <div className="tabDesc3" >Review all reconciliation jobs at a glance..</div>
        Item Three
      </TabPanel>
      
    </div>
  );
}