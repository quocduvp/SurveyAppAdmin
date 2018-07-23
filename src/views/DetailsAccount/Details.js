import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getDetailsAccount} from "../../redux/actions/accountsActions";
import Loader from "../../containers/Component/Loader/Loader";
import Layout from "./Details/Layout";
class Details extends Component {
    componentWillMount(){
        this.props.dispatch(getDetailsAccount(this.props.match.params.id))
    }
    render() {
        return (
            <div>
                {this.props.accounts.fetched ?
                    <Loader/> : <Layout info={this.props.accounts.details}/>
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        accounts : state.accounts
    }
}
export default connect(mapStateToProps)(Details);