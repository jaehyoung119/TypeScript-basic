/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
    name : string;
    age : number;
}

// 매개변수 value => number : toFixed
// 매개변수 value => string : toUppuerCase
// 매개변수 value => Date : getTime
// 매개변수 value => Person : name age살 입니다.
function func(value: number | string | Date | null | Person){
    if(typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if(value instanceof Date) {
        console.log(value.getTime());
    } else if(value && 'age' in value) { // instanceof 오른쪽 값이 값이여야함 타입 x
        console.log(`${value.name}은 ${value.age}살 입니다`) // in 연산자 시 value 는 not null 이여야함
    }
}