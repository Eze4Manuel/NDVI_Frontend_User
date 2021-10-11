import axios from "axios";
import helpers from '../core/func/Helpers';

// const uri = 'http://localhost:5000' // local

const uri = 'http://18.170.228.170:5000/api' // staging
// const uri = 'https://api2.appbuiltest.com/api/v1' // live
const Axios = axios.create({baseURL: uri, headers: helpers?.getHeaderAccessControl().headers });
export default Axios;

