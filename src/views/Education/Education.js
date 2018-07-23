import React ,{Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Faculty from './Faculty/Faculty'
import Classroom from "./Classroom/Classroom";
import { withStyles } from '@material-ui/core/styles';
class Education extends Component{
    render(){
        const {classes} = this.props
        return(
            <div style={{marginBottom:'16px'}}>
                <Paper className={classes.paper}>
                    <Faculty/>
                </Paper>
                <Paper className={classes.paper}>
                    <Classroom/>
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