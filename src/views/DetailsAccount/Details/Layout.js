import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fields from "./Fields";
import IsAvatar from "./IsAvatar";
import NoneAvatarAndName from "./NoneAvatarAndName";
import {connect} from 'react-redux'
import {getStatusAccount} from "../../../redux/actions/accountsActions";
import DialogResetPass from "../DialogResetPass";

const styles = theme => ({
    root: {
        marginBottom: '16px',
        overflow: 'hidden'
    },
    header: {
        minHeight: '200px',
        backgroundColor: '#388E3C',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        minHeight: '500px',
        backgroundColor: '#C8E6C9'
    },
    bigAvatar: {
        width: 200,
        height: 200,
        position: 'absolute',
        marginTop: '100px',
    },
    noneAvatar: {
        width: 200,
        height: 200,
        position: 'absolute',
        marginTop: '100px',
        color: '#fff',
        backgroundColor: '#1976D2',
        fontSize: '60px'
    },
    form: {
        paddingTop: '100px',
        textAlign: 'center'
    },
    buttonStatus: {
        position: 'absolute',
        left: 0,
        top: 1
    }
});

class Layout extends Component {
    changeAccount(id, e) {
        e.preventDefault()
        this.props.dispatch(getStatusAccount(id))
    }

    render() {
        const {classes, info} = this.props;
        return (
            <Paper className={classes.root}>
                <Paper>
                    <div className={classes.header}>
                        {info.userinfo.avatar !== "" ?
                            <IsAvatar style={classes.bigAvatar} url={info.userinfo.avatar}/> :
                                <NoneAvatarAndName style={classes.noneAvatar}/>
                        }
                    </div>
                    <div className={classes.content}>
                        <div className={classes.form}>
                            <div style={{marginTop: '16px', marginBottom: '8px'}}>
                                {info.status ?
                                    <Button onClick={this.changeAccount.bind(this, info.id)} variant="contained"
                                            color="secondary">
                                        Deny
                                    </Button>
                                    :
                                    <Button onClick={this.changeAccount.bind(this, info.id)} variant="contained"
                                            color="primary">
                                        Allow
                                    </Button>
                                }
                                <DialogResetPass idAccount={info.id}/>
                            </div>
                            <div style={{padding: '16px 16px'}}>
                                <Grid container spacing={16} style={{width: '100%'}}>
                                    <Grid item lg={6} sm={12}>
                                        <div>
                                            <Fields labelName={'Fullname'}>
                                                {info.userinfo.first_name === "" ? '' :
                                                    info.userinfo.last_name === "" ?
                                                        '' : `${info.userinfo.first_name} ${info.userinfo.last_name}`
                                                }
                                            </Fields>
                                            <Fields labelName={'Gender'}>
                                                {info.userinfo.gender ? 'Male' : 'Female'}
                                            </Fields>
                                            <Fields labelName={'Birthday'}>
                                                {info.userinfo.birthday !== null ?
                                                    info.userinfo.birthday.substring(0,10) : 'Not invalid'}
                                            </Fields>
                                            {info.userinfo.classroom != null ?
                                                <Fields labelName={'Classroom'}>
                                                    {info.userinfo.classroom.class_code}
                                                </Fields> : ''
                                            }
                                            {info.userinfo.classroom !== null ?
                                                <Fields labelName={'Faculty name'}>
                                                    {info.userinfo.classroom.faculty_name}
                                                </Fields> : ''
                                            }
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} lg={6}>
                                        <div>
                                            <Fields labelName={'Section'}>{info.section}</Fields>
                                            <Fields labelName={'Phone number'}>
                                                {info.userinfo.phone_number}
                                            </Fields>
                                            <Fields labelName={'Date join'}>
                                                {info.date_join}
                                            </Fields>
                                            <Fields labelName={'Descrtiption'}>
                                                {info.userinfo.description}
                                            </Fields>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div>
                        </div>
                    </div>
                </Paper>
            </Paper>
        )
    }
}


export default withStyles(styles)(connect()(Layout));
