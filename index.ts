// 6강 타입 확정하기 Narrowing & Assertion

// type이 아직 하나로 확정되지 않았을 경우, Type Narrowing을 써야한다.
// 어떤 변수가 타입이 아직 불확실하면 if문 등으로 narrowing 해줘야 조작가능
// 참고로 typeof는 문자열을 반환하기 때문에 'string' 이런 형식으로 써줘야한다.
function myFunc(x: number | string) {
  if (typeof x === "string") return x + "1";
  else {
    return x + 1;
  }
}

// 배열 nrrowing 해보기
myFunc(123);

function myFunc2(x: number | string) {
  let arr: number[] = [];
  if (typeof x === "number") {
    arr[0] = x;
  }
}
myFunc2(123);

// 만약에 이런 narrowing이 귀찮다면 assertion이라는 문법이 있다.
// type을 잠깐 덮어 씌우는걸 assertion이라고 한다. (타입 덮어쓰기 )
// 예를들어 x as number는 왼쪽에 있는 변수를 number로 덮어쓴다는 의미

// assertion의 용도를 잘 알아야 한다.
// 1. union type등을 하나로 narrowing 할 때 쓰인다. (타입을 a에서 b로 변경하는데 쓸 수 없다.)
// 2. 무슨 타입이 들어올지 확실하게 알 때 쓰자 . 왜냐하면 버그 안잡아주기 때문에
// 남의 코드 수정할때, 혹은 왜 타입에러가 나는지 모르겠을 때 쓰기

function myFunc3(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
}
myFunc3(123);

// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

function cleaningFunc(x: (number | string)[]) {
  let result: number[] = [];

  x.forEach((item) => {
    if (typeof item === "string") {
      result.push(parseInt(item));
    } else {
      result.push(item);
    }
  });
  return result;
}
cleaningFunc(["1", 2, "3"]);

// (숙제2) 다음과 같은 함수를 만들어보십시오.
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.

// 철수쌤같은 선생님 object 자료를 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.
// (동작예시)
// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다
// Q. 이 자료가 array type 인지 어떻게 검사하냐고요? 구글에 물어보시면 됩니다.

function lastSubject(x: { subject: string | string[] }) {
  if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else if (typeof x.subject === "string") {
    return x.subject;
  } else {
    return "안돼!";
  }
}

lastSubject({ subject: "math" });
