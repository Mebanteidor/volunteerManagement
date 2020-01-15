import React from 'react';
//import {Container} from 'react-bootstrap';
import {NavBar} from '../NavBar/NavBar';
//import classes from './Layout.css';

const layout = (props) => (
    <React.Fragment>
        <NavBar />
        {props.children}
    </React.Fragment>
);

export default layout;