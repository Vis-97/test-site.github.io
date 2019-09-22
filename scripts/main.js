// JavaScript source code
/*let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/background.jpg') {
        myImage.setAttribute('src', 'images/background2.jpg');
    } else {
        myImage.setAttribute('src', 'images/background.jpg');
    }
}
*/

let myButton = document.querySelector('button.user');
let myHeading = document.querySelector('span');

if (document.URL == "https://vis-97.github.io/") {
    function setUserName() {
        let myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = myName;
    }

    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = storedName;
    }

    myButton.onclick = function () {
        setUserName();
    }
}
// variabili
let begin = document.URL;
let zero = document.querySelector('button.zero');
let one = document.querySelector('button.one');
let due = document.querySelector('button.due');
let tre = document.querySelector('button.tre');
let quattro = document.querySelector('button.quattro');
let cinque = document.querySelector('button.cinque');

let zerofile = ""
let onefile = ""
let duefile = ""
let trefile = ""
let quttrofile = ""
let cinquefile = ""

function whereIam() {
    if (begin == "https://vis-97.github.io/") {
        zerofile= "https://vis-97.github.io/esterno1.html"
        onefile= "https://vis-97.github.io/esterno2.html"
    }
    if (begin == "https://vis-97.github.io/esterno1.html") {
        zerofile= "https://vis-97.github.io/villa0.html"
        onefile= "https://vis-97.github.io/cantina1.html"
    }
}

function go(file) {
    window.open(file);
    }


whereIam();

zero.onclick = function () { go(zerofile); }
one.onclick = function () { go(onefile); }
due.onclick = function () { go(duefile); }
tre.onclick = function () { go(trefile); }
quattro.onclick = function () { go(quattrofile); }
cinque.onclick = function () { go(cinquefile); }


