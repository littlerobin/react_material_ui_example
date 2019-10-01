import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

function MyDatePicker(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    return (
        <MuiPickersUtilsProvider className="Search-Input" utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                label={props.label}
                className={props.className}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }} />
        </MuiPickersUtilsProvider>
    );
}

export default MyDatePicker;
