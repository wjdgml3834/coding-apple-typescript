// 9강 함수와 methods에 type alias 지정하는 법
var myFunc = function (x) {
    return 1;
};
// object안에 함수 타입 지정은 어떻게 할까?
// type alias도 사용가능
var myComputer = {
    name: "mac",
    changeComputer: function (x) {
        return x;
    },
};
myComputer.changeComputer("삼성");
// 콜백함수 개념 설명
// func1을 실행하고 싶을때 func2를 실행하고 싶을 때가 있을 수 있다.
// 이때 fun2를 콜백 함수라고 부른다.
function func1(anotherFunc) {
    anotherFunc();
}
function func2() { }
func1(func2);
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    return x.replace(/^0+/, "");
};
var removeDash = function (y) {
    var changeDash = y.replace(/\-/g, "");
    return parseInt(changeDash);
};
cutZero("0김치사발면");
removeDash("010-1111-2222");
var numPicker = function (x, y, z) {
    var result1 = y(x);
    var result2 = z(result1);
    console.log(result2);
};
numPicker("010-1111-2222", cutZero, removeDash);
