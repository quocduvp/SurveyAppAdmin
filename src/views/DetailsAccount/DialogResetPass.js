import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import {resetPasswordAccount} from "../../redux/actions/accountsActions";
class DialogResetPass extends React.Component {
    state = {
        password : "",
        password2 : "",
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
            password: this.state.password,
            pre_password : this.state.password2
        }
        this.props.dispatch(resetPasswordAccount(form,this.props.idAccount))
        this.setState({open: false})
    }
    render() {
        return (
            <div style={{marginTop:'16px'}}>
                <Button variant={'contained'} color={'primary'} onClick={this.handleClickOpen}>
                    Reset password
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Reset password
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Only use the password reset function when the user reported forget password
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="New password"
                            type="password"
                            fullWidth
                            autoComplete={'off'}
                            name = 'password'
                            value={this.state.password}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Confirm password"
                            type="password"
                            fullWidth
                            autoComplete={'off'}
                            name = 'password2'
                            value={this.state.password2}
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
export default connect()(DialogResetPass)