interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type Pow = {
  [key: string]: {
    head: number;
    data: string;
  }
};

class StackStructure implements Stack {
  head: number = 0;
  pow: Pow | {} = {};

  push(value: string) {
    this.pow['data'+this.head+1] = {
      head: this.head + 1,
      data: value
    };

    this.head++;
  }

  get size() {
    return this.head + 1;
  }

  pop() {
    return this.pow['data'+this.head].data;
  }
}

const structure = new StackStructure();
structure.push('fkfkfk');
console.log(structure.size);
console.log(structure.pop);

