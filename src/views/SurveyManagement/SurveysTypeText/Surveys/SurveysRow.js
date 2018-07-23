import React, {Component} from 'react';

import TableBody from '@material-ui/core/TableBody'

//redux
import {connect} from 'react-redux'
import Item from "./Item";
class RowAccounts extends Component {
    render() {
        return (
            <TableBody>
                {this.props.surveys.surveys.lists.map((item,id)=>{
                    return(
                        <Item stt={id} surveys={item} key={id}/>
                    )
                })}
            </TableBody>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        surveys : state.surveys
    }
}
export default connect(mapStateToProps)(RowAccounts);