// ['3 4','-3 5 -1 5','2 4 -2 4','-1 3 -1 3']
/**
 * ['-3 -5 -1 5']
 * ['2 4 -2 4']
 * ['-1 3 -1 3']
 */

export const useGetMinMatricHook = (input: string) => {
  const getMatricTable = (str: string) => {
    if (!str) {
      return [];
    }
    const mainStr = str.slice(1, str.length - 1);
    const arr = mainStr.split(",").slice(1);
    const tableResult = arr.map((item) => {
      const subArr = item.slice(1, item.length - 1);
      return subArr.split(/ +/).map(Number);
    });
    return tableResult;
  };

  const getMinSumTable = () => {
    const matricTable = getMatricTable(input);
    console.log("matricTablematricTable",matricTable);
  };

  return {
    getMinSumTable,
  };
};
