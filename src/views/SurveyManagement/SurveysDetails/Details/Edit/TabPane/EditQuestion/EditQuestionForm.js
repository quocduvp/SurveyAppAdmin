import React, {Component} from 'react';
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import {updateQuestion} from "../../../../../../../redux/actions/questionAction";
class EditQuestionForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            text : this.props.question.text,
            priority : Number(this.props.question.priority)
        }
    }
    ChangeForm(e){
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    UpdateQuestion(e){
        e.preventDefault()
        this.props.dispatch(updateQuestion(this.state,this.props.question.id));
    }
    render() {
        return (
            <div className={'w-100'}>
                <div className={'d-flex w-100'}>
                    <TextField
                        id="margin-none"
                        defaultValue={Number(this.state.priority)}
                        inputProps={{ min: "0", step: "1" }}
                        type='number'
                        style={{width: '80px'}}
                        className={'m-1'}
                        name={'priority'}
                        onChange={this.ChangeForm.bind(this)}
                    />
                    <TextField
                        id="margin-none"
                        defaultValue={this.state.text}
                        type='text'
                        fullWidth
                        className={'m-1'}
                        name={'text'}
                        onChange={this.ChangeForm.bind(this)}
                    />
                </div>
                <div className={'d-flex'}>
                    <Button onClick={this.UpdateQuestion.bind(this)} className={'ml-auto'}>
                        <EditIcon/>
                    </Button>
                    <Button onClick={this.props.close}>
                        <CloseIcon/>
                    </Button>
                </div>
            </div>
        );
    }
}

export default connect()(EditQuestionForm);