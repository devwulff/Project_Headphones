let inputmail = document.getElementById('inputmail');
let inputname = document.getElementById('inputname');
let popupwindow = document.getElementById('popupwindow');

console.log('it works!');

function subscritionWindow() {
    console.log(inputmail.value);
    console.log(inputname.value);
    popupwindow.style.visibility = "visible";
}

function closePopup() {
    popupwindow.style.visibility = "hidden";
    inputmail.value = '';
}