let inputmail = document.getElementById('inputmail');
let inputname = document.getElementById('inputname');
let popupwindow = document.getElementById('popupwindow');
let contactname = document.getElementById('contactname');
let msg = document.getElementById('msg');

function subscritionWindow() {
    console.log(inputmail.value);
    console.log(inputname.value);
    popupwindow.style.visibility = "visible";
}

function contactWindow() {
    console.log(contactname.value);
    console.log(msg.value);
    contactwindow.style.visibility = "visible";
}

function closePopup() {
    popupwindow.style.visibility = "hidden";
    inputmail.value = '';
}

function closecontact() {
    contactwindow.style.visibility = "hidden";
    contactname.value = '';
}