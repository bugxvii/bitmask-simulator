"use strict";

const condition = document.getElementById('condition').children;
let selectedCondition = 'AND';

const bitsInput = document.getElementsByClassName('bits');
let bitsA = bitsInput[0].children;
let bitsB = bitsInput[1].children;
let resultBits = bitsInput[2].children;

for (let i=0; i<3; ++i) {
    condition[i].addEventListener("click", (e) => handleButtonClick(e, i))
}

for (let i=0; i<4; ++i) {
    bitsA[i].addEventListener("change", (e) => evaluateBits(e));
    bitsB[i].addEventListener("change", (e) => evaluateBits(e));
}

function evaluateBits(e) {
    switch(selectedCondition) {
        case "AND": {
            if (bitsA[0].checked && bitsB[0].checked) resultBits[0].checked = true;
            else resultBits[0].checked = false;
            if (bitsA[1].checked && bitsB[1].checked) resultBits[1].checked = true;
            else resultBits[1].checked = false;
            if (bitsA[2].checked && bitsB[2].checked) resultBits[2].checked = true;
            else resultBits[2].checked = false;
            if (bitsA[3].checked && bitsB[3].checked) resultBits[3].checked = true;
            else resultBits[3].checked = false;
            break;
        }
        case "OR": {
            if (bitsA[0].checked || bitsB[0].checked) resultBits[0].checked = true;
            else resultBits[0].checked = false;
            if (bitsA[1].checked || bitsB[1].checked) resultBits[1].checked = true;
            else resultBits[1].checked = false;
            if (bitsA[2].checked || bitsB[2].checked) resultBits[2].checked = true;
            else resultBits[2].checked = false;
            if (bitsA[3].checked || bitsB[3].checked) resultBits[3].checked = true;
            else resultBits[3].checked = false;
            break;
        }

        case "XOR": {
            if (bitsA[0].checked ^ bitsB[0].checked) resultBits[0].checked = true;
            else resultBits[0].checked = false;
            if (bitsA[1].checked ^ bitsB[1].checked) resultBits[1].checked = true;
            else resultBits[1].checked = false;
            if (bitsA[2].checked ^ bitsB[2].checked) resultBits[2].checked = true;
            else resultBits[2].checked = false;
            if (bitsA[3].checked ^ bitsB[3].checked) resultBits[3].checked = true;
            else resultBits[3].checked = false;

            break;
        }
        default: {
            console.log('error');
        }
    }
}

function handleButtonClick(e, index) {
    condition[0].classList.remove('active')
    condition[1].classList.remove('active');
    condition[2].classList.remove('active');

    condition[index].classList.toggle('active');
    selectedCondition = e.target.value;

    evaluateBits();
}