import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import {changeCreateFAQs} from "../../../redux/actions/actionsFAQs";
class DialogAddFAQs extends React.Component {
    state = {
        title : "",
        body : "",
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
        const form = {
            title : this.state.title,
            body : this.state.body,
        }
        this.props.dispatch(changeCreateFAQs(form))
        this.setState({open: false});
    }
    render() {
        return (
            <div>
                <Button variant={'extendedFab'} color={'primary'} onClick={this.handleClickOpen}>
                    Add new FAQs
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create new FAQs</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Input to form
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'title'
                            value={this.state.title}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Body"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'body'
                            value={this.state.body}
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
export default connect()(DialogAddFAQs)