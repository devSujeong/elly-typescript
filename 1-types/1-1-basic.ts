{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined: 값이 결정되지 않음
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null: 값이 비어있음
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 : 무슨 타입인지 몰라. javascript 라이브러리를 사용할 때.. 이 때도 타입 지정하는 걸 추천
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 : 어떤 값이든 담을 수 있어
  let anything: any = 0;
  anything = 'hello';

  // void: 함수에서 아무 것도 리턴하지 않아
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never: 함수에서 리턴할 수 없다.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
