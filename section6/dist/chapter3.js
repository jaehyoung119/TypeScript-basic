"use strict";
/**
 * 인터페이스와 클래스
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    name;
    moveSpeed;
    //   name: string;
    //   moveSpeed: number;
    //   생성자에 지정함으로써 필드 생략
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        // this.name = name;
        // this.moveSpeed = moveSpeed;
        // 생성자에 지정함으로써 생략
        // 인터페이스로 생성한것들은 무조건 public 이외사용x
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동`);
    }
}
