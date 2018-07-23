import React, { Component } from 'react';
import {fetchListSurveysDeleted} from '../../../redux/actions/surveysActions';
import Loader from '../../../containers/Component/Loader/Loader';
import SurveysTable from './Surveys/SurveysTable';
import {connect} from 'react-redux'
class SurveysTypeDeleted extends Component {
    componentWillMount(){
        this.props.dispatch(fetchListSurveysDeleted())
    }
    render() {
        return (
            <div>
                {this.props.surveys.fetched ?
                    <Loader/> : <SurveysTable/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        surveys : state.surveys
    }
}
export default connect(mapStateToProps)(SurveysTypeDeleted);