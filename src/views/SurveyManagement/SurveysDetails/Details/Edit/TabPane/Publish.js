import React, {Component} from 'react';
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button'
import PublishIcon from '@material-ui/icons/Publish'
import UndoIcon from '@material-ui/icons/Undo'
import {changePublishSurveys} from "../../../../../../redux/actions/surveysActions";
class Publish extends Component {
    Publish(e){
        e.preventDefault()
        this.props.dispatch(changePublishSurveys(this.props.id))
    }
    render() {
        const {classes} = this.props
        return (
            <div className={'d-flex justify-content-center align-items-center'}
                 style={{minHeight: '200px', position: 'relative'}}>
                {this.props.publish ?
                    <Button onClick={this.Publish.bind(this)} variant="extendedFab" color="secondary">
                        <UndoIcon/> Unpublish
                    </Button> :
                    <Button onClick={this.Publish.bind(this)} variant="extendedFab" color="primary">
                        <PublishIcon/> Publish
                    </Button>
                }

            </div>
        );
    }
}

export default connect()(Publish);