import React, {Component} from 'react';
import Avatar from "@material-ui/core/Avatar";
class NoneAvatarAndName extends Component {
    render() {
        return (
            <Avatar className={this.props.style}>None</Avatar>
        );
    }
}

export default NoneAvatarAndName;