/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
} // 인터페이스 또한 readonly, 선택적 프로퍼티 사용가능
// 함수 타입지정 또한 가능
// type 별칭과 다르게 유니온, 인터섹션 사용불가

const person: Person = {
  name: "김재형",
  age: 27,
  sayHi: function () {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
