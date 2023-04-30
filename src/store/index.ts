import Vuex, { ActionContext } from "vuex";

export type TUserInfoPayload = {
    userName: string;
    userId?: string;
}

export type TUserArea = {
    userInfo: TUserInfoPayload;
}

const userArea = {
    namespaced: true,
    state: {
        useInfo: null
    },
    mutations: {
        saveUser: (state: TUserArea, payload: TUserInfoPayload) => {
            state.userInfo = {
                userName: payload.userName,
                userId: payload.userId
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
        },
        getUserId: (state: TUserArea) => {
            return state?.userInfo?.userId;
        }
    }
}

const store = new Vuex.Store({
    modules: {
        userArea
    }
})

export default store;