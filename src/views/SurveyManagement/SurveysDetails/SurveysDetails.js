import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchDetailsSurvey} from "../../../redux/actions/surveysActions";
import Loader from "../../../containers/Component/Loader/Loader";
import Views from "./Details/Views";
class SurveysDetails extends Component {
    componentDidMount(){
        this.props.dispatch(fetchDetailsSurvey(this.props.match.params.id))
    }
    render() {
        return (
            <div style={{marginBottom:'16px'}}>
                {this.props.surveys.fetched ?
                    <Loader/> : <Views id={this.props.match.params.id}/>
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
export default connect(mapStateToProps)(SurveysDetails);