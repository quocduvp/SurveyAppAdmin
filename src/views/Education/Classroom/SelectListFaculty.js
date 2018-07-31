import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux'
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

class SelectListFaculty extends React.Component {
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
        this.setState({

        })
    }
    render() {
        const {classes} = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">Faculty</InputLabel>
                <Select
                    open={this.state.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.props.faculty_id}
                    onChange={this.props.change}
                    inputProps={{
                        name: 'faculty_id',
                        id: 'demo-controlled-open-select',
                    }}
                >
                    {this.props.faculty.faculty.map((faculty,id)=>{
                        return(
                            <MenuItem key={id} value={faculty.id}>{faculty.faculty_name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        );
    }
}

SelectListFaculty.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        faculty : state.faculty
    }
}
export default withStyles(styles)(connect(mapStateToProps)(SelectListFaculty));
