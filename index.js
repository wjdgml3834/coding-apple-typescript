// 7강 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly
var animal = 123;
var human = { name: "jung hee", age: 27 };
// js에서 const 변수는 등호로 재할당을 막는 역할
// const로 담은 object 수정은 자유롭게 가능.
var homeTown = { region: "seoul" };
homeTown.region = "busan";
var computer = {
    name: "맥북",
};
var book = {
    name: "리액트를 다루는 기술",
};
var position = { x: 123, y: "123" };
var iphone = { color: "red", size: 13, posistion: [356, 2323] };
var user = {
    name: "깍쟁이",
    phone: 2323,
    email: "jung@naver.com",
    adult: false,
};
