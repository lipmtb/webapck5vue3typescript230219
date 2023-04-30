import serviceBaseAxios from "./serviceBase/serviceBase";

export type TRegistParam = {
    username?: string;
    userpassword?: string;
}

const regist = (reqParams: TRegistParam = {}) => {
    return serviceBaseAxios.post(
        '/regist',
        {
            ...reqParams
        }
    )
}

export default regist;

