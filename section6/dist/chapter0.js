"use strict";
/**
 * 클래스
 */
Object.defineProperty(exports, "__esModule", { value: true });
let studentA = {
    name: "김재형",
    grade: "A",
    age: 26,
    study() {
        console.log("열심히 공부해요");
    },
    introduce() {
        console.log(`안녕하세요 ${this.name}입니다`);
    },
};
// 동일 객체 간소화
class Student {
    // 필드
    name;
    grade;
    age;
    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    // 메서드
    study() {
        console.log("열심히 공부해요");
    }
    introduce() {
        console.log(`안녕하세요 ${this.name}입니다`);
    }
}
class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;
    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }
    // 메서드
    programming() {
        console.log(`${this.favoriteSkill}를 자주사용`);
    }
}
const studentDeveloper = new StudentDeveloper("김재형", "B", 26, "typescript");
console.log(studentDeveloper);
studentDeveloper.programming();
// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("홍길동", "C", 32);
console.log(studentB);
studentB.introduce();
