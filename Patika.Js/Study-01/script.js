
//document.getElementById("btnClick").addEventListener("click", clicked);
function clicked() {
    document.getElementById("domain").innerHTML = "DOM Manipülasyonu yaptık!";
}

let fullName = prompt("Ad gir");
prompt()
let test = document.querySelector(".test");
test.innerHTML = `${test.innerHTML} <small style="color:red"> ${fullName} </small>`