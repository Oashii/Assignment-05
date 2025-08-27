// hearts part

let cardHearts = document.getElementsByClassName("heart");
let navHeart = document.getElementById("total-hearts");
let heartCount = 0;
for (let heart of cardHearts) {
    heart.addEventListener('click', function () {
        heartCount++;
        navHeart.innerText = heartCount;
    });
}

// call part

let coinsCount = document.getElementById("total-coins");
let callBtn = document.getElementsByClassName("call-btn");
for (let btn of callBtn) {
    btn.addEventListener('click', function () {
        let card = this.closest(".card");
        let num = card.querySelector(".num").innerText;
        let des = card.querySelector(".des").innerText;
        let coins = parseInt(coinsCount.innerText);
        if (coins >= 20) {
            coins -= 20;
            coinsCount.innerText = coins;
            alert(`Calling ${des} ${num}...`);
        }
        else {
            alert("Not Enough Coins!");
        }
    });
}
