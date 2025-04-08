/**
 * infer
 * inference -> 추론하다
 */

type Func = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;
// R => 조건식이 참이되도록 R 값이 유동적으로 변경

type A = ReturnType<Func>; // string , infer R 사용시 string

type B = ReturnType<FuncB>; // never , infer R 사용시 number

type C = ReturnType<number>; // infer 다음값을 추론할수 없는경우 거짓

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이여야 한다
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다

type PromiseA = PromiseUnpack<Promise<number>>;
//number 가 되길바람

type PromiseB = PromiseUnpack<Promise<string>>;
//string 이 되길바람
