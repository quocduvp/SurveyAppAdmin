import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import {connect} from 'react-redux'
import {DeleteAnswer, UpdateAnswer} from "../../../../../../../redux/actions/questionAction";
import EditAsk from "./Asks/EditAsk";

class Ask extends Component {
    state = {
        description: this.props.ask.description,
        open: false
    }

    OpenEdit(e) {
        e.preventDefault()
        this.setState({
            open: true
        })
    }

    CloseEdit(e) {
        e.preventDefault()
        this.setState({
            open: false
        })
    }

    DeleteAnswer(e) {
        e.preventDefault()
        this.props.dispatch(DeleteAnswer(this.props.idQuestion, this.props.ask.id))
    }

    Change(e) {
        e.preventDefault()
        this.setState({
            description: e.target.value
        })
    }

    Submit(e) {
        e.preventDefault()
        const form = {
            description: this.state.description
        }
        this.props.dispatch(UpdateAnswer(form, this.props.idQuestion, this.props.ask.id))
        this.setState({
            open : false
        })
    }

    render() {
        const {classes} = this.props
        const ask = this.props.ask
        return (
            <div>
                {this.state.open ?
                    <EditAsk submit={this.Submit.bind(this)} change={this.Change.bind(this)}
                             description={this.state.description}
                             close={this.CloseEdit.bind(this)}/> :
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.buttonDelete}>
                            <IconButton onClick={this.DeleteAnswer.bind(this)}>
                                <CloseIcon/>
                            </IconButton>
                        </ListItemIcon>
                        <ListItemText inset primary={ask.description}/>
                        <ListItemSecondaryAction style={{marginRight: '32px'}}>
                            <IconButton onClick={this.OpenEdit.bind(this)}>
                                <EditIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                }
            </div>
        );
    }
}

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 8,
    },
    buttonDelete: {
        marginRight: 0
    }
});
export default withStyles(styles)(connect()(Ask));