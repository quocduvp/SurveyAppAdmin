import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import AddQuestionFormText from "../EditQuestion/AddQuestionFormText";
import Question from "./Question";


class QuestionText extends Component {
    render() {
        const {classes} = this.props
        const question = this.props.questions
        return (
            <div>
                {question == null ? <AddQuestionFormText idSurvey={this.props.idSurvey}/> :
                    <Question question={question}/>
                }
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
export default withStyles(styles)(QuestionText);