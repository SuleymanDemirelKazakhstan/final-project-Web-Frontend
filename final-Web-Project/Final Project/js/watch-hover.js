let mainBtn = document.getElementById("main-rating-watched-system-different");
let changeImg = document.getElementById("bi-bookmark-check");
let mainBtn2 = document.getElementById("main-rating-watched-system-different2");
let changeImg2 = document.getElementById("bi-bookmark-check2");
let test = true;

function changeEffect () {
    mainBtn.onclick = () => {
        if(test) {
            test = false;
            changeImg.style.fill = "#F60";
        }
        else {
            test = true;
            changeImg.style.fill = "currentColor";
        }
    }
    mainBtn2.onclick = () => {
        if(test) {
            test = false;
            changeImg2.style.fill = "#F60";
        }
        else {
            test = true;
            changeImg2.style.fill = "currentColor";
        }
    }
}