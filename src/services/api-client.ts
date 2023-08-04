import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'7877a09185c74deabd409bc057b8e0d7'
    }
})

