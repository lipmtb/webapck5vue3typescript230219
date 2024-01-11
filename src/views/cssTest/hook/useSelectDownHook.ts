import { Ref, ref, onUnmounted } from "vue";

export const useSelectDownHook = (
  selectMenuRef: Ref<HTMLDivElement | undefined>
) => {
  const catchHeight = ref<number>(0);
  const menuDom = selectMenuRef.value;
  if (!menuDom) {
    return;
  }

  const onEnterSelect = () => {
    const ulWrapper = menuDom.querySelector(".menuList") as HTMLUListElement;
    if (!ulWrapper) {
      return;
    }
    ulWrapper.style.display = "block";

    // 计算高度
    if(catchHeight.value===0){
        const rect = ulWrapper.getBoundingClientRect();
        const height = rect.height;
        catchHeight.value=height;
    }
   
    ulWrapper.style.height = "0";
    ulWrapper.clientHeight;
    ulWrapper.style.height =  catchHeight.value + "px";
  };

  menuDom.addEventListener("mouseenter", onEnterSelect);

  const onLeaveDom = () => {
    const ulWrapper = menuDom.querySelector(".menuList") as HTMLUListElement;
    if (!ulWrapper) {
      return;
    }
    ulWrapper.style.display = "none";
  };
  menuDom.addEventListener("mouseleave", onLeaveDom);

  onUnmounted(() => {
    document.removeEventListener("mouseenter", onEnterSelect);
    document.removeEventListener("mouseleave", onLeaveDom);
  });
};
