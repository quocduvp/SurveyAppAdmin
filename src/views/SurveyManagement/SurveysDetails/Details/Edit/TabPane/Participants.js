import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchStatisticSurveysDetails } from '../../../../../../redux/reducers/statisticsReducer';
import Loader from '../../../../../../containers/Component/Loader/Loader'
import TypeChoice from './Participants/TypeChoice';
import TypeText from './Participants/TypeText';
class Participants extends Component {
    componentWillMount(){
        this.props.dispatch(fetchStatisticSurveysDetails(this.props.idSurvey))
    }
    render() {
        const statistics = this.props.statistics
        return (
            <div style={{position:'relative',maxHeight:'200px', minHeight:'200px',overflow:'auto'}}>
                {statistics.fetched ? <Loader/> :
                    statistics.surveys.surveys_type_id === 0 ? <TypeText survey={statistics.surveys}/> : 
                    statistics.surveys.surveys_type_id === 1 ? <TypeChoice survey={statistics.surveys}/> : 'fails'
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        statistics : state.statistics
    }
}
export default connect(mapStateToProps)(Participants);