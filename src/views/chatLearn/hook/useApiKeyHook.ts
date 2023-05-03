import { ref } from "vue";
import { useStore } from "vuex";

const useApiKeyHook = () => {
    const store = useStore();
    const apiKey = ref<string>();
    const apiKeyVisible = ref<boolean>(false);
    const setApiKey = (key: string) => {
        apiKey.value = key;
    }
    const openApiModal = () => {
        apiKeyVisible.value = true;
    }
    const closeApiModal = () => {
        apiKeyVisible.value = false;
    }
    const onApiConfirm = () => {
        if (!apiKey?.value) {
            return;
        }
        store.dispatch("apiKeyArea/saveApiKeyAction", {
            key: apiKey.value
        })
        apiKeyVisible.value = false;
    }
    const onApiReset = () => {
        apiKey.value = '';
    }
    return {
        apiKey,
        setApiKey,
        apiKeyVisible,
        openApiModal,
        closeApiModal,
        onApiReset,
        onApiConfirm
    }
}

export default useApiKeyHook;