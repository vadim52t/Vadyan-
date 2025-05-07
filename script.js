
let balance = 10000;

function spin() {
    const win = Math.random() < 0.5;
    const result = win ? 500 : -100;
    balance += result;
    document.getElementById("balance").textContent = balance;
    alert(win ? "Выигрыш! +500" : "Проигрыш! -100");
}
