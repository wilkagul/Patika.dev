var modes = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

var fullName = prompt("Lütfen İsmini Girin", "Gülnur");
document.querySelector('#myName').innerHTML = fullName;
var time;
var day;


function showTime() {
    var d = new Date();
    time = d.toLocaleTimeString();
    day = modes[d.getDay()];
    document.querySelector('#myClock').innerHTML = time + " " + day;
}

function main() {
    setInterval(showTime, 1000);
}

main();