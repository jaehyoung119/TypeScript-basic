"use strict";
/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    // 필드
    // public name: string; 생성자에 지정시 생략가능
    age;
    /* private */ position;
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        // 생성자에 설정시 필드는 자동으로 설정
        // this.name = name; 생성자에 지정시 생략가능
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log(`${this.name} 일함`); // 메서드 내에서 가능
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
    // 메서드
    func() {
        this.age; // 파생클래서에선 접근제어 가능
    }
}
const employee = new Employee("김재형", 26, "developer");
employee.name = "김요한"; // public, 무설정시 제어가능
// employee.age = 27; protected -> 외부에선 불가능
employee.position = "publisher"; // private 재설정 불가능
console.log(employee);
