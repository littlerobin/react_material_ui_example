import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";

import ReconList from './ReconList';
import SearchFilter from './SearchFilter';

import '../../assets/css/recontoolCss/ManageJobs.css'

function createData(reconid, jobname, frequency, createdat, status) {
    return { reconid, jobname, frequency, createdat, status };
}


const bluetheme = createMuiTheme({
    palette: {
        primary: {
            main: '#006192',
        }
    }
});

class ManageJobs extends React.Component {
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
                return <ArrowUpward />
            else
                return <ArrowDownward />
           
        }

        return (
            <div>
                <Grid item sm={12} xs={12}>
                    <MuiThemeProvider theme={bluetheme}>
                        <span
                            color="primary" className="None-Capital"
                            className="Search-Recon-jobs-button"
                            onClick={() => {
                                let newvisible = this.state.searchVisible;
                                newvisible = (newvisible === false ? true : false);
                                this.setState({ searchVisible: newvisible });
                            }}>
                            {ShowArrow()}Search Recon Jobs
                        </span>
                        <div className="innerTab-search"></div> 
                        <div className="Template-List-Subtitle-Underline " />                       
                        <div className="Template-List-Search-Result">
                            {ShowFilter()}
                        </div>
                    </MuiThemeProvider>
                </Grid>
                <div className="innerTab"></div> 
                <Grid item sm={12} xs={12}>
                    <MuiThemeProvider theme={bluetheme}>
                        <Typography color="primary" className="None-Capital" variant="button" gutterBottom>Job Details</Typography>
                    </MuiThemeProvider>
                    <div className="innerTab-search"></div> 
                    <div className="Template-List-Subtitle-Underline" />
                    <ReconList rows={this.state.searched} />
                </Grid>
            </div>
        );
    }
}

// ManageJobs.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default ManageJobs;
