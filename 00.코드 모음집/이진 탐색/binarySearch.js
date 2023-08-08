const binarySearchRecursive = (arr, target, start, end) => {
  if (start > end) return -1;

  let mid = parseInt((start + end) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
};

const binarySearchIterable = (arr, target, start, end) => {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
};

let n = 10;
target = 7;
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let result1 = binarySearchRecursive(arr, target, 0, n - 1);

if (result1 === -1) return console.log('원소가 존재하지 않습니다');
else console.log(`${result1 + 1}번째 원소입니다.`);

let result2 = binarySearchIterable(arr, target, 0, n - 1);

if (result2 === -1) return console.log('원소가 존재하지 않습니다');
else console.log(`${result2 + 1}번째 원소입니다.`);
