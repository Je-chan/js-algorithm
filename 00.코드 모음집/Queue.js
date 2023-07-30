class Queue {
  constructor() {
    this.items = {};
    this.headIdx = 0;
    this.tailIdx = 0;
  }

  /**
   * 삽입
   * @param {*} item
   */
  enqueue(item) {
    this.items[this.tailIdx] = item;
    this.tailIdx++;
  }

  /**
   * 삭제
   * @returns
   */
  dequeue() {
    const item = this.items[this.headIdx];
    delete this.items[this.headIdx];
    this.headIdx++;

    return item;
  }

  /**
   * 다음에 추출할 데이터
   * @returns
   */
  peek() {
    return this.items[this.headIdx];
  }

  /**
   * Queue 의 길이
   * @returns
   */
  getLength() {
    return this.tailIdx - this.headIdx;
  }
}
