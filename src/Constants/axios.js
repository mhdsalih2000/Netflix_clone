import axios from "axios";
import {Base_url} from './const'

const instance = axios.create({
    baseURL:Base_url
})

export default instance