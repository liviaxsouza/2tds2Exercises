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
        this.pets.push(pet);
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
    
}