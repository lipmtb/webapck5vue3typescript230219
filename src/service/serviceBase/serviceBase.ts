import axios from 'axios'
export const ServerBaseUrl = "http://207.246.78.164:82";

const serviceBaseAxios = axios.create({
    baseURL: ServerBaseUrl,
    timeout: 20000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

serviceBaseAxios.interceptors.request.use(config => {
    const userInfoStr = localStorage.getItem("userInfo");
    // 请求头带上token
    if (userInfoStr) {
        const userInfo = JSON.parse(userInfoStr);
        config.headers.Authorization = "Bearer " + userInfo?.ticket;
    }
    return config;
}, error => {
    return Promise.reject(error);
})

serviceBaseAxios.interceptors.response.use(response => {
    return response?.data;
}, error => {
    if (error.response && error.response.status === 401) {
        //退出登录,清除登录信息
        localStorage.removeItem("userInfo");
        //重新登录router.history.push('/login?redirectUrl=currentRoute.path')
    }
    return Promise.reject(error?.response);
})

export default serviceBaseAxios;