/**
 * 프로미스
 */

const promise = new Promise<number>/* 실패할때의 타입을 정해줄수는없다 */((resolve, reject) => {
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

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
    id : number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> { // 협업과정에서 여기에 명시하는것이 한눈에 보기 편리
    return new Promise/*<Post> 둘다가능*/((resolve,reject) => {
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
postRequest.then((post)=> {
    post.id
})
