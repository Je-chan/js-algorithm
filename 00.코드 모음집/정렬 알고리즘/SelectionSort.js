const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i; // 가장 작은 원소의 인덱스

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    // 교체
    const temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
};
