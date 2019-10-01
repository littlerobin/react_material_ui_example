import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, SvgIcon, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import '../../assets/css/recontoolCss/searchFields.css';


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

class ReconList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: this.props.rows,
    };
  }

  render() {
    let rows = this.state.rows;

    return (
      <Table className="tableFont">
        <TableHead>
          <TableRow>
            <StyledRecon align="center">
              <Button className = "None-Capital" style={{ color: "white" }}>
                <SvgIcon>
                  <path d="M7 10l5-5 5 5H7z M7 15l5 5 5-5H7z" />
                </SvgIcon>
                Recon ID
              </Button>
            </StyledRecon>
            <StyledTableCell align="left">
              <Typography className = "None-Capital"  gutterBottom>
                Job Name
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Button className = "None-Capital">
                <SvgIcon>
                  <path d="M7 10l5-5 5 5H7z M7 15l5 5 5-5H7z" />
                </SvgIcon>
                Frequency
              </Button>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Button className = "None-Capital">
                <SvgIcon>
                  <path d="M7 10l5-5 5 5H7z M7 15l5 5 5-5H7z" />
                </SvgIcon>
                Date Created
              </Button>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Typography className = "None-Capital"  gutterBottom>
                Status
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Typography  className="None-Capital" gutterBottom>
              Actions
              </Typography> 
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" align="center">
                {row.reconid}
              </StyledTableCell>
              <StyledTableCell align="left" className="Text-Color-Blue">{row.jobname}</StyledTableCell>
              <StyledTableCell align="left" className="Job-Grid-Padding">{row.frequency}</StyledTableCell>
              <StyledTableCell align="left" className="Job-Grid-Padding">{row.createdat}</StyledTableCell>
              <StyledTableCell align="left" className="">{row.status}</StyledTableCell>

              <StyledTableCell align="left" className="">
                <div>
                  <Button color="primary" variant="contained" color="primary" className="Action-Button Text-Color-Blue" onClick={() => { alert(row.jobname); }}>Duplicate</Button>
                  <Button color="primary" variant="contained" color="primary" className="Action-Button Text-Color-Blue" onClick={() => { alert(row.jobname); }}>Delete</Button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}


export default ReconList;
