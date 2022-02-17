// 8강 Literal Types로 만드는 const 변수 유사품
// literal type은 strings, numbers,booleans를 의미함.
// 더 엄격한 타입지정 가능.  => ~이런 문자만 들어올 수 있다.
// Literal types 변수에 더 뭐가 들어올지 엄격하게 관리 가능.
// 책이라는 변수에는 'book' 밖에 못들어옴
var 책;
// 이 number라는 변수에는 123 밖에 못들어옴
var number;
// union type도 지정가능
var computer;
// computer = '샤오미' => 에러가 난다.
// 함수도 가능하다.
// 파라미터로 어떤걸 받을지 어떤걸 리턴값으로 받을지 결정 가능
function myFunc(a) {
    return 1;
}
myFunc("hello");
// Q. 다음 함수를 만들어라
// 조건1 가위 or 바위 or 보 중 1개 입력 가능
// 가위 or 바위 or 보만 들어올 수 있는 array를 리턴해야함.
function game(type) {
    return ["보", "가위"];
}
game("가위");
// literal type 문제
var cup = {
    name: "plastic",
};
// 'plastic'이라는 자료만 들어올 수 있습니다 x
// 'plastic'이라는 타입만 들어올 수 있습니다 o
function makingCup(source) { }
// makingCup(cup.name)=>에러남.
// 해결책
// 1. object만들 때 타입지정 확실히
// 2. as문법으로 타입 속이기
// 3. as const 쓰기 => object의 value값을 그대로 타입으로 지정 / readonly효과도 포함되어있음
var cup2 = {
    name: "plastic",
};
makingCup(cup2.name);
