import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import SelectListFaculty from "./SelectListFaculty";
import {changeCreateClassroom} from "../../../redux/actions/classroomActions";
class DialogAddClassroom extends React.Component {
    state = {
        class_code: "",
        faculty_id: 1,
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
        this.props.dispatch(changeCreateClassroom(form))
        this.setState({open: false})
    }
    render() {
        return (
            <div>
                <Button variant={'extendedFab'} color={'primary'} onClick={this.handleClickOpen}>
                    Add new class
                </Button>
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
export default connect()(DialogAddClassroom)