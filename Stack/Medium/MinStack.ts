class MinStack {
  stack: { val: number; minValInStack: number }[];
  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    if (this.stack.length === 0) {
      this.stack.push({ val, minValInStack: val });
      return;
    }

    if (val < this.getMin()) {
      this.stack.push({ val, minValInStack: val });
    } else {
      this.stack.push({ val, minValInStack: this.getMin() });
    }
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].minValInStack;
  }
}

const stack = new MinStack();

stack.push(1);
stack.push(2);
stack.push(-2);
stack.push(-3);
stack.push(412);
stack.push(42);

console.log(stack.getMin());
