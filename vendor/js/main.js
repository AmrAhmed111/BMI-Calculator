const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("male");
const female = document.getElementById("female");
const submit = document.getElementById("submit");
let resultArea = document.querySelector(".comment");
const resultBMI = document.getElementById("result");

const modalContent = document.querySelector(".modal-content");
const modalText = document.querySelector("#modalText");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

submit.addEventListener('click', () => {
    if (age.value == "" || height.value == "" || weight.value == "" || (male.checked == false && female.checked == false)) {
        modal.style.display = 'block';
        modalText.innerHTML = "All Fields Are Required!";
    } else {
        countBMI();
    }
});

function countBMI() {
    let p = [age.value , height.value, weight.value];
    if(male.checked) {
        p.push("male");
    } else if(female.checked) {
        p.push("female")
    }

    let bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

    let result = "";
    if(bmi < 18.5) {
        result = 'Underweight';
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        result = 'Healthy';
    } else if(bmi >= 25 && bmi <= 29.9) {
        result = 'Overweight';
    } else if(bmi >= 30 && bmi <= 34.9) {
        result = 'Obese';
    } else if(bmi >= 35) {
        result = 'Extremely obese';
    }

    resultArea.style.display = 'block';
    resultArea.innerHTML = `You Are <span id="comment">${result}</span>`;
    resultBMI.innerHTML = bmi.toFixed(2);
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = (event) => {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }