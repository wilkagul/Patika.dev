//Add
const div = document.getElementById("add");
div.classList.add("myStill", "fancy", "test");

const classNames = div.classList;
document.getElementById("pAdd").innerHTML = "Class ekledikten sonra liste: " + classNames;

//Remove
div.classList.remove("addMetod");
document.getElementById("pRemove").innerHTML = "Class sildikten sonra liste: " + classNames;

//Item
const firstClassName = div.classList.item(2);
document.getElementById("pItem").innerHTML = "İlk class: " + firstClassName;

//Contains
const result = div.classList.contains("add");
document.getElementById("pContainsTrue").innerHTML = "'add' class'ını içeriyor mu? " + " --> " + result;
const result2 = div.classList.contains("addMetod");
document.getElementById("pContainsFalse").innerHTML = "'addMetod' class'ını içeriyor mu? " + " --> " + result2;

//Replace
div.classList.replace("add", "newClass");
document.getElementById("pReplace").innerHTML = classNames;

//Toggle
const pToggle = document.getElementById("pToggle")
const button = document.getElementById("toggleButton");
button.addEventListener("click", function () {
    pToggle.classList.toggle("colorp");
})
//Length
document.getElementById("length").innerHTML = "Class names length:" + " " + div.classList.length;

console.log(!!2);

var money
console.log(money);

function printScreen1() {
    console.log("İlk ekran çıktısı");
}

function printScreen2(callback1, callback2) {
    setTimeout(function () {
        callback1();
        console.log("İkinci ekran çıktısı")
        callback2();
    }, 3000);
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}


printScreen2(printScreen1, printScreen3);


function main() {
    function ayse() {

    }
    function selami() {

    }
}

ayse()