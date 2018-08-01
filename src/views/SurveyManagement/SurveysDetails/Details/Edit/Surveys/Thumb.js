import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {connect} from 'react-redux'
import {UploadThumbSurveys} from "../../../../../../redux/actions/surveysActions";
import {notImage} from "../../../../../../Images";
class Thumb extends Component {
    Change(e){
        e.preventDefault()
        let data = new FormData();
        data.append('file', e.target.files[0])
        this.props.dispatch(UploadThumbSurveys(data,this.props.idSurvey))
    }
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <img alt="bg"
                    className={classes.media}
                    src={this.props.thumb !== null ?this.props.thumb: notImage}
                />
                <div className={classes.upload}>
                    <input onChange={this.Change.bind(this)} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" className={classes.button} component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </div>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        position: 'relative'
    },
    upload: {
        position: 'absolute',
        right: '16px',
        bottom: '16px',
        zIndex: '99',
    },
    media: {
        height: '200px',
        width: '100%',
        objectFit : 'cover'
    },
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
});
export default withStyles(styles)(connect()(Thumb));