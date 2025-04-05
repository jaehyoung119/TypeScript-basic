/**
 * 인터페이스 확장
 * 중복 프로퍼티 간소화 일명 상속
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // name: string;
  // age: number;
  // name: "hello"; //서브타입으로는 재설정도 가능
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 3,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface chicken extends Animal {
  isFly: boolean;
}

// 다중 확장도 가능
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 3,
  isBark: true,
  isScratch: false,
};
