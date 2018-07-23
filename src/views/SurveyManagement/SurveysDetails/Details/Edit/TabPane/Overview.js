import React, {Component} from 'react';
import {connect} from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
//icon
import WidgetsIcon from '@material-ui/icons/Widgets'
import CheckIcon from '@material-ui/icons/Check'
import PeopleIcon from '@material-ui/icons/People'
import PublishIcon from '@material-ui/icons/Publish'

class Overview extends Component {
    render() {
        const details = this.props.details
        return (
            <div className={'d-flex justify-content-center'}>
                <div>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <WidgetsIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary={`Type of questions: ${details.surveys_type.name.toUpperCase()}`}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CheckIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary={`Number of questions: ${details.total_questions}`}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary="Participants: 12/100"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <PublishIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary={`Create at: ${details.create_at.substring(0, 10)}`}/>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}

export default connect()(Overview);