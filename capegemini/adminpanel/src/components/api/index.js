import axios from "axios"
const API = axios.create({ baseURL: "http://localhost:5000/"})
API.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const adminsignin = (formdata)=> API.post('/admin/signin',formdata)
export const adminsignup = (formdata) => API.post('/admin/signup', formdata)
export const getusers = () => API.get('/data/users')