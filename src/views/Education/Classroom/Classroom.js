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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux'
import Loader from "../../../containers/Component/Loader/Loader";
import {changeDeleteClassroom, fetchListClassroom} from "../../../redux/actions/classroomActions";
import DialogAddClassroom from "./DialogAddClassroom";
import DialogEditClassroom from "./DialogEditClassroom";

class Classroom extends Component {
    componentDidMount() {
        this.props.dispatch(fetchListClassroom())
    }
    Delete(id,e){
        e.preventDefault()
        this.props.dispatch(changeDeleteClassroom(id))
    }
    render() {
        const {classes} = this.props;
        const store = this.props.classroom
        return (
            <Paper className={classes.root}>
                {store.fetched ? <Loader/> :
                    <div>
                        <CardContent className={'d-flex align-items-center'}>
                            <Typography variant={"headline"}>
                                Current classrooms
                            </Typography>
                            <div className={'ml-auto'}>
                                <DialogAddClassroom/>
                            </div>
                        </CardContent>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Classroom</TableCell>
                                    <TableCell>Faculty code</TableCell>
                                    <TableCell>Faculty name</TableCell>
                                    <TableCell>Create_at</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {store.classroom.map((classroom, id) => {
                                    return (
                                        <TableRow key={id}>
                                            <TableCell component="th" scope="row">
                                                {id}
                                            </TableCell>
                                            <TableCell>{classroom.class_code}</TableCell>
                                            <TableCell>{classroom.faculty.faculty_code}</TableCell>
                                            <TableCell>{classroom.faculty.faculty_name}</TableCell>
                                            <TableCell>{classroom.create_at.substring(0, 10)}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={this.Delete.bind(this,classroom.id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                                <DialogEditClassroom classroom={classroom}/>
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
        classroom: state.classroom
    }
}
export default withStyles(styles)(connect(mapStateToProps)(Classroom));