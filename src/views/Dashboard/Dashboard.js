import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Box from './Box';
import {connect} from 'react-redux'
import { fetchStatisticSystems } from '../../redux/reducers/statisticsReducer';
import Loader from '../../containers/Component/Loader/Loader'
class Dashboard extends Component {
    componentDidMount(){
        this.props.dispatch(fetchStatisticSystems())
    }
    render() {
        const statistics = this.props.statistics
        return (
            <div style={{flexGrow : 1, marginBottom:'18px',overflow:'hidden'}} className="animated fadeIn">
                <Grid style={{position:'relative'}} container spacing={24}>
                    {statistics.fetched ? <Loader/> :
                    <React.Fragment>
                        <Box bgColor={'#2979ff'} title={'Users'}>{statistics.systems.total_account}</Box>
                        <Box bgColor={'#2979ff'} title={'Surveys'}>{statistics.systems.total_surveys}</Box>
                        <Box bgColor={'#2979ff'} title={'Participants'}>{statistics.systems.total_submitted}</Box>
                        <Box bgColor={'#2979ff'} title={'Classrooms'}>{statistics.systems.total_classrooms}</Box>
                        <Box bgColor={'#2979ff'} title={'Faculty'}>{statistics.systems.total_faculty}</Box>
                        <Box bgColor={'#2979ff'} title={'Feedback'}>{statistics.systems.total_feedbacks}</Box>
                        <Box bgColor={'#2979ff'} title={'FAQs'}>{statistics.systems.total_faqs}</Box>
                    </React.Fragment>
                    }
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        statistics : state.statistics
    }
}
export default connect(mapStateToProps)(Dashboard);
