import React ,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Check from "./Checked/Check";
import Unchecked from "./Unchecked/Unchecked";
class Education extends Component{
    render(){
        const {classes} = this.props
        return(
            <div style={{marginBottom:'16px'}}>
                <Paper className={classes.paper}>
                    <Unchecked/>
                </Paper>
                <Paper className={classes.paper}>
                    <Check/>
                </Paper>
            </div>
        )
    }
}
const styles = theme => ({
    paper : {
        maxHeight: '500px'
    }
})
export default withStyles(styles)(Education)