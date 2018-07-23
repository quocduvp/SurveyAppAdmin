import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SelectSurveyType from "./SelectSurveyType";
import {connect} from 'react-redux'
import {CreateNewSurveys} from "../../../redux/actions/surveysActions";
class DialogAddNew extends React.Component {
    state = {
        title : "",
        description : "",
        date_start : "2018-01-01",
        surveys_type_id : 1,
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
            title : this.state.title,
            description : this.state.description,
            date_start : this.state.date_start,
            surveys_type_id : this.state.surveys_type_id,
        }
        this.props.dispatch(CreateNewSurveys(form))
    }
    render() {
        return (
            <div>
                <Button variant={'extendedFab'} color={'primary'} onClick={this.handleClickOpen}>
                    Add new survey
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create new surveys</DialogTitle>
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
                            label="Description"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'description'
                            value={this.state.description}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        <SelectSurveyType surveys_type_id={this.state.surveys_type_id}
                                          change={this.ChangeForm.bind(this)}/>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Date start"
                            type="date"
                            fullWidth
                            autoComplete={'off'}
                            name = 'date_start'
                            value={this.state.date_start}
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
export default connect()(DialogAddNew)