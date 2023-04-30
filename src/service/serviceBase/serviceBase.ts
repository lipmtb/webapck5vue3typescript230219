import axios from 'axios'
export const ServerBaseUrl = "http://localhost:82";

const serviceBaseAxios = axios.create({
    baseURL: ServerBaseUrl,
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

serviceBaseAxios.interceptors.request.use(config => {
    const userInfoStr = localStorage.getItem("userInfo");
    console.log("请求拦截加入凭证中", userInfoStr);
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
        console.log("登录失效，请重新登录", error, error.response.status);
    }
    return Promise.reject(error?.response);
})

export default serviceBaseAxios;