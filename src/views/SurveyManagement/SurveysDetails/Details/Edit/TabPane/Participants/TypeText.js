import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AnswerTypeText from './AnswerTypeText';
class TypeText extends Component {
    render() {
        const survey = this.props.survey
        return (
            <React.Fragment>
                <Typography variant="title">
                    {survey.questions.priority}{'. '}{survey.questions.text}
                </Typography>
                <AnswerTypeText answers={survey.questions.answers}/>
            </React.Fragment>
        );
    }
}
const styles = theme => ({
    list :{
        padding: '8px',
        backgroundColor: '#fff',
        marginBottom: '16px',
    }
})
export default withStyles(styles)(TypeText);