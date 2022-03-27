import axios from "axios";



export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID S-5P9qkMpg4MZqzSnfPZk8zl8YnfN-mdck0jVeCkIKA'
      }
});