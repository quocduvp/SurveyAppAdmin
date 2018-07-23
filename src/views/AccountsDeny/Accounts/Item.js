import React, {Component} from 'react';
import {connect} from 'react-redux'
//
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InfoIcon from '@material-ui/icons/InfoOutline'
import DeleteIcon from '@material-ui/icons/Delete'
import {deleteAccount} from "../../../redux/actions/accountsActions";
import {createHashHistory} from 'history'
const hist = createHashHistory()
class Item extends Component {
    DeleteAccout(e){
        e.preventDefault()
        this.props.dispatch(deleteAccount(this.props.account.id,'deny'))
    }
    render() {
        const account = this.props.account
        return (
            <TableRow hover>
                <TableCell>
                    <Typography>
                        {this.props.stt}
                    </Typography>
                </TableCell>
                <TableCell>
                    {account.username}
                </TableCell>
                <TableCell>
                    {account.card_id}
                </TableCell>
                <TableCell>
                    {account.section}
                </TableCell>
                <TableCell>
                    <Checkbox
                        checked={account.status}
                    />
                </TableCell>
                <TableCell>
                    {account.create_at}
                </TableCell>
                <TableCell>
                    <div className={'d-flex flex-row'}>
                        <IconButton onClick={()=> hist.push(`/accounts/${account.id}`)}>
                            <InfoIcon/>
                        </IconButton>
                        <IconButton onClick={this.DeleteAccout.bind(this)}>
                            <DeleteIcon/>
                        </IconButton>
                    </div>
                </TableCell>
            </TableRow>
        );
    }
}

export default connect()(Item);