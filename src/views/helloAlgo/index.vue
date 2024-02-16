<template>
  <div class="helloAlgo">
    <h1>helloAlgo</h1>
    <div>
      <button @click="plainSortA(arr1)">最小值排序</button>
      <button @click="quickSort(arr1)">快速排序1</button>
      <button @click="quickSort(arr2)">快速排序2</button>
      <button @click="reverseQuickSort(arr1)">快速排序2</button>
      <button @click="bubbleSortArray(arr1)">冒泡排序</button>
      <button @click="bubbleSortArrayA(arr1)">冒泡排序a</button>
      <button @click="recurGetArrTest(arr1)">递归遍历数组</button>
      <button @click="linkNodeTackDeep()">递归遍历链表</button>
      <button @click="getLastNodeDeep()">递归遍历链表最后一个</button>
      <button @click="reverseLinkAndGetRoot()">链表逆置</button>
      <button @click="firstMidTrace()">先根遍历</button>
      <button @click="leftMidTrace()">中根遍历</button>
      <button @click="afterRootTrace()">后根遍历</button>
      <button @click="afterRootTrace()">后根遍历</button>
      <button @click="getFirstByMidAndAfterTreeTest()">
        中后输出先序，并构建输出二叉树
      </button>
      <button @click="largetFirstTrace()">广度优先遍历</button>
      <button @click="comparetTwoTree()">二叉树比较</button>
    </div>
    <div>
      <button @click="stringOnly()">字符串去重</button>
      <button @click="stringReverseWithGap()">字符串括号反转</button>
      <button @click="isReverseSameString()">回文串</button>
    </div>

    <div class="centerTree">
      <TreeShow :treeRoot="treeDataRef" :deepCount="0" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  plainSort,
  sortOlogn,
  bubbleSort,
  bubbleSortA,
  recurGetArr,
} from "./sort";
import { LinkNode } from "./link/linkNode";
import { recurLinkList, reverseLink, getLastNode } from "./link";
import {
  TreeNode,
  midFirstTrace,
  leftMidFirstTrace,
  afterLeftRightMidTrace,
  getFirstByMidAndAfterTree,
  getFirstByMidAndAfterBuildTree,
  getAfterByFirstMidTrace,
  compareTwoTreeAndReturnBoolean,
} from "./tree";
import TreeShow from "./tree/treeShow";
import { reverseSameTest } from "./util";

