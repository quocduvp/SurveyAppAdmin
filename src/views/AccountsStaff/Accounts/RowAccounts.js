import React, {Component} from 'react';

import TableBody from '@material-ui/core/TableBody'

//redux
import {connect} from 'react-redux'
import Item from "./Item";
class RowAccounts extends Component {
    render() {
        return (
            <TableBody>
                {this.props.accounts.accounts.lists.map((item,id)=>{
                    return(
                        <Item stt={id} account={item} key={id}/>
                    )
                })}
            </TableBody>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accounts : state.accounts
    }
}
export default connect(mapStateToProps)(RowAccounts);