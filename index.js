// 1. Union type => 타입 2개 이상 합친 새로운 타입 만들기
var box1 = "안녕";
// 언제든 수정 가능
box1 = 123;
// 만약에 type이 많다면?
var box2 = true;
// 배열안에 문자 or 숫자가 껴있는 타입 지정
var arr1 = [1, "2", 3];
var arr2 = [1, "2", 3];
// 객체 타입 지정도 마찬가지
var obj = { age: 32 };
// 2. any => 모든 자료형 허용. 타입 실드 해제(타입스크립트 쓰는 의미가 사라진다. 버그 잡아주지 못한다)
var box3;
box3 = 123;
box3 = true;
box3 = [];
box3 = undefined;
box3 = null;
// 3. unknown =>용도는 any랑 같다. any보다는 안전
var box4;
box4 = {};
// let box5 :string = box4
// box4는 객체이기에 문자인 box5에 할당할 수 없다. 이런 에러 잡아줌
// 참고
var 나이;
// 나이 + 1 =>에러. 이유: string|number는 아예 새로운 타입이기에 string|number + 1 불가능
var 컴퓨터;
// 컴퓨터 - 1 =>에러 이유: unknown타입도 엄연히 새로운 타입.  unknown타입 - 1 불가능
// 숙제1. 다음 변수 4개에 타입을 지정해보자. 단! age 변수엔 undefined 말고 숫자도 들어올 수 있다.
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// 숙제2. 학교라는 변수에 타입을 지정해보자
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
