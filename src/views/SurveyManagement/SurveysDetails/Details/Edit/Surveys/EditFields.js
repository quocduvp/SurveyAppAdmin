import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
class EditFields extends Component {
    render() {
        return (
            <div className={'w-100'}>
                <TextField
                    id="multiline-static"
                    label={this.props.name}
                    defaultValue={this.props.value}
                    fullWidth
                    name={this.props.name}
                    onChange={this.props.dispatch}
                    type={this.props.type}
                />
            </div>
        );
    }
}

export default EditFields;