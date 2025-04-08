/**
 * 맵드 타입
 * 인터페이스 사용 불가능 오로지 type 에서만
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // 기능
  return {
    id: 1,
    name: "김재형",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // id : 1,
  // name: "김재형", 맵드타입으로 선택적 수정가능
  age: 26,
});

const user = fetchUser();
user.id = 1;