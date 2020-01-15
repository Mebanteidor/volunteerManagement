import React, { Component } from 'react';
import classes from './Home.css'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
//import axios from 'axios';
import Event from '../Events/Event/Event';
import Allevents from '../Functions/EventFunctions';


class Home extends Component {
    state = {
        events: []
    } 
    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then (res => {
        //             console.log('json : '+res.data)
        //             const events = res.data;//.slice(0,12);
        //             this.setState({events: events})
        //             //console.log(response);
        //         });
        
        Allevents().then(res=>{
            const events = res.data;
            //console.log('events :'+events)
            this.setState({ events: events });
        }).catch(err=>{
            console.log('Error from Home: '+err)
        })
        
    }
    
    render(){
        const events = this.state.events.map(event =>{
            return <Event title={event.eid} body={event.description} key={event.eid}/>;
        })
        return (
            <div className={classes.Home}>
                <div className={classes.GridOne}>
                    <h1>Volunteer Management</h1>
                    <hr />
                    <Button variant="light" size="lg">Get Started</Button>        
                </div>
                <Container className={classes.Cards}>
                    {events}
                </Container>
            </div>
        )
    }
}

export default Home;