import React from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
import  {connect} from 'react-redux'
const au = false
const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
            {...rest}
            render={props =>
                au !== true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    )
}
const mapStateToProps = (state) =>{
    return {
        accessToken : state.accessToken
    }
}
export default connect(mapStateToProps)(PrivateRoute);