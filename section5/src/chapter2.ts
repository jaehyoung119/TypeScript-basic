/**
 * 선언 합침
 * type 별칭 동일한이름으로 중복선언 불가능
 * 인터페이스 동일한 이름으로 중복선언시 합쳐짐
 * 일명 merging
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; 오류발생 같은 프로퍼티 타입 혼용 x
  age: number;
}

interface Developer extends Person {
  name: "hello"; // 확장과 헷갈리기 금지
  // 확장시 서브타입으로 재선언 가능하지만
  // 인터페이스 합치기와는 다름
}

const person: Person = {
  name: "",
  age: 26,
};

/**
 * 모듈 보강시 보통 사용
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "", // ?? c 를 추가해야하는 상황
};
