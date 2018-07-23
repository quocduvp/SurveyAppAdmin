import React, {Component} from 'react';
//ui
import CircularProgress from '@material-ui/core/CircularProgress'
class Loader extends Component {
    render() {
        return (
            <CircularProgress style={styles.loader} className={'loader'} />
        );
    }
}
const styles = {
    loader : {
        width: '40px',
        position: 'absolute',
        height: '40px',
        left: '50%',
        top: '50%',
    }
}
export default Loader;