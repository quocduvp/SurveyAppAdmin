import React, {Component} from 'react';
import Avatar from "@material-ui/core/Avatar";
class NoneAvatar extends Component {
    render() {
        return (
            <Avatar className={this.props.style}>{this.props.children}</Avatar>
        );
    }
}

export default NoneAvatar;