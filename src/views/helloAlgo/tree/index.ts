import { after } from "node:test";

export class TreeNode {
    data;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(data: string) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export const midFirstTrace = (root: TreeNode | null, result: string[]) => {
    if (!root) {
        return;
    }
    if (!result) {
        result = [];
    }
    result.push(root.data);
    midFirstTrace(root.left, result);
    midFirstTrace(root.right, result);

}

export const leftMidFirstTrace = (root: TreeNode | null, result: string[]) => {
    if (!root) {
        return;
    }
    if (!result) {
        result = [];
    }
    leftMidFirstTrace(root.left, result);
    result.push(root.data);
    leftMidFirstTrace(root.right, result);
}


export const afterLeftRightMidTrace = (root: TreeNode | null, result: string[]) => {
    if (!root) {
        return;
    }
    if (!result) {
        result = [];
    }
    afterLeftRightMidTrace(root.left, result);
    afterLeftRightMidTrace(root.right, result);
    result.push(root.data);
}


const getAfterStrByMidHalf = (midTemp: string, afterStr: string) => {

    const afterArray = afterStr.split("");
    let startIndex = -1;
    let endIndex = -1;
    afterArray.forEach((item, index) => {
        if (midTemp.includes(item)) {
            if (startIndex === -1) {
                startIndex = index;
                endIndex = index;
            } else {
                endIndex = index;
            }
        }
    });
    if(startIndex===-1){
        return "";
    }
    return afterStr.slice(startIndex, endIndex + 1);
}


// 根据中序和后序返回先序
export const getFirstByMidAndAfterTree = (midStr: string, afterStr: string, result: string[]) => {
    const root = afterStr[afterStr.length - 1];
    result.push(root);
    const newRootIndex = midStr.indexOf(root);
    if (newRootIndex !== -1) {
        const midLeftStr = midStr.slice(0, newRootIndex);
        const afterLeftStr = getAfterStrByMidHalf(midLeftStr, afterStr);
        if (midLeftStr && afterLeftStr) {
            getFirstByMidAndAfterTree(midLeftStr, afterLeftStr, result);
        }

        if (newRootIndex + 1 <= midStr.length - 1) {
            const midRightStr = midStr.slice(newRootIndex + 1, midStr.length);
            const afterRightStr = getAfterStrByMidHalf(midRightStr, afterStr);
            if (midRightStr && afterRightStr) {
                getFirstByMidAndAfterTree(midRightStr, afterRightStr, result);
            }
        }
    }

}

// 根据中序和后序，并构建二叉树
export const getFirstByMidAndAfterBuildTree = (midStr: string, afterStr: string) => {

    const currentRootData=afterStr[afterStr.length-1];
    const midIndex=midStr.indexOf(currentRootData);
    const currentRoot=new TreeNode(currentRootData);
  
    // 左子树新中，后
    const leftMidStr=midStr.slice(0,midIndex);
    const leftAfterStr=afterStr.split("").filter(item=>leftMidStr.includes(item)).join("");

    if(leftMidStr.length&&leftAfterStr.length){
        currentRoot.left= getFirstByMidAndAfterBuildTree(leftMidStr,leftAfterStr);
    }
 
    // 右子树新中，后
    const rightMidStr=midStr.slice(midIndex+1,midStr.length);
    const rightAfterStr=afterStr.split("").filter(item=>rightMidStr.includes(item)).join("");

    if(rightMidStr.length&&rightAfterStr.length){
       currentRoot.right= getFirstByMidAndAfterBuildTree(rightMidStr,rightAfterStr);
    }

    return currentRoot;
}

export const getAfterByFirstMidTrace=(firstStr:string,midStr:string)=>{
    if(!firstStr||!midStr){
        return;
    }
    const rootData=firstStr[0];
    const currentRoot=new TreeNode(rootData);

    const midIndex=midStr.indexOf(rootData);


    // 左子树
    let leftMidStr=midStr.slice(0,midIndex);
    let leftFirstArr=firstStr.slice(1).split("");
    let startLeftIndex=0;
    let stop=false;
    leftFirstArr.forEach(item=>{
        if(stop){
            return;
        }
        if(leftMidStr.includes(item)&&leftMidStr.includes(leftFirstArr[startLeftIndex+1])){
            
            startLeftIndex++;
        }else{
            stop=true;
        }
    });
    let leftFirstStr=leftFirstArr.slice(0,startLeftIndex+1).join("");

    if(leftFirstStr&&leftMidStr){
        currentRoot.left=getAfterByFirstMidTrace(leftFirstStr,leftMidStr) as TreeNode;
    }

    console.log("left result",leftFirstStr,leftMidStr);
    // 右子树
    let rightMidStr=midStr.slice(midIndex+1);
    let rightFirstStr="";
    let len=rightMidStr.length;
    for(let i=0;i<leftFirstArr.length-len+1;i++){
        if(rightFirstStr){
            return;
        }
        let tempArr=leftFirstArr.slice(i,i+len);
        if(tempArr.every(item=>rightMidStr.includes(item))){
            rightFirstStr=tempArr.join("");
        }
    }
    console.log("right result",rightFirstStr,rightMidStr);
    if(rightFirstStr&&rightMidStr){
        currentRoot.right=getAfterByFirstMidTrace(rightFirstStr,rightMidStr) as TreeNode ;
    }


    return currentRoot;
}