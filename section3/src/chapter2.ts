/**
 * Unknown 타입(부모타입)
 */

function unknownExam(){
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknownVar: unknown;
    // let num: number = unknownVar; 다운캐스팅 불가
}

/**
 * Never 타입(모든타입의 부분집합, 서브타입)
 */

function neverExam() {
    function neverFunc(): never {
        while(true) {}
    }

    let num: number = neverFunc();
    // 업캐스팅 가능

    // let never1: never = 10; 다운캐스팅 불가
}

/**
 *  void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        return undefined;
    }

    let voidVar: void = undefined;
}

/**
 *  any 타입
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    // any 타입은 타입계층도 무시 
    // 다운캐스팅 업캐스팅 둘다 가능
    // 단 never 제외
    // 웬만하면 사용 지양
}