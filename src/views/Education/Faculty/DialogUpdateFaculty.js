import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import {changeUpdateFaculty} from "../../../redux/actions/facultyActions";
class DialogUpdateFaculty extends React.Component {
    state = {
        faculty_code : this.props.faculty.faculty_code,
        faculty_name : this.props.faculty.faculty_name,
        faculty_description : this.props.faculty.faculty_description,
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
            faculty_code : this.state.faculty_code,
            faculty_name :  this.state.faculty_name,
            faculty_description :  this.state.faculty_description,
        }
        this.props.dispatch(changeUpdateFaculty(form, this.props.faculty.id))
        this.setState({open: false});
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
                    <DialogTitle id="form-dialog-title">
                        Update faculty
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter to form
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Code"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'faculty_code'
                            value={this.state.faculty_code}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'faculty_name'
                            value={this.state.faculty_name}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Description"
                            multiline
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'faculty_description'
                            value={this.state.faculty_description}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
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
export default connect()(DialogUpdateFaculty)