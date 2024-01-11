// 11 11 11 10 00

import { TreeNode } from "../../helloAlgo/tree";

const getSum = (currentStr: string) => {
  const arr = currentStr.trim().split("").filter(Boolean);
  const sum = arr.reduce((prev, cur, index) => {
    if (cur === "1") {
      return prev * 2;
    } else {
      return prev - index - 1;
    }
  }, 10);
  return sum;
};

const testHasNextTrace = (resultString: string, target: number) => {
  if (!resultString) {
    return true;
  }
  const len = resultString.length;
  if (len >= 10) {
    return false;
  }
  const sum = getSum(resultString);

  const maxSum = sum * 2 ** (10 - len);
  const minSum = sum - ((len + 1 + 10) / 2) * (10 - len);

  if (minSum > target || maxSum < target) {
    return false;
  }
  return true;
};

export const useGetSumHundredHook = () => {
  const traceTreeToDeep = (currentLevel: number, resultString: string) => {
    if (currentLevel >= 10) {
      if (getSum(resultString) === 100) {
        console.log("resultString", resultString);
      }
      return;
    }
    if (testHasNextTrace(resultString, 100)) {
      traceTreeToDeep(currentLevel + 1, resultString + "0");
      traceTreeToDeep(currentLevel + 1, resultString + "1");
    }
  };

  const execGetTrace = () => {
    // const root = new TreeNode("root");
    traceTreeToDeep(0, "");
  };

  return {
    traceTreeToDeep,
    testHasNextTrace,
    execGetTrace,
  };
};
