import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogAddFAQs from "./DialogAddFAQs";
import DialogEditFAQs from "./DialogEditFAQs";
import {changeDeleteFAQs, fetchListFAQs} from "../../../redux/actions/actionsFAQs";
import {connect} from 'react-redux'
import Loader from "../../../containers/Component/Loader/Loader";
class Faculty extends Component {
    componentDidMount() {
        this.props.dispatch(fetchListFAQs())
    }

    Delete(id,e) {
        e.preventDefault()
        this.props.dispatch(changeDeleteFAQs(id))
    }

    render() {
        const {classes} = this.props;
        const store = this.props.faqs
        return (
            <Paper className={classes.root}>
                {store.fetched ? <Loader/> :
                    <div>
                        <CardContent className={'d-flex align-items-center'}>
                            <Typography variant={"headline"}>
                                FAQs
                            </Typography>
                            <div className={'ml-auto'}>
                                <DialogAddFAQs/>
                            </div>
                        </CardContent>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Tittle</TableCell>
                                    <TableCell>Body</TableCell>
                                    <TableCell>Create at</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {store.faqs.map((faq, id) => {
                                    return (
                                        <TableRow key={id}>
                                            <TableCell component="th" scope="row">
                                                {id}
                                            </TableCell>
                                            <TableCell>{faq.title}</TableCell>
                                            <TableCell>{faq.body.length >= 30 ? faq.body.substring(0,30)+"..." :
                                                faq.body
                                            }</TableCell>
                                            <TableCell>{faq.create_at}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={this.Delete.bind(this,faq.id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                                <DialogEditFAQs faq={faq}/>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                }
            </Paper>
        )
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflow: 'auto',
        height: '500px',
        position: 'relative'
    },
    table: {
        minWidth: 700,
    },
});
const mapStateToProps = (state) => {
    return{
        faqs : state.faqs
    }
}
export default withStyles(styles)(connect(mapStateToProps)(Faculty));