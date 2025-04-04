//object
let user: {
  id?: number;
  name: string; // 객체 리터럴타입
} = {
  id: 1,
  name: "김재형",
};

let config: {
  /* readonly */ apiKey: string; // 변하면 안돼는 readonly
} = {
  apiKey: "MY API KEY",
};

