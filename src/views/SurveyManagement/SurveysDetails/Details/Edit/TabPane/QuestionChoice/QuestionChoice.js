import React, {Component} from 'react';
import AddQuestionForm from '../EditQuestion/AddQuestionForm'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Question from "./Question";

class QuestionChoice extends Component {
    state = {
        open: false
    }

    CloseFormAdd(e) {
        e.preventDefault()
        this.setState({
            open: false
        })
    }

    OpenFormAdd(e) {
        e.preventDefault()
        this.setState({
            open: true
        })
    }

    render() {
        const {classes} = this.props
        const questions = this.props.questions
        return (
            <div>
                <div className={classes.listQuestion}>
                    {questions.map((question, id) => {
                        return (
                            <Question key={id} question={question}/>
                        )
                    })}
                    {this.state.open ?
                        <AddQuestionForm idSurvey={this.props.idSurvey} close={this.CloseFormAdd.bind(this)}/> : ''}
                </div>
                <div className={classes.buttonGroup}>
                    <Button onClick={this.OpenFormAdd.bind(this)} variant="fab" color="secondary" className={'ml-auto'}>
                        <AddIcon/>
                    </Button>
                </div>
            </div>
        );
    }
}

const styles = theme => ({
    buttonGroup: {
        marginTop: '16px',
        marginBottom: '8px',
        position: 'relative',
        display: 'flex'
    },
    listQuestion: {
        marginBottom: '0'
    }
})
export default withStyles(styles)(QuestionChoice);