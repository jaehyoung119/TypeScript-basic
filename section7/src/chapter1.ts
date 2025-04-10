/**
 *  첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  // 타입이 다를수도 있는상황은 하나 추가
  return [b, a];
}

const [] = swap("1", 2);

/**
 *  두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue([1, "hello", "mynameis"]); // hello

/**
 *  세번째 사례
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
// let var4 = getLength(10); 검열해줌
