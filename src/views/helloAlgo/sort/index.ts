

export const recurGetArr = (arr: number[], i: number) => {
    const len = arr.length;
    if (i >= 0 && i < len) {
        console.log("递归遍历数组", arr[i]);
        recurGetArr(arr, i + 1);
    }

}

export const swap = (arr: number[], num1: number, num2: number) => {
    const temp = arr[num2];
    arr[num2] = arr[num1];
    arr[num1] = temp;
}

export const pointerArr = (arr: number[], left: number, right: number, isReverse: boolean) => {
    let i = left;
    let j = right;
    while (i < j) {
        if (isReverse) {
            while (i < j && arr[j] <= arr[left]) {
                j--;
            }
            while (i < j && arr[i] >= arr[left]) {
                i++;
            }
            swap(arr, i, j);
        } else {
            while (i < j && arr[j] >= arr[left]) {
                j--;
            }
            while (i < j && arr[i] <= arr[left]) {
                i++;
            }
            swap(arr, i, j);
        }

    }
    swap(arr, i, left);
    return i;
}

export const sortOlogn = (array: number[], start: number, end: number, isReverse = false) => {
    const pointer = pointerArr(array, start, end, isReverse);
    if (start <= pointer - 1) {
        sortOlogn(array, start, pointer - 1, isReverse);
    }
    if (pointer + 1 <= end) {
        sortOlogn(array, pointer + 1, end, isReverse);
    }
}


// 冒泡排序
export const bubbleSort = (array: number[], isReverse = false) => {
    const len = array.length;
    for (let i = len - 1; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            if (isReverse) {
                if (array[j] < array[j + 1]) {
                    swap(array, j, j + 1);
                }
            } else {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }

        }
    }
}

export const bubbleSortA = (array: number[], isReverse = false) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = len - 1; j > i; j--) {
            if (isReverse) {
                if (array[j] > array[j - 1]) {
                    swap(array, j, j - 1);

                }
            } else {
                if (array[j] < array[j - 1]) {
                    swap(array, j, j - 1);

                }
            }

        }
    }
}


const getMin = (array: (number | null)[]) => {
    let minIndx = 0;
    const len = array.length;
    for (let i = 0; i < len; i++) {
        if (array[i] !== null) {
            minIndx = i;
            break;
        }
    }
    for (let j = 0; j < len; j++) {
        const temp = array[j];
        const min = array[minIndx];
        if (temp !== null && min !== null && temp < min) {
            minIndx = j;
        }
    }
    let result = array[minIndx];
    array[minIndx] = null;
    return result;
}

export const plainSort = (array: number[]) => {
    const arrResult = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        arrResult[i] = getMin(array);
    }
    console.log("result", arrResult);
    return arrResult;
}