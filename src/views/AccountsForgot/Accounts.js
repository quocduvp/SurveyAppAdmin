import React, { Component } from 'react';
import {connect} from 'react-redux'
import Loader from "../../containers/Component/Loader/Loader";
import TableAccounts from './Accounts/TableAccounts'
import { fetchListReports } from '../../redux/reducers/listReportReducer';
class Accounts extends Component {
    componentWillMount(){
        this.props.dispatch(fetchListReports())
    }
    render() {
        return (
            <div>
                {this.props.reports.fetched ?
                    <Loader/> : <TableAccounts/>
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        reports : state.reports
    }
}
export default connect(mapStateToProps)(Accounts);