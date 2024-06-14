const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

function getClock() {
  const date = new Date();
  tms = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  clock.innerText = tms
    .split(":")
    .map((ele) => ele.padStart(2, "0"))
    .join(":");
}

getClock();
setInterval(getClock, 1000);
