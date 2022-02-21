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
