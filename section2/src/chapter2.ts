// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["Hello", "im", "jason"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
]

// 튜플
// 길이와 타입이 고정된 배열
let tup1:[number, number] = [1, 2];

let tup2:[number, string, boolean] = [1, "2", true];
//순서 길이 엄격
// push pop 메서드 사용시 주의요망

const users :[string, number][] = [
    ["이정환", 1],
    ["김요한", 2],
    ["김주용", 3],
    ["박씨", 4], 
    // [5, "정씨"], 튜플타입사용시 순서 값 잘못입력시 오류 미리체크
];
