{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object â
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class â
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // đ only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // type PositionType {
  // }

  // đ Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right';
}

/**
 * interface: ęˇę˛ŠėŦí­ė ė ė.
 * type: ë°ė´í°ė íėė ę˛°ė 
 */