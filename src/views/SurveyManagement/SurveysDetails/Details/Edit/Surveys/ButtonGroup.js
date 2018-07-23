import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import EditIcon from '@material-ui/icons/Edit'
import UpdateIcon from '@material-ui/icons/Update'
class ButtonGroup extends Component {
    render() {
        const props = this.props
        return (
            <div className={'d-flex ml-auto'}>
                {props.status ?
                    <IconButton>
                        <UpdateIcon onClick={props.submit} />
                    </IconButton>
                    : ''
                }
                {props.status ?
                    <IconButton onClick={props.close}>
                        <CloseIcon/>
                    </IconButton>
                    :
                    <IconButton onClick={props.open}>
                        <EditIcon/>
                    </IconButton>
                }
            </div>
        );
    }
}

export default ButtonGroup;