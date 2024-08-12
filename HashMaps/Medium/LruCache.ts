class LRUCache {
  private map: Map<number, number>; // maps retain insertion order. can use instead of DoublyLinkedList
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map<number, number>();
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.delete(key);
    }

    this.map.set(key, value);

    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}

const cache = new LRUCache(2);
cache.put(2, 1);
cache.put(1, 1);
cache.put(2, 3);
cache.put(4, 1);
console.log(cache.get(1)); // -1
console.log(cache.get(2)); // 3

// { [2,1], [1,1],  }
