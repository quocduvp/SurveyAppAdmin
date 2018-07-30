import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import SelectListFaculty from "./SelectListFaculty";
import {changeUpdateClassroom} from "../../../redux/actions/classroomActions";
class DialogEditClassroom extends React.Component {
    state = {
        class_code: this.props.classroom.class_code,
        faculty_id: this.props.classroom.faculty_id,
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    ChangeForm(e){
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    SubmitForm(e){
        e.preventDefault()
        let form = {
            class_code: this.state.class_code,
            faculty_id: this.state.faculty_id,
        }
        this.props.dispatch(changeUpdateClassroom(form,this.props.classroom.id))
    }
    render() {
        return (
            <div>
                <IconButton variant={'extendedFab'} color={'primary'} onClick={this.handleClickOpen}>
                    <EditIcon/>
                </IconButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create new class</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Input to form
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Class"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'class_code'
                            value={this.state.class_code}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        <SelectListFaculty faculty_id={this.state.faculty_id}
                                          change={this.ChangeForm.bind(this)}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.SubmitForm.bind(this)} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default connect()(DialogEditClassroom)