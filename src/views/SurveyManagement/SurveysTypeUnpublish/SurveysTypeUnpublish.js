import React, { Component } from 'react';
import {fetchListSurveysUnpublish} from '../../../redux/actions/surveysActions';
import Loader from '../../../containers/Component/Loader/Loader';
import SurveysTable from './Surveys/SurveysTable';
import {connect} from 'react-redux'
class SurveysTypeUnpublish extends Component {
    componentWillMount(){
        this.props.dispatch(fetchListSurveysUnpublish())
    }
    render() {
        return (
            <div style={{position :'relative'}}>
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
export default connect(mapStateToProps)(SurveysTypeUnpublish);