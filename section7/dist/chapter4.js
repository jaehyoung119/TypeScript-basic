"use strict";
/**
 * 제네릭 클래스
 */
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    list;
    constructor(list) {
        this.list = list;
    }
    push(data) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}
const list = new List([1, 2, 3]);
list.pop();
list.push(4);
list.print();
const stringList = new List(["!", "2"]);
stringList.push("hello");
