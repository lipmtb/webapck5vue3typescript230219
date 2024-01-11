import { Ref, onUnmounted } from "vue";

export const useCircleMoveHook = (
  circleRef: Ref<HTMLDivElement | undefined>
) => {
  const clickHandle = (event: MouseEvent) => {
    const { clientX, clientY } = event || {};
    if (!circleRef.value) {
      return;
    }
    const domTarget: HTMLDivElement = circleRef.value;
    const rect = domTarget.getBoundingClientRect();
    console.log("domTargetdomTarget",domTarget,clientX,clientY,rect);
    domTarget.style.setProperty("--x", String(clientX - (rect.width / 2))+"px");
    domTarget.style.setProperty("--y", String(clientY - (rect.height / 2))+"px");
  };
  document.addEventListener("click", clickHandle);

  onUnmounted(() => {
    document.removeEventListener("click", clickHandle);
  });
};
