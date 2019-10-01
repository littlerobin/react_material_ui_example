import React from "react"
import { render } from "react-dom"
import { Router, Link } from "@reach/router"

// components........................................

import DashBoard from './components/plutus/dashboard';
import MyMainPage from './components/reportanissue/MyMainPage';
import SubmitNewEandCException from './components/reportanissue/SubmitNewEandCException';
import MyTask from './components/reportanissue/MyTask';
import ManageMyIssues from './components/reportanissue/ManageMyIssue';
import ManageExceptions from './components/reportanissue/ManageExceptions';
import CreateNewIssue from './components/reportanissue/CreateNewIssue';
import QueueOverview from './components/reportanissue/queueOverview';


class PlutusRouter extends React.Component {
    render(){
        return(
            <Router>
                <DashBoard path="/" />
                <MyMainPage path="reportanissue" />
                <SubmitNewEandCException path="reportanissue/submitnewexception" />
                <ManageExceptions path="reportanissue/manageexceptions" />
                <ManageMyIssues path="reportanissue/manageissues" />
                <CreateNewIssue path="reportanissue/createissue" />
                <MyTask path="reportanissue/mytask" />
                <QueueOverview path="reportanissue/queueoverview" />
            </Router>
        )
    }
}

export default PlutusRouter;