let btn = document.querySelector("button");

let header = document.querySelector(".header");
header.innerText = "";
  let params = document.getElementById("para");
  let value = params.innerText;
  function toCelsius(fahrenheit) {
    let degree =  (5/9) * (fahrenheit-32);
    header.innerHTML =degree;
  }

btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents form submission and page refresh
    toCelsius(params.value);
  });

//   btn.addEventListener("click",toCelsius(value){
//     let degree =  (5/9) * (fahrenheit-32);
//     header.innerHTML =degree;
//   });
  console.log(value);
  let pohu = document.getElementById("super");
  pohu.innerHTML = value;
  pohu.style.color="orange";
  pohu.style.backgroundColor = "blue";
  pohu.style.fontSize = 50; 
 