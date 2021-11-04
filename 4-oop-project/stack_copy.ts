interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}

class StackImpl implements Stack {
  private head?: StackNode;
  private _size: number = 0;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string) {
    if(this.size === this.capacity) {
      throw new Error('Stack is Full!');
    }

    const node: StackNode = {value, next: this.head};
    this.head = node;
    
    this._size++;
  }

  pop(): string {
    if(this.head == null) {
      throw new Error('Stack is empty!');
    }

    const node = this.head;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}

const stack = new StackImpl(5);
stack.push('Ellie 1');
stack.push('Bob 2');
stack.push('Steve 3');

while(stack.size !== 0) {
  console.log(stack.pop());
}