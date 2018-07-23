import React, {Component} from 'react';

//ui
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
class PageSize extends Component {
    state = {
        age : 10
    }
    handleChange(e){
        e.preventDefault()
    }
    render() {
        return (
            <FormControl>
                <Select
                    value={this.props.pageSize}
                    onChange={this.props.changeSize}
                    inputProps={{
                        name: String(this.state.age),
                        id: 'page-size',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem  value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

export default PageSize;