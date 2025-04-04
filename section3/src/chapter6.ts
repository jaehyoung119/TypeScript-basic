/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김재형";
person.age = 26;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 갑 as 단언 -> 단언식
 * A as B 
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이여야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; A 가 B 의 슈퍼,서브 타입 성립x

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name : "바둑이",
    color: "yellow",
} as const; // 모든 프로퍼티 readonly 로 전환

/**
 * Non Null 단언
 */

type Post = {
    title : string;
    author? : string;
};

let post : Post = {
    title : "게시글1",
    author : "김재형",
}

const len : number = post.author!.length;

