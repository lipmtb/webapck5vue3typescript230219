export const useGetMaxDiffStringHook = () => {
  const getEqualIndex = (str: string, start: number, end: number) => {
    let equalIndex = null;
    let targetEnd = end;
    let tempEnd = end - 1;
    while (tempEnd >= start) {
      if (str[tempEnd] === str[targetEnd]) {
        equalIndex = tempEnd;
      }
      tempEnd--;
    }
    return equalIndex;
  };
  const getMaxDiffString = (str: string) => {
    const len = str.length;
    if (!str || len === 0) {
      return 0;
    }
    if (len === 1) {
      return 1;
    }
    let start = 0; // 临时最大子串起点
    let end = start; // 临时最大子串终点

    let currentMax = 1; // 初始最大1
    while (start <= end && start <= len - 1 && end <= len - 1) {
      let equalIndex = null;
      while (start <= end && end+1 <= len - 1) {
        equalIndex = getEqualIndex(str, start, end+1);
        if (equalIndex !== null) {
          break;
        }
        end++;
      }
      if (end - start+1 >= currentMax) {
        currentMax = end - start+1;
      }
      console.log("maxStrTemp", str.slice(start, end+1));
      if (equalIndex !== null) {
        start = equalIndex + 1 < len ? equalIndex + 1 : len - 1;
      }
      end++;
    }

    console.log("currentMaxcurrentMax", currentMax);
  };

  return {
    getMaxDiffString,
  };
};
