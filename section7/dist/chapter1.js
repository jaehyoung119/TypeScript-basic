"use strict";
/**
 *  첫번째 사례
 */
Object.defineProperty(exports, "__esModule", { value: true });
function swap(a, b) {
    // 타입이 다를수도 있는상황은 하나 추가
    return [b, a];
}
const [] = swap("1", 2);
/**
 *  두번째 사례
 */
function returnFirstValue(data) {
    return data[0];
}
let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue([1, "hello", "mynameis"]); // hello
/**
 *  세번째 사례
 */
function getLength(data) {
    return data.length;
}
let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
// let var4 = getLength(10); 검열해줌
