//put all code related to Axios configuration in here
import axios from 'axios';

//customize making requests to a specific URL with headers
export default axios.create({
  baseURL: 'https://images-api.nasa.gov',
  headers: {
    Authorization: 'API-key fLIfZZeWjAhPawnoL8lIyubp9JeOYPSdvJUU4jYk'
  }
})
