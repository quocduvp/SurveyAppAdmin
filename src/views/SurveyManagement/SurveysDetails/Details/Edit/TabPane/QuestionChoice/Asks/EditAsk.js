import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux'
class EditAsk extends Component {
    render() {
        const {classes} = this.props
        return (
            <ListItem button className={classes.nested}>
                <TextField
                    autoComplete={'off'}
                    label={'Answer'}
                    defaultValue={this.props.description}
                    placeholder={'Add answer'}
                    fullWidth
                    onChange={this.props.change}
                />
                <ListItemSecondaryAction className={classes.deleteButton}>
                    <IconButton onClick={this.props.submit}><AddIcon/></IconButton>
                    <IconButton onClick={this.props.close}><CloseIcon/></IconButton>
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
export default withStyles(styles)(connect()(EditAsk));