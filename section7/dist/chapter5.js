"use strict";
/**
 * 프로미스
 */
Object.defineProperty(exports, "__esModule", { value: true });
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(20); 성공할시
        reject(" ~~ 때문에 실패");
    }, 3000);
});
promise.then((response) => {
    console.log(response * 10); // 기본적으로 결과값 unknown 으로 추론
}); // 제네릭사용시 ex 곱셈연산가능해짐
promise.catch((err) => {
    if (typeof err === "string") {
        console.log(err);
    }
});
function fetchPost() {
    return new Promise /*<Post> 둘다가능*/((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠",
            });
        }, 3000);
    });
}
const postRequest = fetchPost();
postRequest.then((post) => {
    post.id;
});
