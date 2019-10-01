import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

const rows = [
  {
                class: 'evenRow',
                key: 'Policy204', 
                data: {
                    ExceptionNumber: 200,
                    PolicyNumber: "Policy 204",
                    ExceptionDetails: "Valuation",
                    ExceptionStatus: "Closed",
                    IssueDate : "07/07/2019",
                    IdentifiedDate: "25/07/2019",
                    SubmittedDate: "08/08/2019"
                }
            },
            {
                class: 'oddRow',
                key: 'Policy300', 
                data: {
                    ExceptionNumber: 300,
                    PolicyNumber: "Policy 300",
                    ExceptionDetails: "Trade Allocation",
                    ExceptionStatus: "Open",
                    IssueDate : "07/07/2019",
                    IdentifiedDate: "",
                    SubmittedDate: ""
                }
            },
            {
                class: 'evenRow',
                key: 'Policy400', 
                data: {
                    ExceptionNumber: 400,
                    PolicyNumber: "Policy 301",
                    ExceptionDetails: "Trading",
                    ExceptionStatus: "Closed",
                    IssueDate : "07/07/2019",
                    IdentifiedDate: "01/08/2019",
                    SubmittedDate: "08/08/2019"
                }
            },
            {
                class: 'oddRow',
                key: 'Policy430', 
                data: {
                    ExceptionNumber: 430,
                    PolicyNumber: "Policy 401",
                    ExceptionDetails: "Proxy Voting",
                    ExceptionStatus: "Pending",
                    IssueDate : "07/07/2019",
                    IdentifiedDate: "08/08/2019",
                    SubmittedDate: ""
                }
            },
            {
                class: 'evenRow',
                key: 'Policy480', 
                data: {
                    ExceptionNumber: 480,
                    PolicyNumber: "Policy 480",
                    ExceptionDetails: "Best Execution",
                    ExceptionStatus: "Pending",
                    IssueDate : "07/07/2019",
                    IdentifiedDate: "08/08/2019",
                    SubmittedDate: ""
                }
            },
            {
                class: 'oddRow',
                key: 'Policy500', 
                data: {
                    ExceptionNumber: 500,
                    PolicyNumber: "Policy 430",
                    ExceptionDetails: "Cash Solicitation",
                    ExceptionStatus: "Closed",
                    IssueDate : "07/07/2019",
                    IdentifiedDate: "30/07/2019",
                    SubmittedDate: "08/08/2019"
                }
            }
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'ExceptionNumb', label: 'Exception Number' },
  { id: 'PolicyNum', label: 'Policy Number' },
  { id: 'Details', label: 'Details' },
  { id: 'IssuDate', label: 'Issue Date' },
  { id: 'IdenDate', label: 'Identified Date' },
  { id: 'SubmDate', label: 'Submitted Date' },
  { id: 'Status', label: 'Status' }
];

function EnhancedTableHead(props) {
  const {  order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
      console.log(event);
    onRequestSort(event, property);
  };

  return (
    <TableHead className="customTableHeader">
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align="center"
            sortDirection={orderBy === headCell.id ? order : false}
            className= "sortingActive"
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  

  function handleTableRowClick(event, name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }
  const isSelected = name => selected.indexOf(name) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <div style={{ width: '100%'}}>
        <div className="tableBorder">
          <Table
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  return (
                    <TableRow
                      onClick={event => handleTableRowClick(event, row.key)}
                      tabIndex={-1}
                      key={row.key}
                      selected={isItemSelected}
                      className= {row.class}
                    >
                      <TableCell align="center">
                        {row.data.ExceptionNumber}
                      </TableCell>
                      <TableCell align="center">{row.data.PolicyNumber}</TableCell>
                      <TableCell align="center">{row.data.ExceptionDetails}</TableCell>
                      <TableCell align="center">{row.data.IssueDate}</TableCell>
                      <TableCell align="center">{row.data.IdentifiedDate}</TableCell>
                      <TableCell align="center">{row.data.SubmittedDate}</TableCell>
                      <TableCell align="center">{row.data.ExceptionStatus}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
     
    </div>
  );
}