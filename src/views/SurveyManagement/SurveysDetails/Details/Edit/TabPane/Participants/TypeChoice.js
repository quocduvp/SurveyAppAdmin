import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AnswerTypeChoice from './AnswerTypeChoice';
class TypeChoice extends Component {
    render() {
        const survey = this.props.survey
        const {classes} = this.props
        return (
            <div>
                {survey.questions.map((question,id)=>{
                    return(
                        <div className={classes.list} key={id}>
                                <Typography variant="title">
                                    {question.priority}{'. '}{question.text}
                                </Typography>
                                <AnswerTypeChoice answers={question.answers}/>
                        </div>
                    )
                })}
            </div>
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
export default withStyles(styles)(TypeChoice);