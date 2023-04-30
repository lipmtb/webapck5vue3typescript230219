import serviceBaseAxios from "./serviceBase/serviceBase";


const testLogin = () => {
    return serviceBaseAxios.get(
        '/isLogin'
    )
}

export default testLogin;

