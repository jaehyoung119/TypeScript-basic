"use strict";
/**
 * 조건부 타입
 */
Object.defineProperty(exports, "__esModule", { value: true });
// T 의 값에 따라 string, number 반환
let varA; // string
let varB; // number
function removeSpaces(text) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    }
}
let result = removeSpaces("hi im jaehyoun");
result.toUpperCase();
let result2 = removeSpaces(undefined);
