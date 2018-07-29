import React, {Component} from 'react';
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import ListItem from '@material-ui/core/ListItem'
import withStyles from "@material-ui/core/styles/withStyles";
import {createQuestion} from "../../../../../../../redux/actions/questionAction";

class AddQuestionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            surveys_id : this.props.idSurvey,
            text: "",
            priority: 0
        }
    }

    ChangeForm(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    AddnewQuestion(e){
        e.preventDefault()
        this.props.dispatch(createQuestion(this.state))
    }
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
            <ListItem>
                <div className={'w-100'}>
                    <div className={'d-flex w-100'}>
                        <TextField
                            id="margin-none"
                            label={'Priority'}
                            defaultValue={Number(this.state.priority)}
                            type='number'
                            inputProps={{ min: "0", step: "1" }}
                            style={{width: '80px'}}
                            className={'m-1'}
                            name={'priority'}
                            required
                            onChange={this.ChangeForm.bind(this)}
                        />
                        <TextField
                            id="margin-none"
                            label={'Question text'}
                            defaultValue={this.state.text}
                            type='text'
                            fullWidth
                            className={'m-1'}
                            name={'text'}
                            required
                            onChange={this.ChangeForm.bind(this)}
                        />
                    </div>
                    <div className={'d-flex'}>
                        <Button onClick={this.AddnewQuestion.bind(this)} className={'ml-auto'}>
                            <AddIcon/>
                        </Button>
                        <Button onClick={this.props.close}>
                            <CloseIcon/>
                        </Button>
                    </div>
                </div>
            </ListItem>
            </div>
        );
    }
}
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '16px',
        marginBottom: '8px',
        backgroundColor: theme.palette.background.paper,
    },
});
export default withStyles(styles)(connect()(AddQuestionForm));