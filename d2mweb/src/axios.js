import axios from "axios";

const instance  = axios.create({
    baseURL : 'http://localhost:5001/d2mmall-1217c/us-central1/api'
    // https://us-central1-d2mmall-1217c.cloudfunctions.net/api
    // 'http://localhost:5001/d2mmall-1217c/us-central1/api'
})
export default instance;