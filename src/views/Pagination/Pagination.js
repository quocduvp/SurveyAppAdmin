import React, {Component} from 'react';

class Pagination extends Component {
    render() {
        return (
            <div style={styles.panigation} className={'d-flex'}>
                    {this.props.children}
            </div>
        );
    }
}
const styles = {
    panigation : {
        padding : '10px 25px'
    }
}

export default Pagination;