import React, { Component } from 'react';
import {HashRouter,  Route, Switch} from 'react-router-dom';
import  {createHashHistory} from 'history'
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';
//redux
import {connect} from 'react-redux'
import { fetchAdminProfile } from './redux/actions/profileActions';
const hist = createHashHistory()
class App extends Component {
  componentWillMount(){
    this.requestRedux()
  }
  requestRedux(){
      const token = sessionStorage.getItem('token')
      if(token != null) {
          this.props.dispatch(fetchAdminProfile(token))
      }else {
          hist.push('/Login')
      }
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
            {this.props.profile.isAdmin ?
                hist.push('/') : ''
            }
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    profile : state.profile
  }
}
export default connect(mapStateToProps)(App);
