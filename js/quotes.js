const quotes = [ //명언 배열 -> Array에는 object들이 들어있다. 각 object들은 콤마(,)로 구분.
    {
        quote: "Don't judge a book by its cover.", // quote -> 이 object들은 string으로 된 명언을 가지고 있다.
        author: "Lee min young",
    },
    {
        quote: "This is how life is.",
        author: "Lee ji eun",
    },
    {
        quote: "A friend is a second myself.",
        author: "Lee jun gi",
    },
    {
        quote: "No sweat, No sweet.",
        author: "Choi min ho",
    },
    {
        quote: "He can do, she can do, why not me?",
        author: "Yang seung hee",
    },
    {
        quote: "Time is gold.",
        author: "queen seung oa",
    },
    {
        quote: "This too shall pass away.",
        author: "kim beung cheol",
    },
    {
        quote: "Love what you do.",
        author: "ha sung so",
    },
    {
        quote: "Live live there is no tomorrow.",
        author: "jeon do yeon",
    },
    {
        quote: "Don't waste your youth.",
        author: "jeon sung yeon",
    }
] //명언 10개는 Array여야 함, text가 아님! object 형태로, quote에는 명언 text author에도 text로 내용이 들어가 있는 것.

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/*
Math module 활용, math module은 Javascript에서 이미 load 돼서 공짜로 제공되고 있음
Math.random() -> random()은 0부터 1 사이의 랜덤한 숫자를 제공함.
하지만, 우리한테는 쓸모가 없다. 왜냐면 우리는 0에서 10 사이의 숫자가 필요하기 때문.
우리가 해야 하는 건 숫자를 곱해주는 것이다.
Math.random()에 10을 곱하면 0에사 10 사이의 숫자들을 얻을 수 있다. 진짜 쿨하다.
Math.random() -> 활용하면 float, 즉 실수 형태로 나온다. 우리는 소수점 이하 수는 필요하지 않다.
그래서 3개 함수 중 하나인 floor()를 활용할 것.
정리하자면 다음과 같다.
round() -> 반올림 해줌
floor() -> 내림 해줌
ceil() -> 올림 해줌
*/
