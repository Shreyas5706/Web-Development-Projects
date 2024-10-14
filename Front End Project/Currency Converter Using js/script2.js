import { countryList } from "./codes.js";

const base_url = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

let fromcrr = document.querySelector(".from select");
let tocrr = document.querySelector(".to select");

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
  let fromcrrVal = fromcrr.value.toLowerCase();
  let tocrrVal = tocrr.value.toLowerCase();
  console.log(fromcrrVal)
  console.log(tocrrVal)
  evt.preventDefault();
  let amt = document.querySelector(".amount input");
  let amtValue = parseInt(amt.value);
  if (isNaN(amtValue) || amtValue == "" || amtValue < 0) {
    alert("Please Enter a valid number ");
    amt.focus();
    return;
  }
  let URL = `/${fromcrrVal}.json`;
  let response = await fetch(`${base_url}${URL}`);
  let json = await response.json();
  let rate = json[fromcrrVal][tocrrVal];
  let msg = document.querySelector(".msg");
  rate = amtValue * rate;
  if (rate.toFixed(2) < 1) {
    msg.innerHTML = `${amtValue} ${fromcrr.value} = ${rate} ${tocrr.value}`;
  }
  else {
    msg.innerHTML = `${amtValue} ${fromcrr.value} = ${rate.toFixed(2)} ${tocrr.value}`;
  }
})