var models = [
    {
        name: "Bmw-4",
        image: "image/bmw-4.jpg",
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/420d-2-0-xdrive-gran-coupe'
    },
    {
        name: "Fiat",
        image: "image/fiat.jpg",
        link: 'http://www.arabalar.com.tr/fiat/panda/2022/0-9-cross-4x4'
    },
    {
        name: "Fieste",
        image: "image/fiesta-04.jpg",
        link: 'http://www.arabalar.com.tr/ford/fiesta/2022/1-1-style'
    },
    {
        name: "Mercedes",
        image: "image/mercedes-c.jpg",
        link: 'http://www.arabalar.com.tr/mercedes/c-serisi/2022/c200-1-5'
    },
    {
        name: "Toyata Yaris",
        image: "image/toyota-yaris.jpg",
        link: 'http://www.arabalar.com.tr/toyota/yaris/2022/1-0-vision'
    },
]

const settings = {
    duration: 2000,
    XXX: true,
}

//#region  VARIBALES

let min = 0;
let max = 5;

let curr = 0;
let index = 0;
var siir;
var count = models.length;

//#endregion

//#region  Event Listener

document.querySelector('.fa-arrow-right').addEventListener('click', function () {
    index = index < (count - 1) ? ++index : 0;
    //console.log(index);
    setChanged('click');
});

document.querySelector('.fa-arrow-left').addEventListener('click', function () {
    index = index > 0 ? --index : (count - 1);
    //console.log(index);
    setChanged('click');
});
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        index = curr;
        clearInterval(siir);

    })
    item.addEventListener('mouseout', function () {
        starting();
    })
})
//#endregion

//#region FUNCTIONS
function starting() {
    setChanged();
    siir = setInterval(() => {
        setChanged();
    }, settings.duration);
}

function setChanged(value) {
    let random = 0;

    //Do while ise önce işlemi gerçekleştirir. Sonra Şartına bakar.
    if (value == 'click') {
        curr = index;
    } else {
        if (settings.XXX) {
            do {
                random = Math.floor(Math.random() * (max - min)) + min;
            } while (random == curr);

            curr = random;;
        } else {
            curr = index;
        }
    }


    document.querySelector('.card-img-top').setAttribute('src', models[curr].image);
    // innerHtml ile textContent aynıdır.
    document.querySelector('.card-title').innerHTML = models[curr].name;
    document.querySelector('.card-text').textContent = curr.toString();
    document.querySelector('.card-link').setAttribute('href', models[curr].link);
}
//#endregion

starting();
