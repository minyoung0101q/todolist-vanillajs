//지금부터 우리가 해볼 건 string을 문자 두 개로 채우는 것. -> padStart();
const clock = document.querySelector("h2#clock");

function getClock() { //getClock function을 만듦.
    const date = new Date(); //Date object를 생성함. Date object는 내가 이걸(date) 호출하는 당시의 현재 날짜랑 시간을 알려줌.
    const hours = String(date.getHours()).padStart(2, "0");//2글자, 그렇지 않다면 앞쪽에 0을 추가
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000); //(function, ms) -> setInterval이 있어야 반복해서 일어남, setInterval이 없다면 한 번만 동작함.
/*정리: 위의 코드 -> padStart()가 동작하는 원리는  string이 가져야 하는 길이를 2로 설정하고
그렇지 않다면 string의 앞쪽에 0을 추가하도록 하는 것.
*/
/* setInterval()은 정한 시간 마다 function을 실행시키게 해줌.
여기선 getClock을 1초 -> 1000ms 마다 실행해줌 -> 실시간처럼 보이는 효과. */

/* 다음 섹션에서는 랜덤한 명언을 만들어 볼 것!
    Randomness에 대해 알아갈 것.
    Javascript로 하면 정말 간단.
    다음 강의를 들을 땐 내가 좋아하는 명언 10개 찾기.
    - 명언
    1. Don't judge a book by its cover. 겉모습만 보고 판단하지 마라.
    2. This is how life is. 이런 게 인생이다.
    3. A friend is a second myself. 친구는 두 번째의 나 자신이다.
    4. No sweat, No sweet. 땀 없인 달콤함도 얻을 수 없다.
    5. He can do, she can do, why not me? 그도 하고 그녀도 하는데 내가 안되겠어?
    6. Time is gold. 시간은 금이다.
    7. This too shall pass away. 이 또한 지나가리라.
    8. Love what you do. 네가 하는 일을 사랑하라.
    9. Live live there is no tomorrow. 내일이 없는 것처럼 살아라.
    10. Don't waste your youth. 당신의 젊음을 낭비하지 마라.
*/

