import serviceBaseAxios from "./serviceBase/serviceBase";

export type LoginParam = {
    username: string;
    userpassword: string;
}

export type TLoginResponse = {
    errMsg: string;
    errCode: number;
    userInfo: {
        userName: string;
        userId: string;
    },
    jjccToken: string;
}

const login = (loginParam: LoginParam = { username: "", userpassword: "" }) => {
    return serviceBaseAxios.post<LoginParam, TLoginResponse>(
        '/login',
        {
            ...loginParam
        }
    )
}

export default login;

