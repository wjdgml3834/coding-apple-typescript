// 10강 타입스크립트로 HTML 변경과 조작할때 주의점

// 잘 찾으면 html object 자료가 남고
// 요소를 예를들어 못찾으면 null이 남기 때문에
// union type으로 설정해주어야 함

let title = document.querySelector("#title");
if (title != null) {
  title.innerHTML = " 반가워요";
}

// HTML 조작시 narrowing 방법 5가지
// 1. instanceof연산자 => 가장 많이 쓰게 될 확률 높음

if (title instanceof Element) {
  title.innerHTML = "반가워요";
}

// 2. as로 사기치기
// as는 타입 assertion으로 , Element 타입으로 사기쳐주세요~라는 의미 . 비상시에 쓰기
let 제목: Element | null = document.querySelector("#title") as Element;

// 3. ?찍기 제목에 innerHTML있으면 출력, 없으면 undefined
// 이를 optional chaining이라고 함.
if (제목?.innerHTML) {
  제목.innerHTML = "반가워요 ";
}

// Element타입중에서 HTMLAnchorElement, HTMLHeadingElement, HTMLButtonElement
// HTMLAnchorElement 이 타입은 href,style, class 이런거 쓸수 있음
// 예를들어 h1태그이면 HTMLHedingElement임
let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}

// 타입스크립트에서 event Listener 부착하는법
// ?는 버튼에 addEventListener 가능하면 해주고, 아니면 undefined 뱉으셈
let btn = document.querySelector("#button");

btn?.addEventListener("click", function () {});

// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
// <img id="image" src="test.jpg">
// html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다.
// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?

let source = document.querySelector("#image");
if (source instanceof HTMLImageElement) {
  source.src = "new.jpg";
}

// 알게된점: src를 찾는게 아니라 그 상위 태그 요소가 어떤 타입에 해당하는지를 찾아야!

// 숙제2.
// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// 자바스크립트 코드를 어떻게 짜야할까요?
let changeLink = document.querySelectorAll(".naver");
changeLink.forEach((item) => {
  if (item instanceof HTMLAnchorElement) {
    item.href = "https://kako.com";
  }
});

// 배운점 각각 바꿔주려면 forEach써야하는구나
