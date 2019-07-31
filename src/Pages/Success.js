import React from 'react'
import { connect } from 'react-redux'

class Success extends React.Component {
    render() {
        const { location, isLogin } = this.props
        const params = new URLSearchParams(location.search)
        const email = params.get('email')
        return (
            <div>
                {
                    (isLogin) &&
                    <h2>Xin chào {email}</h2>
                }
                {
                    (!isLogin) &&
                    <h2>Login failed</h2>
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isLogin: state.login.isLogin
})
export default connect(mapStateToProps)(Success)