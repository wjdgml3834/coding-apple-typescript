// 타입 스크립트 기본 타입 정리

let 이름: string = "kim jung hee";
let 나이: number = 27;
let 결혼했니: undefined = undefined;
let 담배했니: null = null;
let 회원들: string[] = ["영희", "철수"];
let 컴퓨터들: { computer1: string; computer2: string } = {
  computer1: "apple",
  computer2: "samsung",
};

// 3강 타입스크립트 과제

// 1. 나의 이름, 나이, 출생지역을 변수로 저장하기

let myName: string = "kim jung hee";
let myAge: number = 27;
let myHomeTown: string = "서울";

// 2.내가 가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보기

let myFavorite: { song: string; singer: string } = {
  song: "시간을 거슬러",
  singer: "린",
};

// 3. 다음과 같이 생긴 자료의 타입 지정해보기
// let project = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
//   }
//
let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
