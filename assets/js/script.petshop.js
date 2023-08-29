class Pet {
    constructor(tutor, name, specie, pic, birthdate) {
        this.tutor = tutor;
        this.name = name;
        this.specie = specie;
        this.pic = pic;
        this.birthdate = birthdate;
    }
}

class PetsList {
    constructor() {
        this.pets = [];
    }

    addPet(pet) {
        if (isAnyInputEmpty()) {
            sendErrorMsg("Por favor, preencha todos os campos.")
        } else {
            sendSuccessMsg("Seu Pet foi cadastrado!")
            this.pets.push(pet);
            clearInputs();
        }
    }

}

const petsList = new PetsList();

function createPet() {
    let petTutor = document.getElementById("inputTutor").value;
    let petName = document.getElementById("inputName").value;
    let petSpecie = document.getElementById("inputSpecie").value;
    let petPic = document.getElementById("inputPic").value;
    let petBirthdate = document.getElementById("inputBirthdate").value;

    const pet = new Pet(petTutor, petName, petSpecie, petPic, petBirthdate);

    petsList.addPet(pet);
}

function clearInputs() {
    petTutor = document.getElementById("inputTutor").value = "";
    petName = document.getElementById("inputName").value = "";
    petSpecie = document.getElementById("inputSpecie").value = "";
    petPic = document.getElementById("inputPic").value = "";
    petBirthdate = document.getElementById("inputBirthdate").value = "";
}

function isAnyInputEmpty() {
    petTutor = document.getElementById("inputTutor").value;
    petName = document.getElementById("inputName").value;
    petSpecie = document.getElementById("inputSpecie").value;
    petPic = document.getElementById("inputPic").value;
    petBirthdate = document.getElementById("inputBirthdate").value;

    if (petTutor == "" || petName == "" || petSpecie == "" || petPic == "" || petBirthdate == "") {
        return true;
    } else {
        return false;
    }
}

function sendErrorMsg(msg) {

    document.getElementById("errorMsg").innerHTML = msg;
    document.getElementById("errorMsg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("errorMsg").classList.add("hidden");
    }, 4000);
}

function sendSuccessMsg(msg) {

    document.getElementById("successMsg").innerHTML = msg;
    document.getElementById("successMsg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("successMsg").classList.add("hidden");
    }, 4000);
}