"use strict";
/**
 * Pick<T, K>
 * 객체 타입으로부터 독립 프로퍼티만 골라내주는 타입
 */
Object.defineProperty(exports, "__esModule", { value: true });
const legacyPost = {
    title: "옛날 글",
    content: "옛날 컨텐츠",
};
const noTitlePost = {
    content: "",
    tags: [],
    thumbnailURL: "",
};
