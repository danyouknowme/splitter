const buttonPrice = [];
for (let i=1; i<=6; i++) {
  buttonPrice.push(document.getElementById(`tip${i}`));
}
const customPrice = buttonPrice[buttonPrice.length - 1];
const billPrice = document.getElementById("bill-price");
const numberOfPeople = document.getElementById("num-people");
const zeroText1 = document.getElementById("zero1");
const zeroText2 = document.getElementById("zero2");
const tipText = document.getElementById("tip-amount");
const priceText = document.getElementById("price");

let price;
let tip;
let numPeople;

const getBillPrice = () => {
  if (billPrice.value == '0') {
    zeroText1.style.display = 'flex';
    billPrice.style.border = '2px solid rgb(165, 61, 29)'
  } else {
    zeroText1.style.display = 'none';
    billPrice.style.border = '2px solid rgb(235, 241, 241)';
    price = Number(billPrice.value);
  }
  calculate();
}

const getNumberOfPeople = () => {
  if (numberOfPeople.value == '0') {
    zeroText2.style.display = 'flex';
    numberOfPeople.style.border = '2px solid rgb(165, 61, 29)'
  } else {
    zeroText2.style.display = 'none';
    numberOfPeople.style.border = '2px solid rgb(235, 241, 241)';
    numPeople = Number(numberOfPeople.value);
  }
  calculate();
}

const selectTip = (id) => {
  customPrice.value = '';
  customPrice.style.border = '2px solid rgb(235, 241, 241)';
  buttonPrice.map(item => {
    if (item.classList.contains("hold-button")) {
      item.classList.remove("hold-button");
      item.classList.add("button");
    }
  });
  document.getElementById(id).classList.remove("button");
  document.getElementById(id).classList.add("hold-button");
  tip = Number(document.getElementById(id).value);
  calculate();
}

const customTip = (id) => {
  buttonPrice.map(item => {
    if (item.classList.contains("hold-button")) {
      item.classList.remove("hold-button");
      item.classList.add("button");
    }
  });
  if (document.getElementById(id).value === '0') {
    document.getElementById(id).style.border = '2px solid rgb(165, 61, 29)';
    tip = "";
  } else {
    document.getElementById(id).style.border = '2px solid rgb(235, 241, 241)';
    tip = Number(document.getElementById(id).value);
  }
  calculate();
}

const calculate = () => {
  if (price != undefined && tip != undefined && numPeople != undefined) {
    const tipAmount = (price * (tip / 100)) / numPeople;
    const totalAmount = (price / numPeople) + Number(tipAmount);
    tipText.innerHTML = "$" + Math.round(tipAmount * 100) / 100;
    priceText.innerHTML = "$" + Math.round(totalAmount * 100) / 100;
  }
}

const reset = () => {
  price = 0;
  tip = 0;
  numPeople = 0;
  customPrice.value = '';
  billPrice.value = '';
  numberOfPeople.value = '';
  buttonPrice.map(item => {
    if (item.classList.contains("hold-button")) {
      item.classList.remove("hold-button");
      item.classList.add("button");
    }
  });
  tipText.innerHTML = '$0.00';
  priceText.innerHTML = '$0.00';
}