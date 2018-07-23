import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PublishIcon from '@material-ui/icons/Publish';
import GroupIcon from '@material-ui/icons/Group';
import Typography from '@material-ui/core/Typography';
import Overview from "./Overview";
import Questions from "./Questions";
import Participants from "./Participants";
import Publish from "./Publish";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3, backgroundColor : '#c8e6c9' }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    tab: {
        backgroundColor: '#388e3c',
        color :''
    }
});

class TabPane extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const details = this.props.survey
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs className={classes.tab} fullWidth value={value} onChange={this.handleChange} scrollable={true} scrollButtons="on">
                        <Tab label={'Overview'} icon={<RemoveRedEyeIcon />} />
                        <Tab label={'Questions'} icon={<QuestionAnswerIcon />} />
                        <Tab label={'Participants'} icon={<GroupIcon />} />
                        <Tab label={'Publish'} icon={<PublishIcon />} />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Overview details={details}/></TabContainer>}
                {value === 1 && <TabContainer><Questions details={details}/></TabContainer>}
                {value === 2 && <TabContainer><Participants/></TabContainer>}
                {value === 3 && <TabContainer>
                    <Publish publish={details.publish} id={details.id}/>
                </TabContainer>}
            </div>
        );
    }
}

TabPane.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabPane);
