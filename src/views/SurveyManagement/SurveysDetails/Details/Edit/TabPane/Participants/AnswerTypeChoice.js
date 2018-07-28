import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import Typography from '@material-ui/core/Typography'
class AnswerTypeChoice extends Component {
    render() {
        const answers = this.props.answers
        return (
            <React.Fragment>
                {answers.map((answer,id)=>{
                    return(
                        <div style={{padding:'8px'}} key={id}>
                            <Typography variant="subheading">
                                {answer.text} <Badge color="primary">Users choice: {answer.total_submit}</Badge>
                            </Typography>
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }
}

export default AnswerTypeChoice;