"use strict";
/**
 * keyof 연산자
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getPropertyKey(person, key) {
    //keyof 타입에만 사용가능
    return person[key];
}
const person = {
    name: "김재형",
    age: 26,
};
getPropertyKey(person, "name");
