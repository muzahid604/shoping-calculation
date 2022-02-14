function updateProductnumber(isIncrising, product, quantity) {
    const phoneInput = document.getElementById(product + '-input');
    let phoneInputValue = parseInt(phoneInput.value);
    if (isIncrising == true) {
        phoneInputValue = phoneInputValue + 1;
    }
    else if (phoneInputValue > 0) {
        phoneInputValue = phoneInputValue - 1;
    }
    phoneInput.value = phoneInputValue;
    const ammount = document.getElementById(product + '-ammout');
    ammount.innerText = phoneInputValue * quantity;
    calculation()
}

function calculation() {
    const phonePrices = parseInt(document.getElementById('phone-input').value) * 1219;
    const casePrices = parseInt(document.getElementById('case-input').value) * 59;
    const sabTotal = phonePrices + casePrices;
    const tax = (sabTotal * 5) / 100;
    document.getElementById('sub-total').innerText = sabTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total').innerText = sabTotal + tax;
}
// console.log(calculation())

document.getElementById('phone-plus-btn').addEventListener('click', function () {
    updateProductnumber(true, 'phone', 1219)

})

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    updateProductnumber(false, 'phone', 1219)

})
document.getElementById('case-plus-btn').addEventListener('click', function () {
    updateProductnumber(true, 'case', 59)

})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    updateProductnumber(false, 'case', 59)
})