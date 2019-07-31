import React from 'react'
import { connect } from 'react-redux'
import { login } from '../Redux/Actions'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLogin !== this.props.isLogin) {
            this.props.history.push({
                pathname: "/success",
            })
        }
    }

    fillEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    fillPass = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    login = () => {
        const { onLogin } = this.props
        const { email, password } = this.state
        onLogin(email, password)
    }

    render() {
        const { error } = this.props
        return (
            <div>
                <h2> Login </h2>
                <div className="item">
                    <li>
                        <input type="text" placeholder="  Email..." onChange={this.fillEmail}></input>
                        <br></br>
                    </li>
                    <li>
                        <input type="password" placeholder="  password..." onChange={this.fillPass}></input>
                    </li>
                    <li>
                        <button type="button" onClick={this.login}>Sign In</button>
                    </li>
                    {
                        error &&
                        <p style={{ color: 'red' }}>
                            {error}
                        </p>
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isLogin: state.login.isLogin,
    error: state.login.error
})
const mapDispatchToProps = dispatch => ({
    onLogin: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)