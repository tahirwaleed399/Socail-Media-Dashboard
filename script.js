let changer = document.querySelector(".changer");
let html = document.querySelector("html");
let mode = document.querySelector("#mode");
let numbers = document.querySelectorAll(".number");
let lnumbers = document.querySelectorAll(".lower-numbers");
let numbers3 = document.querySelectorAll(".lower-teller span");
let arr = [];
let arr2 = [];
let arr3 = [];
changer.addEventListener("click", (e, i) => {
    if (changer.classList.contains("active")) {
        changer.classList.remove("active");
        html.setAttribute("data-theme", "light");
        mode.innerHTML = "Dark Mode"
    } else {
        changer.classList.add("active");
        html.setAttribute("data-theme", "dark");
        mode.innerHTML = "Light Mode"


    }
})
numberChangers(lnumbers, arr2)
numberChangers(numbers, arr)
numberChangers(numbers3, arr3)


function numberChangers(numbers, arr) {
    numbers.forEach((e, i) => {
        arr.push(numbers[i].innerHTML);
    });

    numbers.forEach((e, i) => {
        setInterval(() => {
            let random = Math.floor(Math.random() * 10);
            if (random > 5) {

                arr[i]++;
            } else {

                arr[i]--;
            }
            update();
        }, 1200);
    })

    function update() {
        numbers.forEach((e, i) => {
            e.innerHTML = arr[i];
        })
    }
}