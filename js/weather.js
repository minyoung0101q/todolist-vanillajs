const API_KEY = "19e054334c61b27dd891a0dfdef0072e";

function onGeoOk(position) {
  /* Javascript가 user의 위치를 전달해줄 것 */
  const lat = position.coords.latitude; //위도를 얻자
  const lon = position.coords.longitude; //경도를 얻자
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //API_KEY, lon, lat -> 이 세 변수는 반드시 값이 있어야 함
  console.log(url);
  //이제는 url을 활용하여 get 해야한다. -> 즉, fetch를 사용해서 URL을 얻을 것이다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); /*url을 부르는 것. -> console에는 아무것도 X, 구글 크롬의 network에 가면 WIFI에서 어떤 일이 일어나는지 보여줌
                실제로 URL에 갈 필요 없이 JavaScript가 대신 URL을 부른 것.
                */ /* URL을 fetch하고, 그 다음으로 response를 받아야 함. 그리고 response의 json을 얻어야 함. 그리고 내용을 추출했으면 data를 얻을 것.*/
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //getCurrentPosition 함수는 2개의 argument를 필요로 한다, successCallback 와 errorCallback 을.

/*
기본적으로 API는 다른 서버와 이야기할 수 있는 방법이다.
지금은 open weather map 서버와 이야기할 것.
*/

/*
우리가 할 일은 latitude, longitude, API Key와 함께 API를 부르는 것.
*/
