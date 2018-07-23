import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
class Fields extends Component {
    render() {
        const value = this.props.children !== null ?
            this.props.children !== "" ? this.props.children  : 'Undefined' : 'Undefinded'
        return (
            <TextField
                label={this.props.labelName}
                id="margin-normal"
                defaultValue={value}
                disabled
                fullWidth
                margin="normal"
            />
        );
    }
}

export default Fields;