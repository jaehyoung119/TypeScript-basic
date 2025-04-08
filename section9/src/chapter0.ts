/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
// T 의 값에 따라 string, number 반환

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

function removeSpaces<T>(text: T): T extends string ? string : undefined; // 오버로드 시그니처
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im jaehyoun");
result.toUpperCase();

let result2 = removeSpaces(undefined);
