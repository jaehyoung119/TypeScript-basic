// enum 타입
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 enum 사라지지 않음

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "김재형",
  role: Role.ADMIN, // 관리자
  language: Language.korean,
};

const user2 = {
  name: "김요한",
  role: Role.USER, // 일반유저
};

const user3 = {
  name: "김주영",
  role: 2, // 게스트
};

console.log(user1, user2, user3);
