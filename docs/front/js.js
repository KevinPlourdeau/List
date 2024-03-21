let myList = ["bonjour", "aurevoir", "salutation", "ok"];
let mylist = document.getElementById("liste-mot");


for (let i = 0; i < myList.length; i++) {
    let li = document.createElement("li");
    li.textContent = myList[i];
    mylist.appendChild(li); 
}

function ajoutermot() {
    let motInput = document.querySelector("input[type='text']");
    let mot = motInput.value.trim();
    if (mot !== "") {
        let nouvelElement = document.createElement("li");
        nouvelElement.textContent = mot;
        mylist.appendChild(nouvelElement);
        motInput.value = "";
    }
}

function effacermot() {
    let dernierElement = mylist.lastChild;
    if (dernierElement) {
        mylist.removeChild(dernierElement);
    }
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        ajoutermot();
    }
});