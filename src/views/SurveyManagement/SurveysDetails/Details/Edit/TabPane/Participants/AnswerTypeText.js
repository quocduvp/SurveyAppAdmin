import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
class AnswerTypeText extends Component {
    render() {
        const answers = this.props.answers
        const {classes} = this.props
        return (
            <React.Fragment>
                {answers.map((answer,id)=>{
                    return(
                        <Tooltip key={id} title={answer.username}>
                            <Chip
                                avatar={answer.avatar !== "" ?
                                <Avatar src={answer.avatar}/>
                                    : <Avatar>{answer.username.substring(0,1).toUpperCase()}</Avatar>
                                }
                                label={answer.text}
                                className={classes.chip}
                            />
                        </Tooltip>
                    )
                })}
            </React.Fragment>
        );
    }
}

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit,
    },
  });
export default withStyles(styles)(AnswerTypeText);