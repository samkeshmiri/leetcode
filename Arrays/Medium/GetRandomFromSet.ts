//  380. Insert Delete GetRandom O(1)
class RandomizedSet {
  //   private map: Map<number, boolean>;
  private set: number[];

  constructor() {
    // this.map = new Map();
    this.set = [];
  }

  insert(val: number): boolean {
    if (this.set.indexOf(val) !== -1) return false;

    this.set.push(val);
    return true;
  }

  remove(val: number): boolean {
    const index = this.set.indexOf(val);
    if (index == -1) {
      return false;
    }

    const swap = this.set[this.set.length - 1];

    this.set[index] = swap;
    this.set.pop();
    return true;
  }

  getRandom(): number {
    const size = this.set.length;
    const randomNumber = Math.floor(Math.random() * size);
    return this.set[randomNumber];
  }
}

var obj = new RandomizedSet();
console.log(obj.insert(0));
console.log(obj.insert(1));
console.log(obj.remove(0));
console.log(obj.insert(2));
console.log(obj.remove(1));
console.log(obj.getRandom());
