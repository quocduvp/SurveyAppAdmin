import React, {Component} from 'react';
import Avatar from "@material-ui/core/Avatar";
class IsAvatar extends Component {
    render() {
        return (
            <Avatar
                alt="Adelle Charles"
                src={this.props.url}
                className={this.props.style}
            />
        );
    }
}

export default IsAvatar;