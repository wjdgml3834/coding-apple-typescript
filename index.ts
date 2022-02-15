// 5강: 함수에 타입 지정하는 법 & void 타입

// 변수만 만들면 any가 자동할당 된다.
let y;

// 결국 매개변수도 변수를 선언하는 것이기에 아무것도 지정안하면 any가 할당된다.
// 함수는 파라미터, 리턴 값 타입 지정이 가능하다
function double(x: number): number {
  return x * 2;
}

// 함수에서 void 타입 활용 가능
// void => 실수로 뭔가 return하는 것을 사전에 막을 수가 있다.
// void: 존재하지 않음, 아무것도 없이 비어있음
function 함수(x: number): void {
  1 + 1;
}

//참고) 파라미터 타입 지정을 해주었다면, 함수 호출할때 인수가 반드시 들어가야한다. 아니면 에러남! (JS랑 다른점 )
// function example(x: number): void{
//   x * 3
// }
// example()

// 만약 이를 선택사항(옵션)으로 만들고 싶으면 ?를 쓴다.
// ?는 undefined해주는 것과 비슷한데,
// 변수? :number 이면 number | undefined인 union type이랑 같다
function example(x?: number): void {
  x * 3;
}
example();

// 숙제1.이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.
function printName(name: string): void {
  if (name) {
    console.log(name);
  } else console.log("이름이 없습니다.");
}
printName("홍길동");

// 숙제2.
// 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

function counter(x: number | string): number {
  return x.toString().length;
}
counter(245);

// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

function probability(
  income: number,
  house: boolean,
  attract: string
): string | void {
  let result: number = 0;
  result += income;
  if (house) {
    result += 500;
  }
  if (attract === "상") {
    result += 100;
  }
  if (result >= 600) {
    return "결혼가능";
  }
}
probability(700, false, "중");
