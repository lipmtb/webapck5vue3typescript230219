import Vuex, { ActionContext } from "vuex";


export type TUserArea = {
    userInfo: {
        userName: string
    }
}
export type TUserInfoPayload = {
    userName: string;
}

const userArea = {
    namespaced: true,
    state: {
        useInfo: null
    },
    mutations: {
        saveUser: (state: TUserArea, payload: TUserInfoPayload) => {
            state.userInfo = {
                userName: payload.userName
            }
        }
    },
    actions: {
        saveUserAction: (context: ActionContext<TUserArea, any>, payload: TUserInfoPayload) => {
            if (payload?.userName) {
                context.commit("saveUser", payload);
            }
        }
    },
    getters: {
        getUserName: (state: TUserArea) => {
            return state?.userInfo?.userName;
        }
    }
}

const store = new Vuex.Store({
    modules: {
        userArea
    }
})

export default store;