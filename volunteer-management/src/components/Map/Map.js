import React, { Component } from 'react';
//import Axios from 'axios';
import ReactMapGL, { Marker } from 'react-map-gl';
//import MAP_STYLE from './map-style-basic-v8.json';

class Maps extends Component{
    state = {
        viewport:{
            width:1000,
            height:700,
            latitude:14.882195,
            longitude:75.57454,
            zoom:8
        }
    }
    
    // componentDidMount(){
    //     var location = "cdac electronic city bangalore india";
    //     Axios.get();
    // }
    render(){
        //console.log(process.env)
        return(
            <ReactMapGL 
                {...this.state.viewport} 
                onViewportChange={(viewport)=> this.setState({viewport})}
                mapStyle="mapbox://styles/mapbox/streets-v10"
                mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}>
                <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude} offsetLeft={-20} offsetTop={-10}>
                    <div>You are here</div>
                </Marker>
            </ReactMapGL>
        );
    }
}

export default Maps;
