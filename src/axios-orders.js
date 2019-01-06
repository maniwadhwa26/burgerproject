import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-pro-3bd50.firebaseio.com/'
})

export default instance;