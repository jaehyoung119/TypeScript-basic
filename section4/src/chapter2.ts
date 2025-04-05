/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단한다
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; 오류 -> 다운캐스팅

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 업캐스팅인데 오류나는 이유?
// 매개변수의 호환성을 검사할시 업캐스팅 허용 x
// 다운캐스팅 허용
d = c;

// 객체 예시
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};
let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
// dogFunc = animalFunc;
// let testFunc = (animal:Animal) => {
//     console.log(animal.name);
//     console.log(animal.color); => 오류발생
// }

let testFunc2 = (dog: Dog) => {
    console.log(dog.name); // 오류 x
}
// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b:number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a,b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; //오류발생 2개짜리 1개 대입 불가
