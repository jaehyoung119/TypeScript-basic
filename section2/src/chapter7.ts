// void
// void -> 공허 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): void { // void 사용 이유 undefined,null 사용 불가
    console.log("hello");
}

// let a: void;
// a= 1; void 사용시 어떠한 값도 담지 못함
// undefined 만 사용가능
// tsconfig.json stringNullChecks - > false 로 변경시
// null 할당 가능

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}

let a : never;
// never 은 void 와 달리 
// undefined, null, any 포함 어떤 값도 담지 못함
// 옵션 종료해도 담지 못함