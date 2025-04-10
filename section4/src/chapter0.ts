/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 변환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 변환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "김재형", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
  console.log(`tall : ${tall+ 10}`);
  }
}

introduce("김재형", 185);
introduce("김재형"); // ? -> 옵셔널프로퍼티 선택적 매개변수 오류x

function getSum(...rest : number[]) { //rest 파라미터
    let sum = 0;
    rest.forEach((it)=> (sum += it));
}

getSum(1, 2, 3) // 6
getSum(1, 2, 3, 4, 5) // 15

