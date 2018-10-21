var total, values, valute;

total = 0;
values = [25, 240, 33, 22, 1, 20];
valute = "$"

//document.getElementById("balance").addEventListener('click', function () {
//  this.innerHTML = "Your balance:  " + value + "$ / " + days + " days";
//})

//document.getElementById("balance").innerHTML = "Your balance:  " + spent + "$ / " + (left + spent) + "$";

var balances = document.getElementsByClassName("balance");

for (let i = 1; i < balances.length; i++) {
  balances[i].innerHTML = values[i - 1] + valute;
  total += values[i - 1];
}

balances[0].innerHTML = total + valute;
