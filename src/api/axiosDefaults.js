import axios from "axios"

axios.defaults.baseURL = 'https://drf-api-wt-e8d04bb58926.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;