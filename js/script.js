"use strict"



document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.header__burger')) {
        document.documentElement.classList.toggle('menu-open');
    }

    if (targetElement.closest('[data-goto]')) {
        document.documentElement.classList.contains('menu-open') ?
            document.documentElement.classList.remove('menu-open') : null;
        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;
        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            });
        }
        e.preventDefault();
    }
}
var acc = document.getElementsByClassName("block__info");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


const btn_1 = document.getElementById("block__body_1");
const btnAfter_1 = document.getElementById("accordion-button_1");
const btn_2 = document.getElementById("block__body_2");
const btnAfter_2 = document.getElementById("accordion-button_2");
const btn_3 = document.getElementById("block__body_3");
const btnAfter_3 = document.getElementById("accordion-button_3");
const btn_4 = document.getElementById("block__body_4");
const btnAfter_4 = document.getElementById("accordion-button_4");
const btn_5 = document.getElementById("block__body_5");
const btnAfter_5 = document.getElementById("accordion-button_5");
const btn_6 = document.getElementById("block__body_6");
const btnAfter_6 = document.getElementById("accordion-button_6");
btn_1.addEventListener('click', function onClick(event) {
    this.classList.toggle("green");

}); btn_2.addEventListener('click', function onClick(event) {
    this.classList.toggle("green");

}); btn_3.addEventListener('click', function onClick(event) {
    this.classList.toggle("green");

}); btn_4.addEventListener('click', function onClick(event) {
    this.classList.toggle("green");

}); btn_5.addEventListener('click', function onClick(event) {
    this.classList.toggle("green");

}); btn_6.addEventListener('click', function onClick(event) {
    this.classList.toggle("green");

});

btnAfter_1.addEventListener('click', function onClick(event) {
    this.classList.toggle("accordion-button-after");

});
btnAfter_2.addEventListener('click', function onClick(event) {
    this.classList.toggle("accordion-button-after");

}); btnAfter_3.addEventListener('click', function onClick(event) {
    this.classList.toggle("accordion-button-after");

}); btnAfter_4.addEventListener('click', function onClick(event) {
    this.classList.toggle("accordion-button-after");

}); btnAfter_5.addEventListener('click', function onClick(event) {
    this.classList.toggle("accordion-button-after");

}); btnAfter_6.addEventListener('click', function onClick(event) {
    this.classList.toggle("accordion-button-after");

});