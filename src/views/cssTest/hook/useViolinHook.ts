import { Ref, ref, onUnmounted } from "vue";

export const useViolinHook = (violinRef: Ref<HTMLDivElement | undefined>) => {
  const violinDom = violinRef.value;
  if (!violinDom) {
    return;
  }

  violinDom.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    let clickIndex = target.dataset.index;
    console.log("targettarget", clickIndex);
    if (target.tagName === "H2" && clickIndex) {
      const menuList = target.nextElementSibling as HTMLElement;
      if (!menuList) {
        return;
      }
      const isCollapse=menuList.dataset.isCollapse;
      console.log("menuList isCollapse", clickIndex, menuList.dataset.isCollapse);
      if(isCollapse==="1"){
        menuList.style.transition = "none";
        menuList.style.height = "auto";
        const menuRect = menuList.getBoundingClientRect();
        const height = menuRect.height;
        menuList.style.height = "0";
        violinDom.clientHeight;
        menuList.style.transition = "height 0.3s linear";
        menuList.style.height = `${height}px`;
      }else{
        menuList.style.height = "0";
      }
      menuList.setAttribute("data-is-collapse",isCollapse==="1"?"0":"1");
    

      const allMenuTitleList: HTMLElement[] = Array.from(
        violinDom.querySelectorAll(".menuArea .menu-title")
      ) as HTMLElement[];
      allMenuTitleList.forEach((menuTitle, index) => {
        if (menuTitle.dataset.index === clickIndex) {
          return;
        }
        const menuUlDom = menuTitle.nextElementSibling as HTMLUListElement;
        if (!menuUlDom) {
          return;
        }
        menuUlDom.setAttribute("data-is-collapse","1");
        menuUlDom.style.height = "0";
      });
    }
  });

  onUnmounted(() => {
    // document.removeEventListener("mouseenter", onEnterSelect);
    // document.removeEventListener("mouseleave", onLeaveDom);
  });
};
