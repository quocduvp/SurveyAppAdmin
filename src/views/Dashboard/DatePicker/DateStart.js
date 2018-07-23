import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {getCurrentDate, getOtherDate} from "./currentDate";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class DateStart extends React.Component{
    state = {
        defaultDate : "2017-05-24"
    }
    componentWillMount(){

        this.setState({
            defaultDate : getOtherDate()
        })
    }
    render(){
        const { classes } = this.props;
        return(
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="Date Start:"
                    type="date"
                    defaultValue={this.state.defaultDate}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        )
    }
}
export default withStyles(styles)(DateStart);