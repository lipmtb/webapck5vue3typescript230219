import {  ref, Ref, watchEffect } from "vue";

const useScrollHeight = (
    footerSendRef: Ref<HTMLDivElement | undefined>,
    defaultPageRef: Ref<HTMLDivElement | undefined>
) => {
    const calcScrollHeight = ref<number>(0);
    watchEffect(() => {
        if (!footerSendRef?.value) {
            calcScrollHeight.value = 0;
        }
        const footerRect = footerSendRef?.value?.getBoundingClientRect?.();
        const dfRef = defaultPageRef?.value?.getBoundingClientRect?.();
        calcScrollHeight.value = Number(footerRect?.top || 0) - Number(dfRef?.top || 0);
    })
    return {
        calcScrollHeight
    }
}

export default useScrollHeight;