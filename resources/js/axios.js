import axios from "axios";

axios.defaults.baseURL = "https://laravel-vue-sb-admin.app/api/";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
