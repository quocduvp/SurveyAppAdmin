import React, { Component } from 'react';
import {fetchListSurveysChoice} from '../../../redux/actions/surveysActions';
import Loader from '../../../containers/Component/Loader/Loader';
import SurveysTable from './Surveys/SurveysTable';
import {connect} from 'react-redux'
class SurveysTypeChoice extends Component {
    componentWillMount(){
        this.props.dispatch(fetchListSurveysChoice())
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
export default connect(mapStateToProps)(SurveysTypeChoice);