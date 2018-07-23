import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckBox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux'
import Loader from "../../../containers/Component/Loader/Loader";
import {
    fetchListFeedbackUnChecked, viewFeedback,
} from "../../../redux/actions/feedbackActions";
import ViewFeedback from './ViewFeedback'

class Unchecked extends Component {
    componentDidMount() {
        this.props.dispatch(fetchListFeedbackUnChecked())
    }
    View(id,e){
        e.preventDefault()
        this.props.dispatch(viewFeedback(id))
    }
    render() {
        const {classes} = this.props;
        const store = this.props.feedback
        return (
            <Paper className={classes.root}>
                {store.fetched ? <Loader/> :
                    <div>
                        <CardContent className={'d-flex align-items-center'}>
                            <Typography variant={"headline"}>
                                Lists feedback from user (Unchecked)
                            </Typography>
                            <div className={'ml-auto'}>

                            </div>
                        </CardContent>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>title</TableCell>
                                    <TableCell>username</TableCell>
                                    <TableCell>checked</TableCell>
                                    <TableCell>Create_at</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {store.feedback_unchecked.map((feedback, id) => {
                                    return (
                                        <TableRow key={id}>
                                            <TableCell component="th" scope="row">
                                                {id}
                                            </TableCell>
                                            <TableCell>{feedback.title.substring(0,30)}</TableCell>
                                            <TableCell>{feedback.userinfo.username}</TableCell>
                                            <TableCell>
                                                <CheckBox checked={feedback.check}/>
                                            </TableCell>
                                            <TableCell>{feedback.create_at.substring(0, 10)}</TableCell>
                                            <TableCell>
                                                <ViewFeedback feedback={feedback}/>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                }
            </Paper>
        )
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflow: 'auto',
        height: '500px',
        position : 'relative'
    },
    table: {
        minWidth: 700,
    },
});
const mapStateToProps = (state) => {
    return {
        feedback: state.feedback
    }
}
export default withStyles(styles)(connect(mapStateToProps)(Unchecked));