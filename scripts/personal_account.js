var spent, left, days, values;

spent = 100;
left = 250;
values = [10, 20, 13, 22, 16, 19];
days = [15, 17, 20, 5, 28, 40];

//document.getElementById("balance").addEventListener('click', function () {
//  this.innerHTML = "Your balance:  " + value + "$ / " + days + " days";
//})

document.getElementById("balance").innerHTML = "Your balance:  " + spent + "$ / " + (left + spent) + "$";

var balances = document.getElementsByClassName("balance");

for (let i = 0; i < balances.length; i++) {
  balances[i].innerHTML = "Balance: " + values[i] + "$ / " + days[i] + " days";
}
