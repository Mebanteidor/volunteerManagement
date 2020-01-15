// import React from 'react';
// import { Container } from 'react-bootstrap';
// import classes from './Registration.css';
// import { TiLockClosedOutline } from 'react-icons/ti';

import React,{Component} from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './Registration.css';
import {register} from '../Functions/UserFunctions';
import { TiPen } from 'react-icons/ti';

class Registration extends Component{
    state ={
            name: '',
            address: '',
            //age: '',
            contact: '',
            email_id: '',
            password: '',
            role_id: 2,
            disabled: true,
            passport:'',
            errors: {}
    }

    setChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitData = event =>{
        event.preventDefault();
        //const formData = new FormData();
        const newUser = {
            name:this.state.name,
            address: this.state.address,
            //age: this.state.age,
            contact: this.state.contact,
            email_id: this.state.email_id,
            password: this.state.password,
            role_id: this.state.role_id,
            passport: this.state.passport
        }
        
        register(newUser).then(res=>{
            this.props.history.push(`/login`);
        })
    }

    // selectChanged = event =>{
    //     let stateCopy = {...this.state};
    //     const roleName = event.target.value;
    //     if (roleName==="Organization") {
    //         stateCopy.role_id = 2
    //         stateCopy.disabled = true
    //         stateCopy.age=''
    //     } else if(roleName==="Volunteer"){
    //         stateCopy.role_id = 3
    //         stateCopy.disabled = false
    //     }
    //     this.setState({
    //         role_id:stateCopy.role_id,
    //         disabled:stateCopy.disabled
    //     });
    //     //console.log('from selectChanged'+stateCopy.disabled);
    // }
    fileSelectedHandler = event =>{
        this.setState({
            passport:event.target.files[0]
        })
    }

    render(){
        //console.log(this.state.disabled)
        //console.log('hello'+this.state.passport)
        return (
            <Container className={classes.Register}>

                <p>Registration Form</p>
                <p><TiPen /></p>
                <Form className={classes.Form} onSubmit={this.submitData}>
                    <Form.Group controlId="controlSelect1" onChange={this.selectChanged}>
                        <Form.Label>Register as: </Form.Label>
                        <Form.Control as="select">
                            <option>Organization</option>
                            <option>Volunteer</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicname" style={{ marginTop: '10px' }}>
                        <Form.Label>Organization Name/Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="name"
                            placeholder="Enter full name" 
                            value={this.state.name}
                            onChange={this.setChange}/>
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicage">
                        <Form.Label>Age</Form.Label>
                        <Form.Control 
                            type="number" 
                            name="age"
                            placeholder="Enter your age" 
                            value={this.state.age}
                            disabled={(this.state.disabled)?'disabled':''}
                            onChange={this.setChange}/>
                    </Form.Group> */}
                    <Form.Group controlId="formBasicaddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="address"
                            placeholder="Full Address" 
                            value={this.state.address}
                            onChange={this.setChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasiccontact">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="contact"
                            placeholder="Mob/Landline no" 
                            value={this.state.contact}
                            onChange={this.setChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email_id"
                            placeholder="Enter email" 
                            value={this.state.email_id}
                            onChange={this.setChange}/>
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
                            onChange={this.setChange}/>

                    </Form.Group>

                    <h6 style={{ marginBottom: '10px' ,fontWeight:'400'}}>Upload Passport size photo</h6>
                    <div className="form-group" >
                        <input 
                            type="file" 
                            className="form-control-file" 
                            id="passport"
                            name="passport" 
                            //value={this.state.passport}
                            onChange={this.fileSelectedHandler} />
                    </div>
{/*
                    <h6 style={{ marginBot tom: '10px' ,fontWeight:'400'}}>Upload any Govt. id proof</h6>
                    <div className="form-group">
                        <input 
                            type="file" 
                            className="form-control-file" 
                            id="govtId" 
                            name="idproof"
                            onChange={this.fileSelectedHandler} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}> */}
                        <Button variant="primary" type="submit" style={{ width: '30%' }}>
                            Submit
                        </Button>
                    {/* </div> */}

                </Form>
            </Container>
        );
    }
    
}

export default Registration;
