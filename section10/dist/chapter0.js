"use strict";
/**
 * 맵드 타입 기반 유틸리티 타입
 */
Object.defineProperty(exports, "__esModule", { value: true });
const draft = {
    title: "제목 나중에 짓자",
    content: "초안..",
};
const withThumbnailPost = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https...",
};
const readonlyPost = {
    title: "보호된 게시글 입니다",
    tags: [],
    content: "",
};
// readonlyPost.content = ""; => 수정불가
