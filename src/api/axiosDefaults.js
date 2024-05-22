import axios from "axios"

axios.defaults.baseURL = 'https://8000-dym077-drfapi-5irdrexgzy1.ws-eu114.gitpod.io'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;