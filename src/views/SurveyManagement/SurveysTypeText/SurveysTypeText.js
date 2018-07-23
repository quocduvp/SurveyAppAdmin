import React, { Component } from 'react';
import {fetchListSurveysText} from '../../../redux/actions/surveysActions';
import Loader from '../../../containers/Component/Loader/Loader';
import SurveysTable from './Surveys/SurveysTable';
import {connect} from 'react-redux'
class SurveysTypeText extends Component {
    componentWillMount(){
        this.props.dispatch(fetchListSurveysText())
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
export default connect(mapStateToProps)(SurveysTypeText);