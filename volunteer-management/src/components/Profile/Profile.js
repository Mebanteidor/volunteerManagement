import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            email_id: '',
            errors: {}
        }
    }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            name: decoded.name,
            address: decoded.address,
            email_id: decoded.email_id
        })
        console.log(token)
    }
    
    render() {
        return (
            <div className="container" style={{marginTop: '60px'}}>
                <h1>Welcome {this.state.name} from {this.state.address}</h1>
                <h3>Email: {this.state.email_id}</h3>
                <hr/>
                <a href="" onClick={this.logOut.bind(this)}>
                    Logout
                </a>
            </div>
        )
    }
}

export default Profile