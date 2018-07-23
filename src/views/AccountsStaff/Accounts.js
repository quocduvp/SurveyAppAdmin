import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchListAccoutnStaff} from "../../redux/actions/accountsActions";
import Loader from "../../containers/Component/Loader/Loader";
import TableAccounts from './Accounts/TableAccounts'
class Accounts extends Component {
    componentWillMount(){
        this.props.dispatch(fetchListAccoutnStaff())
    }
    render() {
        return (
            <div>
                {this.props.accounts.fetched ?
                    <Loader/> : <TableAccounts/>
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
export default connect(mapStateToProps)(Accounts);