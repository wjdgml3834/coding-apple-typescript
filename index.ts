// 1. Union type => 타입 2개 이상 합친 새로운 타입 만들기
let box1: string | number = "안녕";
// 언제든 수정 가능
box1 = 123;

// 만약에 type이 많다면?
let box2: string | number | boolean = true;

// 배열안에 문자 or 숫자가 껴있는 타입 지정
let arr1: (number | string)[] = [1, "2", 3];
let arr2: Array<number | string> = [1, "2", 3];

// 객체 타입 지정도 마찬가지
let obj: { age: number | string } = { age: 32 };

// 2. any => 모든 자료형 허용. 타입 실드 해제(타입스크립트 쓰는 의미가 사라진다. 버그 잡아주지 못한다)
let box3: any;
box3 = 123;
box3 = true;
box3 = [];
box3 = undefined;
box3 = null;

// 3. unknown =>용도는 any랑 같다. any보다는 안전
let box4: unknown;
box4 = {};
// let box5 :string = box4
// box4는 객체이기에 문자인 box5에 할당할 수 없다. 이런 에러 잡아줌

// 참고
let 나이: string | number;
// 나이 + 1 =>에러. 이유: string|number는 아예 새로운 타입이기에 string|number + 1 불가능
let 컴퓨터: unknown;
// 컴퓨터 - 1 =>에러 이유: unknown타입도 엄연히 새로운 타입.  unknown타입 - 1 불가능

// 숙제1. 다음 변수 4개에 타입을 지정해보자. 단! age 변수엔 undefined 말고 숫자도 들어올 수 있다.
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// 숙제2. 학교라는 변수에 타입을 지정해보자
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