export default defineComponent({
  setup(this) {
    const arr1 = [5, 6, 8, 7, 4, 1, 3, 2, 9];
    const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    const plainSortA = (array: number[]) => {
      plainSort(array);
    };
    // 1.1快速排序
    const quickSort = (array: number[]) => {
      sortOlogn(array, 0, array.length - 1);
      console.log("result", array);
    };

    const reverseQuickSort = (array: number[]) => {
      sortOlogn(array, 0, array.length - 1, true);
      console.log("result", array);
    };

    // 1.2 冒泡排序
    const bubbleSortArray = (array: number[]) => {
      bubbleSort(array);
      // bubbleSort(array, true);
      console.log("result", array);
    };

    const bubbleSortArrayA = (array: number[]) => {
      bubbleSortA(array, true);
      console.log("resultA", array);
    };

    const rootNode = new LinkNode("1");
    const rootNodeA = new LinkNode("a");
    const rootNodeB = new LinkNode("b");
    const rootNodeC = new LinkNode("c");
    rootNode.next = rootNodeA;
    rootNodeA.next = rootNodeB;
    rootNodeB.next = rootNodeC;
    const linkNodeTackDeep = () => {
      recurLinkList(rootNode);
    };
    const recurGetArrTest = (arr: number[]) => {
      recurGetArr(arr, 0);
    };
    const getLastNodeDeep = () => {
      getLastNode(rootNode);
    };
    // 链表逆置
    const reverseLinkAndGetRoot = () => {
      recurLinkList(rootNode);
      const newNode: LinkNode[] | null = [];
      reverseLink(rootNode, newNode);
      rootNode.next = null;
      console.log("result", rootNode, newNode);
      if (newNode) {
        recurLinkList(newNode?.[0]);
      }
    };

    const tree = new TreeNode("A");
    const nodeB = new TreeNode("B");
    const nodeC = new TreeNode("C");
    const nodeD = new TreeNode("D");
    const nodeE = new TreeNode("E");
    const nodeF = new TreeNode("F");
    const nodeG = new TreeNode("G");
    const nodeH = new TreeNode("H");
    const nodeI = new TreeNode("I");
    const nodeJ = new TreeNode("J");
    const treeDataRef = ref(tree);
    tree.left = nodeB;
    tree.right = nodeC;
    nodeB.left = nodeD;
    nodeB.right = nodeE;
    nodeC.left = nodeF;
    nodeC.right = nodeG;
    nodeF.left = nodeH;
    nodeH.left = nodeI;
    nodeH.right = nodeJ;

    const firstMidTrace = () => {
      const arr: string[] = [];
      midFirstTrace(tree, arr);
      console.log("先根：", arr);
    };
    const leftMidTrace = () => {
      const arr: string[] = [];
      leftMidFirstTrace(tree, arr);
      console.log("中根：", arr);
    };
    const afterRootTrace = () => {
      const arr: string[] = [];
      afterLeftRightMidTrace(tree, arr);
      console.log("后根：", arr);
    };
    const getFirstByMidAndAfterTreeTest = () => {
      const result = [];
      // getFirstByMidAndAfterTree("FCGADBE", "FGCDEBA", result);
      // console.log(result.join(""));
      // 中后序还原二叉树
      // const root = getFirstByMidAndAfterBuildTree("FCGADBE", "FGCDEBA");
      // 前中序还原二叉树
      const root = getAfterByFirstMidTrace("ACFGBDE", "FCGADBE"); //  "FGCDEBA"
      afterLeftRightMidTrace(root, result);
      console.log(result.join(""));
      treeDataRef.value = root;
      return root;
    };

    const testStr1 = "aaabbbccddddddddeeefghiiiij";
    const stringOnly = () => {
      const result = [];
      const strArray = testStr1.split("");
      strArray.forEach((strItem) => {
        if (!result[0] || result[result.length - 1] !== strItem) {
          result.push(strItem);
        }
      });
      console.log("result", result.join(""));
      return result.join("");
    };

    const testStrKuo = "1(32)4(kj(hgfe(dcb)a)i)";

    const splitStrByGap = (tempStr: string) => {
      const splitResultArray = [];
      let stack = [];
      const sourceArray = tempStr.split("");
      sourceArray.forEach((temp, index) => {
        stack.push(temp);
        if (stack[0] === "(") {
          if (
            temp === ")" &&
            stack.filter((item) => item === "(").length ===
              stack.filter((item) => item === ")").length
          ) {
            splitResultArray.push([...stack]);
            stack = [];
          }
        } else {
          splitResultArray.push([temp]);
          stack = [];
        }
      });
      return splitResultArray;
    };
    const reverseSingle = (str: string) => {
      if (str.indexOf("(") > -1) {
        if (str[0] === "(" && str[str.length - 1] === ")" && str.length > 2) {
          const innerStr = str.slice(1, str.length - 1);
          if (innerStr.indexOf("(") > -1) {
            const resultArray = [...splitStrByGap(innerStr)];
            return [...resultArray.reverse()]
              .map((item) => {
                return reverseSingle(item.join(""));
              })
              .join("");
          } else {
            return innerStr.split("").reverse().join("");
          }
        } else {
          const resultArray = [...splitStrByGap(str)];
          return resultArray
            .map((item) => {
              return reverseSingle(item.join(""));
            })
            .join("");
        }
      } else {
        return str;
      }
    };
    // 分治法字符串的反转
    const stringReverseWithGap = () => {
      console.log(reverseSingle(testStrKuo));
    };

    const largetTraceFirst01 = (nodeList: TreeNode[]) => {
      if (!nodeList?.length) {
        return;
      }

      let childList = [];
      for (let i = 0; i < nodeList.length; i++) {
        console.log(nodeList[i]);
        if (nodeList[i].left) {
          childList = [...childList, nodeList[i].left];
        }

        if (nodeList[i].right) {
          childList = [...childList, nodeList[i].right];
        }
      }
      if (childList.length) {
        largetTraceFirst01(childList);
      }
    };
    const largetFirstTrace = () => {
      const tree = getFirstByMidAndAfterTreeTest();
      largetTraceFirst01([tree]); // ACBFGDE
    };
    const comparetTwoTree = () => {
      const rootA = getAfterByFirstMidTrace("ACFGBDE", "FCGADBE"); //  "FGCDEBA"
      const rootB = getAfterByFirstMidTrace("ACFGBDE", "FCGADBE"); //  "FGCDEBA"
      const rootC = getAfterByFirstMidTrace("ACFBDE", "FCADBE"); 
      const isSame=compareTwoTreeAndReturnBoolean(rootA,rootB);
      const isSame2=compareTwoTreeAndReturnBoolean(rootA,rootC);
      console.log("isSameisSameisSameisSame",isSame,isSame2);
    };
    const isReverseSameString=()=>{
     const res= reverseSameTest("123456,,76543210");
     console.log("reverse is same",res);
    }
    return {
      plainSortA,
      quickSort,
      arr1,
      arr2,
      reverseQuickSort,
      bubbleSortArray,
      bubbleSortArrayA,
      linkNodeTackDeep,
      recurGetArrTest,
      reverseLinkAndGetRoot,
      getLastNodeDeep,
      firstMidTrace,
      leftMidTrace,
      afterRootTrace,
      getFirstByMidAndAfterTreeTest,
      treeDataRef,
      stringOnly,
      stringReverseWithGap,
      largetFirstTrace,
      comparetTwoTree,
      isReverseSameString,
    };
  },
  method() {},
  components: {
    TreeShow,
  },
});
</script>

<style lang="less">
.centerTree {
  width: 400px;
  margin: 10px auto;
}
</style>
