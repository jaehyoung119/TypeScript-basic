"use strict";
/**
 * 타입스크립트 클래스
 */
Object.defineProperty(exports, "__esModule", { value: true });
const employee = {
    name: "이정환",
    position: "developer",
    work() {
        console.log("일함");
    },
};
class Employee {
    // 필드
    name;
    age;
    position;
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("일함");
    }
}
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber;
    // 생성자
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
const employeeB = new Employee("김재형", 26, "개발자");
console.log(employeeB);
const employeeC = {
    name: "",
    age: 0,
    position: "",
    work() { },
};
