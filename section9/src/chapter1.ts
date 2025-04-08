/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>;

let b : StringNumberSwitch<string>;

let c : StringNumberSwitch<number | string>;
// 유니온 할당시 일반적인 조건부 타입 -> 분산적 조건부 타입으로 업그레이드

let d : StringNumberSwitch<boolean | number | string>;
// => 결과 number , string , number 각각 넣은 결과값의 집합

/**
 * 실 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 결과 => number , never , boolean
// never => 공집합 never , number|boolean 합치면 never는 사라짐
// A = number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>