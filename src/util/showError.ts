const initError = () => {
    const errorDom = document.createElement("div");
    errorDom.className = "errorTop";
    errorDom.innerHTML = "";
    document.body.appendChild(errorDom);
}

const showError = (msg: string, delay: number = 3000) => {
    const queryDom: HTMLDivElement = document.querySelector(".errorTop") as HTMLDivElement;
    if (queryDom) {
        queryDom.innerHTML = "";
        queryDom.innerText = msg;
        queryDom.classList.add("movingDown");
        setTimeout(() => {
            queryDom.classList.remove("movingDown");
        }, delay)
    }
}

export { initError, showError };