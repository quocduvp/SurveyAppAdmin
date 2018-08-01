import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import swal from 'sweetalert'
import {connect} from 'react-redux'
import { get_survey_type } from '../../../API/apiUrl';
const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        marginTop : '16px',
        marginBottom : '8px',
        width : '100%'
    },
});

class SelectSurveyType extends React.Component {
    state = {
        surveys_type : [],
        surveys_type_id : '',
        open: false,
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleOpen = () => {
        this.setState({open: true});
    };
    componentDidMount(){
        this.fetchSurveyType()
    }
    fetchSurveyType(){
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": get_survey_type,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${this.props.accessToken.accessToken}`,
            }
        }
        axios(settings).then(r=>{
            this.setState({
                surveys_type : r.data
            })
        }).catch(async err=>{
            await swal({
                title : 'Error',
                icon : 'error',
                text : 'Dont fetch survey type'
            })
        })
    }

    render() {
        const {classes} = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">Survey type</InputLabel>
                <Select
                    open={this.state.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.props.surveys_type_id}
                    onChange={this.props.change}
                    inputProps={{
                        name: 'surveys_type_id',
                        id: 'demo-controlled-open-select',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {this.state.surveys_type.map((type,id)=>{
                        return(
                            <MenuItem key={id} value={type.id}>{type.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        );
    }
}

SelectSurveyType.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        accessToken : state.accessToken
    }
}
export default withStyles(styles)(connect(mapStateToProps)(SelectSurveyType));
