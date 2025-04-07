"use strict";
/**
 * 제네릭 인터페이스
 */
Object.defineProperty(exports, "__esModule", { value: true });
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1"],
};
let numberMap1 = {
    key: -123,
    key2: 123,
};
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
let stringMap2 = {
    key: "123",
};
function goToSchool(user) {
    //   if (user.profile.type !== "student") { 제네릭 사용시 생략가능
    //     console.log("잘못 오셨습니다");
    //     return;
    //   }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    name: "김재형",
    profile: {
        type: "developer",
        skill: "Typescript",
    },
};
const studentUser = {
    name: "김요한",
    profile: {
        type: "student",
        school: "가천대",
    },
};
