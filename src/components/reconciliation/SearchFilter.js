import React from 'react';
import { Grid, TextField, FormControl, InputLabel, NativeSelect, Input } from '@material-ui/core';
import MyDatePicker from '../shared/MyDatePicker';
import { Button } from 'react-bootstrap';
// import './App.css';

class SearchFilter extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      frequency: 0,
      status: 0,
    };
    this.frequencyChange = this.frequencyChange.bind(this);
    this.statusChange = this.statusChange.bind(this);
  }

  frequencyChange(newfreq) {
    this.setState({frequency: newfreq});
  }

  statusChange(newstat) {
    this.setState({status: newstat});
  }

  render() {
    return (
      
      <Grid container spacing = {3}>
        <Grid item sm={4} xs={12}>
          <TextField
            className="Search-Input"
            id="search-job-id"
            label="Job ID"/>
        </Grid>
        <Grid item sm={4} xs={12} className="Fill-Full-Child">
          <MyDatePicker label="Date Created From"/>
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControl className="Search-Input">
            <InputLabel htmlFor="frequency-native-helper">Frequency</InputLabel>
            <NativeSelect
              value={0}
              onChange={e => this.frequencyChange(e.target.value)}
              input={<Input name="frequency" id="frequency-native-helper" />}
            >
              <option value="" />
              <option value={1}>Always</option>
              <option value={2}>Usually</option>
              <option value={3}>Never</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            className="Search-Input"
            id="search-job-name"
            label="Job Name"/>
        </Grid>
        <Grid item sm={4} xs={12} className="Fill-Full-Child">
          <MyDatePicker label="Date Created To"/>
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControl className="Search-Input">
            <InputLabel htmlFor="status-native-helper">Status</InputLabel>
            <NativeSelect
              value={0}
              onChange={e => this.statusChange(e.target.value)}
              input={<Input name="status" id="status-native-helper" />}
            >
              <option value="" />
              <option value={1}>Open</option>
              <option value={2}>Close</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item sm={8} xs={12}></Grid>
        <Grid item sm={2} xs={12} className="Fill-Full-Child">
          <Button variant="primary" >SEARCH</Button>
        </Grid>
        <Grid item sm={2} xs={12} className="Fill-Full-Child">
          <Button variant="outline-primary" >CLEAR</Button>
        </Grid>
      </Grid>
    );
  }
}

export default SearchFilter;
