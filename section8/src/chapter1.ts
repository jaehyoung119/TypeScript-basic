/**
 * keyof 연산자
 */

// 방법 1
// interface Person {
//     name: string;
//     age: number;
// }

// 방법 2
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  //keyof 타입에만 사용가능
  return person[key];
}

const person = {
  name: "김재형",
  age: 26,
};

getPropertyKey(person, "name");
