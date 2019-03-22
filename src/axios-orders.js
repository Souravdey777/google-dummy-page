import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-777.firebaseio.com'
});

export default instance;
