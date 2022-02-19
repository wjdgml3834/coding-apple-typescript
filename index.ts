// 9강 함수와 methods에 type alias 지정하는 법

// type alias에 함수 type 저장해서 쓰는 법
// 함수 타입 지정할 때 ()=>{} 모양으로!
// 함수표현식에만 type alias 사용 가능
// type alias 만들기 싫으면 그냥 함수만들 때 직접 타입작성하면 된다.

type Func = (x: string) => number;

let myFunc: Func = function (x) {
  return 1;
};

// object안에 함수 타입 지정은 어떻게 할까?
// type alias도 사용가능
let myComputer = {
  name: "mac",
  changeComputer(x: string): string {
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
function func2() {}

func1(func2);

// (숙제1) 아래 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.
// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
// - type 키워드를 쓰든 말든 알아서 합시다.
type MemberInfo = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: MemberInfo = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();

// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.

type CutZero = (x: string) => string;
type RemoveDash = (y: string) => number;

let cutZero: CutZero = (x) => {
  return x.replace(/^0+/, "");
};

let removeDash: RemoveDash = (y) => {
  const changeDash = y.replace(/\-/g, "");
  return parseInt(changeDash);
};

cutZero("0김치사발면");
removeDash("010-1111-2222");

// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째도 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

type NumPicker = (x: string, y: CutZero, z: RemoveDash) => void;

let numPicker: NumPicker = (x, y, z) => {
  let result1 = y(x);
  let result2 = z(result1);
  console.log(result2);
};

numPicker("010-1111-2222", cutZero, removeDash);
