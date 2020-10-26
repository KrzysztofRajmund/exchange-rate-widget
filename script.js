const chooseRateOne = document.getElementById("chooseRateOne");
const chooseRateTwo = document.getElementById("chooseRateTwo");
const rateAmountOne = document.getElementById("rateAmountOne");
const rateAmountTwo = document.getElementById("rateAmountTwo");
const swap = document.querySelector(".swap");
const exchangeRate = document.getElementById("exchangeRate");
const select = document.getElementsByName('select')

function getRate() {
  let rate;

  fetch(`https://api.exchangerate-api.com/v4/latest/${chooseRateOne.value}`)
    .then((response) => response.json())
    .then((data) => {
      rate = data.rates[chooseRateTwo.value];
      exchangeRate.innerHTML = `1${chooseRateOne.value} = ${rate}`;
      rateAmountTwo.value = (rate * rateAmountOne.value).toFixed(2);
    });
}

//event listeners
chooseRateOne.addEventListener("change", getRate);
rateAmountOne.addEventListener("input", getRate);
chooseRateTwo.addEventListener("change", getRate);
rateAmountTwo.addEventListener("input", getRate);
swap.addEventListener("click",()=>{
    let swap = chooseRateOne.value
    chooseRateOne.value = chooseRateTwo.value
    chooseRateTwo.value = swap
    getRate();
})

getRate();
