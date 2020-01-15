import axios from 'axios';

const allevents = () => {
    return axios
        .get('events/')
        .then(res => {
            console.log("Got all records"+ res);
            return res;
        })
}

export default allevents;


