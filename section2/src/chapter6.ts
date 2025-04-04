// any 타입
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
// anyVar = "hello";
// anyVar = true;
// anyVar ={};
// anyVar.toUpperCase();

// let num : number = 10;
// num = anyVar; // 사용 지양

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;

// num = unknownVar; => any 와는 다르게 사용불가
// unknownVar.toUpperCase(); => any 와 다르게 사용불가

// if (typeof unknownVar === " number ") { //정제해서 사용가능
//     num = unknownVar;
// }