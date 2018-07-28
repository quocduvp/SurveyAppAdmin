import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditQuestionForm from "../EditQuestion/EditQuestionForm";
import {deleteQuestion} from "../../../../../../../redux/actions/questionAction";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '16px',
        marginBottom: '8px',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 8,
    },
    buttonDelete : {
        marginRight : 0
    }
});

class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            editForm: false
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        })
    }

    OpenEditForm(e) {
        e.preventDefault()
        this.setState({
            editForm: true
        })
    }

    CloseEditForm(e) {
        e.preventDefault()
        this.setState({
            editForm: false
        })
    }

    DeleteQuestion(e) {
        e.preventDefault()
        this.props.dispatch(deleteQuestion(this.props.question.id))
    }

    render() {
        const {classes} = this.props
        const question = this.props.question
        return (
            <div className={classes.root}>
                {this.state.editForm ?
                    <ListItem>
                        <EditQuestionForm question={question}
                                          close={this.CloseEditForm.bind(this)}/>
                    </ListItem> :
                    <ListItem>
                        <ListItemText onClick={this.OpenEditForm.bind(this)}
                                      primary={`${question.priority}. ${question.text}`}/>
                        <IconButton onClick={this.DeleteQuestion.bind(this)} className={classes.buttonDelete} aria-label="Comments">
                            <DeleteIcon/>
                        </IconButton>
                    </ListItem>
                }
            </div>
        );
    }
}

export default withStyles(styles)(connect()(Question));