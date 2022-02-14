// string 타입 지정
var 이름 = "jung hee";
// 배열 타입 지정
var 성 = ["kim", "park"];
// object 타입 지정
var 사람 = { name: "정희" };
// object 타입 지정시 옵션을 주고 싶을때
var 노트북 = { name: "맥북" };
// 다양한 타입이 들어오게 하려면 Union type
var 핸드폰 = "갤럭시";
var 책 = 123;
// 함수 타입 지정
function 함수(x) {
    return x * 2;
}
var TOM = [123, true];
var ipad = { name: "apple" };
// class 문법
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
