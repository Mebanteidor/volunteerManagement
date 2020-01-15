import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './Login.css';
import {TiLockClosedOutline} from 'react-icons/ti';
import {login} from '../Functions/UserFunctions';


class Login extends Component{
    constructor(){
        super()
        this.state = {
            email_id:'',
            password:'',
            errors:{}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email_id: this.state.email_id,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push(`/Profile`)
            }
        })
    }
    render(){
        return(
            <Container className={classes.Login}>
                <p>Log-in</p>
                <p><TiLockClosedOutline /></p>
                <Form className={classes.Form} onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        name="email_id"
                        placeholder="Enter email"
                        value={this.state.email_id}
                        onChange={this.onChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange} />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <div style={{ textAlign: 'center'}}>
                        <Button variant="primary" type="submit" style={{ width: '30%' }}>
                            Log In
                        </Button>
                    </div>
                    <a href="/Register" className="mt-3">Register</a>
                </Form>
            </Container>
        );
    }
    
}

export default Login;