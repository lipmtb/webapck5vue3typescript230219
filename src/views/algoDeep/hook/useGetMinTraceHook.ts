import { ref, onMounted } from "vue";

type TStageItem = {
  isSelected: boolean;
  data: number;
  key: string;
};
type TRowData = {
  key: string;
  subList: TStageItem[];
};
export const useGetMinTraceHook = () => {
  const stageDataList = ref<TRowData[]>([]);
  onMounted(() => {
    stageDataList.value = Array.from({ length: 4 }, (_item, index) => {
      return {
        key: String.fromCharCode(65 + index),
        subList: Array.from({ length: 6 }, (_item, subIndex) => {
          return {
            isSelected: Boolean(
              (index === 0 && subIndex === 0) || (index === 3 && subIndex === 5)
            ),
            data: index * subIndex,
            key: String.fromCharCode(97 + subIndex),
          };
        }),
      };
    });
  });

  const getDataByIndex = (originList: TRowData[], i: number, j: number) => {
    return originList?.[i]?.subList?.[j]?.data;
  };

  // 最短路径和（动态规划）
  const deepGetMin: (
    originList: TRowData[],
    i: number,
    j: number,
    map: Map<string, number>
  ) => number = (
    originList: TRowData[],
    i: number,
    j: number,
    map: Map<string, number>
  ) => {
    if (map && map.has(`${i}-${j}`)) {
      console.log("index");
      return map.get(`${i}-${j}`) || 0;
    }
    if (i < 0 || j < 0) {
      return 0;
    }
    if (i === 0 && j === 0) {
      return getDataByIndex(originList, i, j);
    }
    if (i === 0 && j > 0) {
      return (
        deepGetMin(originList, i, j - 1, map) + getDataByIndex(originList, i, j)
      );
    }

    if (j === 0 && i > 0) {
      return (
        deepGetMin(originList, i - 1, j, map) + getDataByIndex(originList, i, j)
      );
    }

    const leftGetResult = deepGetMin(originList, i - 1, j, map);
    const topGetResult = deepGetMin(originList, i, j - 1, map);
    if (leftGetResult < topGetResult) {
      return leftGetResult + getDataByIndex(originList, i, j);
    }

    return topGetResult + getDataByIndex(originList, i, j);
  };
  // 计算最短的路径的和f(i,j)=min( f(i-1,j) , f(i,j-1) )+  getDataByIndex(originList,i,j)
  const calcMinTrace = () => {
    if (!stageDataList?.value?.length) {
      return;
    }

    const originList = stageDataList?.value;
    const res = deepGetMin(originList, 3, 5, new Map());
    console.log("resultArrresultArr", res);
  };

  /** 每个位置的最小和记录 */
  const makeTraceCountTable = (originList: TRowData[]) => {
    const xRowLen = originList.length;
    const yLen = originList?.[0].subList.length;
    const resultMinSumTable = Array.from({ length: xRowLen }, () =>
      Array.from({ length: yLen }, () => 0)
    );
    const map = new Map<string, number>();
    for (let i = 0; i < xRowLen; i++) {
      for (let j = 0; j < yLen; j++) {
        const result = deepGetMin(originList, i, j, map);
        resultMinSumTable[i][j] = result;
        map.set(`${i}-${j}`, result);
      }
    }
    console.log("map", map);
    return resultMinSumTable;
  };

  const getMinPathRowColIndex = (
    i: number,
    j: number,
    table: number[][],
    originList: TRowData[]
  ) => {
    const result: { x: number; y: number }[] = [];
    let currentIndex = { x: i, y: j };
    while (currentIndex.x >= 0 && currentIndex.y >= 0) {
      result.push({ ...currentIndex });
      const nextSum =
        table[currentIndex.x][currentIndex.y] -
        getDataByIndex(originList, currentIndex.x, currentIndex.y);
      if (
        (currentIndex.x - 1 >= 0 &&
          table[currentIndex.x - 1][currentIndex.y] === nextSum) ||
        currentIndex.y === 0
      ) {
        currentIndex.x = currentIndex.x - 1;
      } else if (
        (currentIndex.y - 1 >= 0 &&
          table[currentIndex.x][currentIndex.y - 1] === nextSum) ||
        currentIndex.x === 0
      ) {
        currentIndex.y = currentIndex.y - 1;
      }
    }
    return result;
  };

  const traceMinPath = () => {
    if (!stageDataList?.value?.length) {
      return;
    }

    const originList = stageDataList?.value;
    const minTable = makeTraceCountTable(originList);

    const resultPath = getMinPathRowColIndex(3, 5, minTable, originList);
    console.log("minTableminTable", minTable, resultPath);


    originList.forEach((row, outerIndex) =>
      row.subList.forEach((item, innerIndex) => {
        if (
          resultPath.some(
            (resultItem) =>
              resultItem.x === outerIndex && resultItem.y === innerIndex
          )
        ) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      })
    );
  };

  return {
    stageDataList,
    calcMinTrace,
    traceMinPath,
  };
};
