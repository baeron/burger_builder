import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-71ab7.firebaseio.com/'
});

export default instance;