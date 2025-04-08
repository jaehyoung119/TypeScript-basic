/**
 * 인덱스드 엑세스 타입
 */

/*interface*/ type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(
  author: PostList[number]["author"] /*["id"} 세부적으로 뽑아오기 가능*/
) {
  // author 은 값이아닌 type
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김재형",
    age: 27,
  },
};

type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // 튜플타입 사용예시
