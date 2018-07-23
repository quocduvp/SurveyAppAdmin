import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {getCurrentDate} from "./currentDate";
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

class DateStop extends React.Component{
    state = {
        defaultDate : "2017-05-24"
    }
    componentWillMount(){

        this.setState({
            defaultDate : getCurrentDate()
        })
    }
    changeDate(e){
        e.preventDefault()

    }
    render(){
        const { classes } = this.props;
        return(
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="Date end:"
                    type="date"
                    defaultValue={this.state.defaultDate}
                    className={classes.textField}
                    onChange={this.changeDate.bind(this)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        )
    }
}
export default withStyles(styles)(DateStop);