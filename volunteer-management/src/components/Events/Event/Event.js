import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './Event.css';

const event = (props) => {

        return(
            <div className={classes.Event}>
                <Card style={{ width: '18rem'}} className={classes.Card} >
                    {/* <Card.Img variant="top" src="holder.js/100px180" alt="hello"/> */}
                    <Card.Body className="d-flex flex-column" >
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.body}
                        </Card.Text>
                        <Button className={classes.Mybutton}>Learn More</Button> 
                    </Card.Body>
                </Card>
            </div>
        );  
    
}

export default event;