import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Success from '../Pages/Success'
import NoMatchPage from '../Pages/404'
import FormAdd from '../Components/TodoComponents/FormAdd'

import { connect } from 'react-redux'

class Router extends React.Component {
  render() {
    const { isLogin } = this.props
    return (
      <BrowserRouter>
        <div>
          <ul>
            {
              (isLogin) &&
              <li><Link to="/">Home</Link></li>
            }
            <li><Link to="/login" >Login</Link></li>
            {
              (isLogin) &&
              <li><Link to="/todo">TODO</Link></li>
            }
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/todo" component={FormAdd} />
            <Route exact path="/success" component={Success} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = state => ({
  isLogin: state.login.isLogin
})
export default connect(mapStateToProps)(Router)