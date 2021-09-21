const buttonPrice = [];
for (let i=1; i<=6; i++) {
  buttonPrice.push(document.getElementById(`tip${i}`).value);
}
const billPrice = document.getElementById("bill-price");
const numberOfPeople = document.getElementById("num-people");
const zeroText1 = document.getElementById("zero1");
const zeroText2 = document.getElementById("zero2");

let price;
let tip;
let numPeople;

const getBillPrice = () => {
  console.log(billPrice.value);
}