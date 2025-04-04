/**
 *  대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입
 */

/**
 * 1. 합집합 - union 타입
 */

let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

let arr : (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person

let union1 : Union1 = {
    name : "김재형",
    color : "",
}

let union2 : Union1 = {
    name : "",
    language : "",
}

let union3 : Union1 = {
    name : "",
    color : "",
    language : "",
}

// let union4 : Union1 = {
//     name:"",
// } // 오류

/**
 *  2. 교집합 타입 - Intersection 타입
 */

let variable: number & string; // 공집합 즉 never 타입 취급
                               // 대부분 객체 타입에서 사용
type Dog2 = {
    name: string;
    color: string;
};

type Person2 = {
    name: string;
    language: string;
};

type Intersection = Dog2 & Person2;

let intersection1 : Intersection = {
    name: "",
    color: "",
    language: "",
}
