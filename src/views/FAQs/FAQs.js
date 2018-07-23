import React ,{Component} from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TableFAQs from "./Table/TableFAQs";
class FAQs extends Component{
    render(){
        return(
            <div style={{marginBottom:'16px'}}>
                <Paper>
                    <TableFAQs/>
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
export default withStyles(styles)(FAQs)