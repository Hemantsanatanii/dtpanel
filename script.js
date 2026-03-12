function calculate(){

let usdt = document.getElementById("usdt").value;

if(usdt < 100){

document.getElementById("result").innerText =
"Minimum sell amount is 100 USDT.";

return;

}

let inr = usdt * 110;

document.getElementById("result").innerText =
"You will receive ₹" + inr;

}
