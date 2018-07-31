import React, {Component} from 'react';
import {connect} from 'react-redux'
import Thumb from './Edit/Surveys/Thumb'
import TabPane from './Edit/TabPane/TabPane'
//ui
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core/styles/index";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//icons
import EditFields from './Edit/Surveys/EditFields'
import ButtonGroup from "./Edit/Surveys/ButtonGroup";
import {
    changeDateStartSurvey,
    changeDescriptionSurvey,
    changeTitleSurvey, updateSurvey
} from "../../../../redux/actions/surveysActions";

class Views extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: false,
            description: false,
            date_start: false
        }
    }

    OpenEdit(value, e) {
        e.preventDefault()
        this.setState({
            [value]: true
        })
    }

    CloseEdit(value, e) {
        e.preventDefault()
        this.setState({
            [value]: false

        })
    }

    UpdateSurvey(e) {
        e.preventDefault()
        this.props.dispatch(updateSurvey(this.props.id))
        this.setState({
            title: false,
            description: false,
            date_start: false
        })
    }

    ChangeForm(e) {
        e.preventDefault()
        if (e.target.name === 'title')
            this.props.dispatch(changeTitleSurvey(e.target.value))
        if (e.target.name === 'description')
            this.props.dispatch(changeDescriptionSurvey(e.target.value))
        if (e.target.name === 'date_start')
            this.props.dispatch(changeDateStartSurvey(e.target.value))
    }

    render() {
        const survey = this.props.surveys
        return (
            <Paper>
                <Card>
                    <div className={'d-flex align-items-center'} id={'title'} style={{padding: '16px 10px'}}>
                        {this.state.title ?
                            <EditFields multiline={false} type={'text'} name={'title'} value={survey.details.title}
                                        dispatch={this.ChangeForm.bind(this)}/>
                            :
                            <Typography variant={'headline'}>
                                {survey.details.title}
                            </Typography>
                        }
                        <ButtonGroup submit={this.UpdateSurvey.bind(this)} status={this.state.title}
                                     close={this.CloseEdit.bind(this, 'title')}
                                     open={this.OpenEdit.bind(this, 'title')}/>
                    </div>
                    <Thumb idSurvey={survey.details.id} thumb={survey.details.thumb}/>
                    {/*Description*/}
                    <div className={'d-flex align-items-center'} id={'description'} style={{padding: '10px'}}>
                        {this.state.description ?
                            <EditFields multiline={true} type={'text'} name={'description'} value={survey.details.description}
                                        dispatch={this.ChangeForm.bind(this)}/>
                            :
                            <Typography variant={'subheading'}>
                                {survey.details.description}
                            </Typography>
                        }
                        <ButtonGroup submit={this.UpdateSurvey.bind(this)} status={this.state.description}
                                     close={this.CloseEdit.bind(this, 'description')}
                                     open={this.OpenEdit.bind(this, 'description')}/>
                    </div>
                    {/*Date start*/}
                    <div className={'d-flex align-items-center'} id={'date_start'} style={{padding: '10px'}}>
                        {this.state.date_start ?
                            <EditFields multiline={false} type={'date'} name={'date_start'}
                                        value={survey.details.date_start.substring(0, 10)}
                                        dispatch={this.ChangeForm.bind(this)}/>
                            :
                            <Typography variant={'subheading'}>
                                Date start: {survey.details.date_start.substring(0, 10)}
                            </Typography>
                        }
                        <ButtonGroup submit={this.UpdateSurvey.bind(this)} status={this.state.date_start}
                                     close={this.CloseEdit.bind(this, 'date_start')}
                                     open={this.OpenEdit.bind(this, 'date_start')}/>
                    </div>
                    <CardContent>
                        <TabPane survey={survey.details}/>
                    </CardContent>
                </Card>
            </Paper>
        );
    }
}

const styles = theme => ({
    media: {
        height: '200px',
        width: '100%'
    },
});

const mapStateToProps = (state) => {
    return {
        surveys: state.surveys
    }
}
export default withStyles(styles)(connect(mapStateToProps)(Views));