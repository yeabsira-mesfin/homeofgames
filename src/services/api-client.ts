import axios from 'axios'

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '8dcd081f629b4fbb88664570434f90a0'
    }
})