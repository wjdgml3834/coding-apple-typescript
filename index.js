// 14강 Object에 타입지정하려면 interface
var square = { color: "green", width: 100 };
var student = { name: "Kim" };
var teacher = { name: "Lee", age: 45 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1350,
    model: ["tv", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var cart = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
    { product: "청소기", price: 7000, card: false },
];
var newCart = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
    { product: "청소기", price: 7000, card: false },
];
var calculator = {
    plus: function (x, y) {
        return x + y;
    },
    minus: function (x, y) {
        return x - y;
    },
};
