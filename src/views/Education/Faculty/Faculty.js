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
import {changeDeleteFaculty, fetchListFaculty} from "../../../redux/actions/facultyActions";
import Loader from "../../../containers/Component/Loader/Loader";
import DialogCreateFaculty from "./DialogCreateFaculty";
import DialogUpdateFaculty from "./DialogUpdateFaculty";

class Faculty extends Component {
    componentDidMount() {
        this.props.dispatch(fetchListFaculty())
    }
    Delete(id,e){
        e.preventDefault()
        this.props.dispatch(changeDeleteFaculty(id))
    }
    render() {
        const {classes} = this.props;
        const store = this.props.faculty
        return (
            <Paper className={classes.root}>
                {store.fetched ? <Loader/> :
                    <div>
                        <CardContent className={'d-flex align-items-center'}>
                            <Typography variant={"headline"}>
                                Current faculties
                            </Typography>
                            <div className={'ml-auto'}>
                                <DialogCreateFaculty/>
                            </div>
                        </CardContent>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Faculty code</TableCell>
                                    <TableCell>Faculty name</TableCell>
                                    <TableCell>Faculty description</TableCell>
                                    <TableCell>Create at</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {store.faculty.map((faculty, id) => {
                                    return (
                                        <TableRow key={id}>
                                            <TableCell component="th" scope="row">
                                                {id}
                                            </TableCell>
                                            <TableCell>{String(faculty.faculty_code)}</TableCell>
                                            <TableCell>{String(faculty.faculty_name)}</TableCell>
                                            <TableCell>{String(faculty.faculty_description)}</TableCell>
                                            <TableCell>{faculty.create_at.substring(0, 10)}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={this.Delete.bind(this,faculty.id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                                <DialogUpdateFaculty faculty={faculty}/>
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
        faculty: state.faculty
    }
}
export default withStyles(styles)(connect(mapStateToProps)(Faculty));