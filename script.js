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
let history = document.getElementById("history");
for (let btn of callBtn) {
    btn.addEventListener('click', function () {
        let card = this.closest(".card");
        let name = card.querySelector(".name").innerText;
        let num = card.querySelector(".num").innerText;
        let des = card.querySelector(".des").innerText;
        let coins = parseInt(coinsCount.innerText);
        let time = new Date().toLocaleTimeString();
        if (coins >= 20) {
            coins -= 20;
            coinsCount.innerText = coins;
            alert(`Calling ${des} ${num}...`);
            let div = document.createElement("div")
            div.innerHTML = `
            <div class="flex justify-between content-center items-center bg-[#f2f2f2] p-3 rounded-xl mt-4">
          <div>
            <h1 class="text-[20px]">${name}</h1>
            <h1 class="text-[#5c5c5c]">${num}</h1>
          </div>
          <div class="text-[#5c5c5c]">
            ${time}
          </div>
        </div>
            `
            history.appendChild(div);

        }
        else {
            alert("Not Enough Coins!");
        }
    });
}


// history clear part

document.getElementById("clear").addEventListener('click', function () {
    history.innerHTML = "";
})

// copy part

let copies = document.getElementsByClassName("copy-btn");
let navCopy = document.getElementById("total-copies");
let copyCount = 0;
for (let copy of copies) {
    copy.addEventListener('click', function () {
        copyCount++;
        navCopy.innerText = copyCount;
        let card = this.closest(".card");
        let num = card.querySelector(".num").innerText;
        navigator.clipboard.writeText(num);
        alert(`Number: ${num} copied to clipboard!`);

    })
}
