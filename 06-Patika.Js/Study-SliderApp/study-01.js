//Random olarak

function whileTest1(input = 10, counter = -1) {
    let i = input;
    let c = counter;
    if (counter < input) {
        c++;
        console.log(c);
        whileTest(i, c);
    }
}

//whileTest1();

function whileTest2(input) {
    let i = input;
    let c = 0;
    if (i) {
        c++;
        console.log(c);
        whileTest2(i);
    }
}

whileTest2(true);

function setCard() {
    let random = 0;

    //Do while ise önce işlemi gerçekleştirir. Sonra Şartına bakar.
    do {
        random = Math.floor(Math.random() * (max - min)) + min;
    } while (random == curr);

    curr = random;;

    /*
    //while ise önce şarta bakar. Sonra işlemi gerçekleştirir.
    while (random == curr) {
        random = Math.floor(Math.random() * (max - min)) + min;
    }
    
    curr = random;
    */

    document.querySelector('.card-img-top').setAttribute('src', models[curr].image);
    document.querySelector('.card-title').innerHTML = models[curr].name;
    document.querySelector('.card-text').textContent = curr.toString();
    document.querySelector('.card-link').setAttribute('href', models[curr].link);
}