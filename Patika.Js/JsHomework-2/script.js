//localStorage.clear();
const addButton = document.getElementById('liveToastBtn');
const processText = document.getElementById('task');
const ulList = document.getElementById('list');

let itemsArray = [];
let checkedArray = [];

function init() {
    itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
    checkedArray = localStorage.getItem("checked") ? JSON.parse(localStorage.getItem("checked")) : []
    const data = JSON.parse(localStorage.getItem("items"));
    const checked = JSON.parse(localStorage.getItem("checked"));
    if (data) {
        data.forEach((item) => {
            createItem(item);
        });
    }

    if (checked) {
        checked.forEach((item) => {
            createChecked(item);
        });
    }
}

function newElement() {
    const text = processText.value;

    if (typeof text === 'string' && text.length === 0) {
        console.log('string is empty');
        $('#liveToastError').toast('show')
    } else {
        $('#liveToastSuccess').toast('show')
        console.log('string is NOT empty');

        //Set Local Storage
        itemsArray.push(processText.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        createItem(processText.value);

        console.log(localStorage.getItem('items'));

        //clear input value
        processText.value = "";
    }
}

function createItem(input) {
    //create li
    const todoLi = document.createElement('li');
    todoLi.innerHTML = input;
    todoLi.onclick = selectedChecked;
    ulList.appendChild(todoLi);

    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('close', 'h-100', 'px-3')
    deleteButton.innerHTML = '<span>&times;</span>';
    deleteButton.onclick = deleteItem;
    todoLi.appendChild(deleteButton);
}


function deleteItem() {
    console.log(itemsArray);
    let indis = $(this.parentElement).index();
    this.parentElement.remove();
    itemsArray.splice(indis, 1);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    console.log(itemsArray);
}

function selectedChecked() {
    if (this.className == 'checked') {
        this.classList.remove('checked')
        let indis = $(this).index();                                                    // İndis GEtirild
        checkedArray = checkedArray.filter(function (ele) { return ele != indis });     // filter işlemi
        localStorage.setItem('checked', JSON.stringify(checkedArray));                  // Storage item kaydedildi
    } else {
        this.classList.add('checked')
        console.log($(this).index());
        checkedArray.push($(this).index());
        localStorage.setItem('checked', JSON.stringify(checkedArray));
    }
    console.log(checkedArray);
}

function createChecked(check) {
    console.log(check);
    let allChild = ulList.children;
    allChild[check].classList.add('checked');
}
