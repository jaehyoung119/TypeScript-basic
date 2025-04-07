"use strict";
/**
 * 제네릭
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 제네릭함수
function func(value /*unknown*/) {
    // 타입 언노운, 애니로 설정시 매개변수가 명확히 숫자여도
    // 리턴값 = 언노운,애니
    return value;
}
let num = func(19); // num -> unknwon
if (typeof num === "number") {
    // 이렇게해야 toFixed 사용가능
    num.toFixed();
}
let bool = func(true);
let arr = func([1, 2, 3]);
