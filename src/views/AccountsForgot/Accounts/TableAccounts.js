import React, {Component} from 'react';

//ui
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

//redux
import {connect} from 'react-redux'
import {CellTable} from "./CellTable";
import RowAccounts from "./RowAccounts";

class TableAccounts extends Component {
    render() {
        return (
            <div>
                <Paper style={styles.container}>
                    <div style={styles.page}>
                        <CardContent>
                            <Typography variant={"headline"}>
                            Lost list accounts password
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
                            <RowAccounts/>
                        </Table>
                    </div>
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
        reports: state.reports
    }
}
export default connect(mapStateToProps)(TableAccounts);