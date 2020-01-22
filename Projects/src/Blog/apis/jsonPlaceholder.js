import axios from 'axios';

// create the base url for JSONplaceholder api 
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});