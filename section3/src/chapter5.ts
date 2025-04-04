/**
 * 타입 추론
 */

let a = 10; // const, 상수 아닐시 타입 넓히기를통해 추론
let b = "hello";
let c = {
  id: 1,
  name: "김재형",
  profile: {
    nickname: "lidaa",
  },
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

// function func(param){ // 매개변수 추론 x

// }

function func(message = "hello") {
  // 기본값 지정된 매개변수 추론 o
  return "hello"; // return 반환값 기준 추론 진행
}

let d; // 초기값 설정 안할시 암묵적 any
d = 10;
d = "hello";

const num = 10; // 상수 넘버 리터럴타입 간주 추론 x

let arr = [1, " string"];
