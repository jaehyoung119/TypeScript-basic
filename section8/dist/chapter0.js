"use strict";
/**
 * 인덱스드 엑세스 타입
 */
Object.defineProperty(exports, "__esModule", { value: true });
function printAuthorInfo(author /*["id"} 세부적으로 뽑아오기 가능*/) {
    // author 은 값이아닌 type
    console.log(`${author.name}-${author.id}`);
}
const post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "김재형",
        age: 27,
    },
};
