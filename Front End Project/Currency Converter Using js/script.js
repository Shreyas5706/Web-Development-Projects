//This code was written by me While learning and making this project , The script2.js is the final code after finalizing the code 
import { countryList } from "./codes.js";

const base_url = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
// const base_url="https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";

let fromcrr = document.querySelector(".from select");
let tocrr = document.querySelector(".to select");
// let fromcrrVal = fromcrr.value;
// let tocrrVal = tocrr.value;

let btn = document.querySelector("form button");
let option = document.querySelectorAll(".options select");


for (let select of option) {
  for (let key in countryList) {
    let newOption = document.createElement("option");
    newOption.value = key;
    newOption.textContent = key;
    if (select.name === "from" && key === "USD") {
      newOption.selected = "selected";
    }
    if (select.name === "to" && key === "INR") {
      newOption.selected = "selected";
    }
    select.appendChild(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  })
}
const updateFlag = (element) => {
  const country = element.value;
  let countryCode = countryList[country];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
  // let fromcrrVal = fromcrr.options[fromcrr.selectedIndex].textContent.toLowerCase();
  // let tocrrVal = tocrr.options[tocrr.selectedIndex].textContent.toLowerCase();
  let fromcrrVal = fromcrr.value.toLowerCase();
  let tocrrVal = tocrr.value.toLowerCase();
  console.log(fromcrrVal)
  console.log(tocrrVal)
  evt.preventDefault();
  let amt = document.querySelector(".amount input");
  // let fromcrrVal=fromcrr.value;
  // let tocrrVal= tocrr.value;
  let amtValue = parseInt(amt.value);
  if(isNaN(amtValue) || amtValue=="" ||amtValue<0) {
    alert("Please Enter a valid number ");
    amt.focus();
    return ;
  }
  // console.log(amtValue, "    ", amt)
  // if (amtValue == "" || amtValue < 0) {
  //   amt.value = "0";
  // }
  let URL = `/${fromcrrVal}.json`;
  // console.log(URL);
  let response = await fetch(`${base_url}${URL}`);
  console.log(response)
  let json = await response.json();
  console.log(json);
  let rate = json[fromcrrVal][tocrrVal];
  console.log(rate);
  let msg = document.querySelector(".msg");
  rate = amtValue * rate;
  if (rate.toFixed(2) < 1) {
    msg.innerHTML = `${amtValue} ${fromcrr.value} = ${rate} ${tocrr.value}`;
  }
  else {
    msg.innerHTML = `${amtValue} ${fromcrr.value} = ${rate.toFixed(2)} ${tocrr.value}`;
  }


  // console.log(response);

  // let rate=URL[fromcrrVal][tocrrVal];
  // console.log(rate);
})

//   let URL=fetch(`${base_url}/usd.json`);
// // let URL=fetch(``);
//   console.log(URL);