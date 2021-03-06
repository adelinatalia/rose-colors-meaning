import roses from './roses.js'

window.onload = displayCards(roses);

function displayCards(arr) {
    let cardsContainer = document.getElementById("cards-container");
    for (let el in arr) {
        let card = "";
        content += arr[el];
        if (el % 2 == 0) {
            console.log("img:", arr[el].img);
            card += `
            <section class="card card-left">
            <div class="card-img-box">
                <img src="./assets/img/frame-flowers-left.png" alt="rose frame" width="300"
                    class="card-img-frame card-img-frame-left">
                <img src="../assets/${arr[el].img}" alt="${arr[el].name}" width="120" class="card-img card-img-left"
                    id="card-img-left-1">
            </div>
            <div class="card-content">
                <h2>${arr[el].name}</h2>
                <p>${arr[el].meaning}</p>
            </div>
        </section>
        `
        } else {
            card += `
            <section class="card card-right">
            <div class="card-content">
            <h2>${arr[el].name}</h2>
            <p>${arr[el].meaning}</p>
            </div>
            <div class="card-img-box">
                <img src="./assets/img/frame-flowers-right.png" alt="rose frame" width="300"
                    class="card-img-frame card-img-frame-right">
                <img src="../assets/${arr[el].img}" alt="${arr[el].name}" width="120" class="card-img card-img-right">
            </div>
        </section>
            `
        }
        cardsContainer.innerHTML += card;
    }
    return cardsContainer;
};
