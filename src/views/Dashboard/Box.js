import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
class Box extends Component {
    render() {
        const {classes} = this.props
        return (
            <Grid className={classes.root} item xs={12} sm={6} md={4} lg={3}>   
                <Paper style={{backgroundColor:this.props.bgColor}} className={classes.paper}>
                    <Typography variant='display3'>
                        {this.props.children}
                    </Typography>
                    <Typography variant='title'>
                        {this.props.title}
                    </Typography>
                </Paper>
            </Grid>
        );
    }
}

const styles = theme => ({
    root:{
        
    },
    paper:{
        padding: theme.spacing.unit * 2,
        minHeight : 200,
        position : 'relative'
    }
})
export default withStyles(styles)(Box);