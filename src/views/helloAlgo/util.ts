export const reverseSameTest = (str: string) => {
  if (!str) {
    return true;
  }
  const strTest = str.toLowerCase();
  const letterStr = strTest.replace(/[^0-9a-zA-Z]/g, "");
  const isAllSame = letterStr.split("").every((_item, index, array) => {
    return array[index] === array[array.length - index - 1];
  });
  return isAllSame;
};
