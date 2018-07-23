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
import {createHashHistory} from 'history'
import {changeRestoreSurveys} from "../../../../redux/actions/surveysActions";

const hist = createHashHistory()

class Item extends Component {
    Restore(e){
        e.preventDefault()
        this.props.dispatch(changeRestoreSurveys(this.props.surveys.id))
    }
    render() {
        const surveys = this.props.surveys
        return (
            <TableRow hover>
                <TableCell>
                    <Typography>
                        {this.props.stt}
                    </Typography>
                </TableCell>
                <TableCell>
                    {surveys.title.substring(0,20)}
                </TableCell>
                <TableCell>
                    {surveys.date_start}
                </TableCell>
                <TableCell>
                    {surveys.surveys_type.name}
                </TableCell>
                <TableCell>
                    {surveys.total_question}
                </TableCell>
                <TableCell>
                    {surveys.create_at}
                </TableCell>
                <TableCell>
                    <Checkbox
                        checked={surveys.deleted}
                        onChange={this.Restore.bind(this)}
                    />
                </TableCell>
                <TableCell>
                    <div className={'d-flex flex-row'}>
                        <IconButton onClick={() => hist.push(`/surveys/${surveys.id}`)}>
                            <InfoIcon/>
                        </IconButton>
                    </div>
                </TableCell>
            </TableRow>
        );
    }
}

export default connect()(Item);