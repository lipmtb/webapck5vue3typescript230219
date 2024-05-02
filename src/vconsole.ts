import VConsole from "vconsole";

export default ()=>{
    if(/Android|webOS|iPhone|iPad|iPod|/i.test(navigator.userAgent)){
        console.log("vconsole start");
        new VConsole();
    }
}