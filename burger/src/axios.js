import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-5faf6-default-rtdb.firebaseio.com/'
});

export default instance;