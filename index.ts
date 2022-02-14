// string 타입 지정
let 이름: string = "jung hee";

// 배열 타입 지정
let 성: string[] = ["kim", "park"];

// object 타입 지정

let 사람: { name: string } = { name: "정희" };

// object 타입 지정시 옵션을 주고 싶을때

let 노트북: { name?: string } = { name: "맥북" };

// 다양한 타입이 들어오게 하려면 Union type
let 핸드폰: string | number = "갤럭시";

// 타입을 변수에 담아서 쓸 수도있다. => type alias
type Mytype = string | number;
let 책: Mytype = 123;

// 함수 타입 지정
function 함수(x: number): number {
  return x * 2;
}

// array에 쓸 수 있는 tuple 타입

type Member = [number, boolean];
let TOM: Member = [123, true];

// object에 타입 지정해야할 속성이 많다면?
type Tablet = {
  [key: string]: string;
};

let ipad: Tablet = { name: "apple" };

// class 문법

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
