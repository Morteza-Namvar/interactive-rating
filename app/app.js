const resultNumber = document.getElementById("selected-number");
const rate = document.querySelectorAll(".rate");
let btn = document.getElementById("submit_btn");

for (let i = 0; i < rate.length; i++){
    rate[i].addEventListener("click", () => {
        
        rate[i].style.background = "hsl(216, 12%, 54%)"
        let rates = rate[i].innerHTML;
        
        btn.addEventListener("click", () => {
            resultNumber.innerHTML = rates;
            rate[i].style.background = "hsl(217, 10%, 42%)"
        });

    });
}
