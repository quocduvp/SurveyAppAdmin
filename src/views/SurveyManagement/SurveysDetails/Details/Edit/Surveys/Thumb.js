import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import CardMedia from '@material-ui/core/CardMedia';
import FileUpload from '@material-ui/icons/FileUpload';
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
                <CardMedia
                    className={classes.media}
                    image={this.props.thumb !== null ?this.props.thumb: notImage}
                />
                <div className={classes.upload}>
                    <label className={classes.label} htmlFor="fileUpload">
                        <FileUpload/>
                    </label>
                    <input onChange={this.Change.bind(this)} className={classes.uploadAvatar} type={'file'} accept="image/*" id={'fileUpload'} name='file'/>
                </div>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        position: 'relative'
    },
    label: {
        padding : '6px',
        backgroundColor: '#2690ff',
        margin : 0,
        borderRadius : '50px'
    },
    uploadAvatar : {
        width: "0.1px",
        height: "0.1px",
        overflow: "hidden",
        position: "absolute",
        zIndex: -1
    },
    upload: {
        position: 'absolute',
        right: '16px',
        bottom: '16px',
        zIndex: '99',
        backgroundColor: '#4a78ae'
    },
    media: {
        height: '200px',
        width: '100%'
    },
});
export default withStyles(styles)(connect()(Thumb));