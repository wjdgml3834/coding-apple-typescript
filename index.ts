// 14강 Object에 타입지정하려면 interface

// type 키워드로 타입변수 생성가능하지만,
// interface 키워드로도 타입변수 생성 가능하다. => type이랑 달리 =가 안들어감
//  type Square = {color: string; width: number}
interface Square {
  color: string;
  width: number;
}

let square: Square = { color: "green", width: 100 };

// interface의 장점
// 1. extends로 복사 가능
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

let student: Student = { name: "Kim" };
let teacher: Teacher = { name: "Lee", age: 45 };

// type도 유사한 기능 있다. &기호를 사용한다. (intersection type)
// but 두 타입을 전부 만족하라는 뜻이지. 복사 느낌이 아님.
type Animal = { name: string };
type Dog = { age: number } & Animal;

// type과 interface 차이
// type은 중복선언 불가능, interface는 중복선언 가능
interface Book {
  name: string;
}
interface Book {
  id: number;
}
// 이제 그럼 Book 같은 경우 {name: string , score:number} 자동으로 extend
// type은 엄격해서 중복 선언 불가능.
// 다른사람이 많이 이용할것 같을 때(외부 라이브러리같은 경우 ) object타입 정할때 interface 씀

// 숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
// let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
// 무슨 타입일지는 알아서 기입합시다.

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1350,
  model: ["tv", "phone"],
};

// (숙제2) array 안에 object 여러개가 필요합니다.
// 쇼핑몰 장바구니를 구현하려고 하는데
// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
// 오늘 배운 interface 문법을 써봅시다.

interface shoppingBasket {
  product: string;
  price: number;
}
let 장바구니: shoppingBasket[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
// 아 그냥 []안에 객체가 들어간다는 느낌으로 shoppingBasket[]이렇게 쓰면 되는구나

// (숙제3) 위에서 만든 타입을 extends 해봅시다.
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
// { product : '청소기', price : 7000, card : false }
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.

interface shoppingBasket {
  card?: boolean;
}
let cart: shoppingBasket[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
  { product: "청소기", price: 7000, card: false },
];

// 이것도 가능
interface Cart {
  product: string;
  price: number;
}

interface NewCart extends Cart {
  card?: boolean;
}

let newCart: NewCart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
  { product: "청소기", price: 7000, card: false },
];

// (숙제4) object 안에 함수를 2개 넣고 싶은데요
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
// 이 object 자료를 어떻게 만들면 될까요?
// interface를 이용해서 object에 타입지정도 해보십시오.

interface Calculator {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}

let calculator: Calculator = {
  plus(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
};
