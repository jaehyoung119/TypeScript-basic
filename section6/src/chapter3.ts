/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  //   name: string;
  //   moveSpeed: number;
  //   생성자에 지정함으로써 필드 생략

  constructor(public name: string, public moveSpeed: number) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
    // 생성자에 지정함으로써 생략
    // 인터페이스로 생성한것들은 무조건 public 이외사용x
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
