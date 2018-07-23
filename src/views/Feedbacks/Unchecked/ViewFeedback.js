import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ViewIcon from '@material-ui/icons/RemoveRedEye'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Slide from '@material-ui/core/Slide';
import {Link} from 'react-router-dom'
import withMobileDialog from '@material-ui/core/withMobileDialog';
import {viewFeedback} from "../../../redux/actions/feedbackActions";
import {connect} from 'react-redux'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ViewFeedback extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    Close(e) {
        e.preventDefault()
        this.props.dispatch(viewFeedback(this.props.feedback.id))
        this.setState({open: false});
    }

    render() {
        const feedback = this.props.feedback
        return (
            <div>
                <IconButton onClick={this.handleClickOpen}>
                    <ViewIcon/>
                </IconButton>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {feedback.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {feedback.description}
                        </DialogContentText>
                        <div style={{marginTop: '16px'}} className={'d-flex'}>
                            <span className={'ml-auto d-flex align-items-center'}>
                            From {' '}<Link to={`/accounts/${feedback.userinfo.user_id}`}>
                                <Chip
                                    avatar={<Avatar src={feedback.userinfo.avatar}/>}
                                    label={feedback.userinfo.username}
                                />
                                </Link>
                            </span>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.Close.bind(this)} color="primary">
                            Checked feedback
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

ViewFeedback.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(connect()(ViewFeedback));
