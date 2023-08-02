const merge = (arr, left, mid, right) => {
  let i = left;
  let j = mid + 1;
  let k = left; // 결과 배열의 인덱스

  let sorted = [];

  // 각 왼쪽과 오른쪽의 배열에 대해서 한 번씩 오른쪽으로 이동하면서 비교하는 것
  while (i <= mid && j <= right) {
    // 더 작은 값이 결과 배열에 들어가도록 설정
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }

  // 한쪽 배열의 모든 원소가 먼저 다 결과 배열에 들어간 경우
  // 먼저 끝난 배열이 왼쪽인 경우
  if (i < mid) {
    // 오른쪽 배열에 남아 있는 것들을 다 넣어준다
    for (; j <= right; j++) sorted[k++] = arr[j];
  }

  // 먼저 끝난 배열이 오른쪽인 경우
  else {
    // 왼쪽 배열에 남아 있는 것들을 다 넣어준다.
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }

  // 최종적으로는 원본 배열에 다 반영이 되도록 넣어준다
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
};

const mergeSort = (arr, left, right) => {
  // 원소가 1개인 경우, 해당 배열은 정렬이 된 상태로 이해 가능하므로 조건을 left < right 로 따짐
  if (left < right) {
    let mid = parseInt((left + right) / 2); // 2개의 부분 배열로 분할

    mergeSort(arr, left, mid); // 왼쪽 부분 배열 정렬 수행
    mergeSort(arr, mid + 1, right); // 오른쪽 부분 배열 정렬 수행

    merge(arr, left, mid, right); // 정렬된 2개의 배열을 하나로 병합
  }
};
