import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux'
import {CreateAnswer} from "../../../../../../../../redux/actions/questionAction";
class CreateAsk extends Component {
    state = {
        description : ""
    }
    Change(e){
        e.preventDefault()
        this.setState({
            description : e.target.value
        })
    }
    Submit(e){
        e.preventDefault()
        this.props.dispatch(CreateAnswer(this.state,this.props.idQuestion))
    }
    render() {
        const {classes} = this.props
        return (
            <ListItem button className={classes.nested}>
                <TextField
                    autoComplete={'off'}
                    label={'Answer'}
                    defaultValue={this.state.description}
                    placeholder={'Add answer'}
                    fullWidth
                    onChange={this.Change.bind(this)}
                />
                <ListItemSecondaryAction className={classes.deleteButton}>
                    <IconButton onClick={this.Submit.bind(this)}><AddIcon/></IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}
const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 6,
        paddingRight : theme.spacing.unit * 6
    },
    deleteButton : {
        marginRight : '32px'
    }
});
export default withStyles(styles)(connect()(CreateAsk));