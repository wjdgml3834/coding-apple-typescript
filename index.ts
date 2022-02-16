// 7강 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly

// type alias (타입 변수 만들기)
// 작명할때 type은 영어 대문자로 시작하는게 관습.
// union type , obeject type등 여러개 쓸 수 있다.
type Animal = string | number | undefined;
let animal: Animal = 123;

// object type alias 적용해보기
type Human = { name: string; age: number };
let human: Human = { name: "jung hee", age: 27 };

// js에서 const 변수는 등호로 재할당을 막는 역할
// const로 담은 object 수정은 자유롭게 가능.
const homeTown = { region: "seoul" };
homeTown.region = "busan";

// 타입스크립트쓰면 오브젝트 자료 수정도 막을 수 있다. => readonly 이용 !
// 에디터 에러만 띄어주는거다.
type Computer = { readonly name: string };

const computer: Computer = {
  name: "맥북",
};
// computer.name = "윈도우" => 수정하려고하면 에러난다.

// object안에서도 ? 사용가능
// name? => string | undefined와 같음
// 가질수도있고 안가질수도 있다로 할때 유용
type Book = { name?: string };

const book: Book = {
  name: "리액트를 다루는 기술",
};

// type 변수 서로 합치기 가능 => union type으로 만들 수 있음
type Name = string;
type Age = number;
type Person = Name | Age;

// 객체 형태 합치기
// & 연산자로 새로운 오브젝트 형성  => 전문용어: extend 한다.
type PositionX = { x: number };
type PositionY = { y: string };

type NewType = PositionX & PositionY;

let position: NewType = { x: 123, y: "123" };

// type 변수는 재정의 불가능

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈
type Iphone = { color?: string; size: number; readonly posistion: number[] };
const iphone: Iphone = { color: "red", size: 13, posistion: [356, 2323] };

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type Contact = { name?: "sring"; phone?: number; email?: "string" };

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.

type User = { name: string; phone: number; email?: string };
type Adult = { adult: boolean };

type NewUser = User & Adult;

let user: NewUser = {
  name: "깍쟁이",
  phone: 2323,
  email: "jung@naver.com",
  adult: false,
};
