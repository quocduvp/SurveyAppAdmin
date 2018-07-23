import React, {Component} from 'react';

//ui
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
//icon
import Next from '@material-ui/icons/NavigateNext'
import Preveus from '@material-ui/icons/NavigateBefore'
//redux
import {connect} from 'react-redux'
import { CellTable } from './CellTable';
import SurveysRow from "./SurveysRow";
import {preveusPagesSurveys,nextPagesSurveys,changePageSize} from "../../../../redux/actions/surveysActions";
import Pagination from "../../../Pagination/Pagination";
import PageSize from "../../../Pagination/PageSize";

class SurveysTable extends Component {
    preveus() {
        this.props.dispatch(preveusPagesSurveys('choice'))
    }

    goTo() {
        this.props.dispatch(nextPagesSurveys('choice'))
    }

    changePageSize(e) {
        this.props.dispatch(changePageSize(e.target.value,'choice'))
    }

    render() {
        return (
            <div>
                <Paper style={styles.container}>
                    <div style={styles.page}>
                        <CardContent>
                            <Typography variant={"headline"}>
                                Current surveys
                            </Typography>
                        </CardContent>
                        <Table style={styles.table}>
                            <TableHead>
                                <TableRow>
                                    {CellTable.map((r, id) => {
                                        return (
                                            <TableCell key={id}>
                                                {r}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            </TableHead>
                            <SurveysRow/>
                        </Table>
                    </div>
                    <Pagination>
                        {/*//show check box*/}
                        <div className={'d-flex ml-auto'}>
                            <div className={'mr-2'}>
                                <PageSize changeSize={this.changePageSize.bind(this)}
                                          pageSize={this.props.surveys.pageSize}/>
                            </div>
                            <div>
                                <Button onClick={this.preveus.bind(this)}><Preveus/></Button>
                                <span
                                    className={'p-2'}>{this.props.surveys.page}/{this.props.surveys.totalPage}</span>
                                <Button onClick={this.goTo.bind(this)}><Next/></Button>
                            </div>
                        </div>
                    </Pagination>
                </Paper>
            </div>
        );
    }
}

const styles = {
    container: {
        marginTop: '16px',
        marginBottom: '8px'
    },
    page: {
        overflow: 'auto'
    },
    table: {
        padding: '10px'
    }
}
const mapStateToProps = (state) => {
    return {
        surveys: state.surveys
    }
}
export default connect(mapStateToProps)(SurveysTable);