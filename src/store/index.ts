import Vuex, { ActionContext } from "vuex";

export type TUserInfoPayload = {
    userName: string;
    userId?: string;
}

export type TUserArea = {
    userInfo: TUserInfoPayload;
}

export type TApiKey = {
    key: string;
}

export type TPromptText = {
    text: string;
    turnLen: number;
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


const apiKeyArea = {
    namespaced: true,
    state: {
        key: null
    },
    mutations: {
        saveApiKey: (state: TApiKey, payload: TApiKey) => {
            state.key = payload.key;
        }
    },
    actions: {
        saveApiKeyAction: (context: ActionContext<TApiKey, any>, payload: TApiKey) => {
            if (payload?.key) {
                context.commit("saveApiKey", payload);
            }
        }
    },
    getters: {
        getApiKey: (state: TApiKey) => {
            return state?.key;
        }
    }
}

const longTextArea = {
    namespaced: true,
    state: {
        text: "",
        turnLen: 0
    },
    mutations: {
        setNewPrompt: (state: TPromptText, payload: TPromptText) => {
            state.text = payload.text;
            state.turnLen = payload.text.length;
        },
        clearPrompt: (state: TPromptText) => {
            state.text = "";
            state.turnLen = 0;
        }
    },
    actions: {
        setNewPromptAction: (context: ActionContext<TPromptText, any>, payload: TPromptText) => {
            if (payload?.text) {
                context.commit("setNewPrompt", payload);
            }
        },
        clearPromptAction: (context: ActionContext<TPromptText, any>) => {
            context.commit("clearPrompt");
        }
    },
    getters: {
        getPromptText: (state: TPromptText) => {
            return state?.text;
        },
        getTurnLen: (state: TPromptText) => {
            return state?.turnLen;
        }
    }
}
const store = new Vuex.Store({
    modules: {
        userArea,
        apiKeyArea,
        longTextArea
    }
})

export default store;