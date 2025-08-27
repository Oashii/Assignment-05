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


