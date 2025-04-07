/**
 * 제네릭
 */

// 제네릭함수
function func<T>(value: T/*unknown*/): T { // 제네릭 함수 설정시 매개변수값에 따라 유동적 추론
  // 타입 언노운, 애니로 설정시 매개변수가 명확히 숫자여도
  // 리턴값 = 언노운,애니
  return value;
}

let num = func(19); // num -> unknwon

if (typeof num === "number") {
  // 이렇게해야 toFixed 사용가능
  num.toFixed();
}

let bool = func(true);

let arr = func<[number, number, number]> /*명시적으로 직접 정의도 가능*/([1,2,3]);
