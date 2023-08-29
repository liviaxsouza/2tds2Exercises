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
            showPets();
        }
    }

}

const petsList = new PetsList();

function createPet() {
    let petTutor = document.getElementById("inputTutor").value;
    let petName = document.getElementById("inputPet").value;
    let petSpecie = document.getElementById("inputSpecie").value;
    let petPic = document.getElementById("inputPic").value;
    let petBirthdate = document.getElementById("inputBirthdate").value;

    const pet = new Pet(petTutor, petName, petSpecie, petPic, petBirthdate);

    petsList.addPet(pet);
}

function clearInputs() {
    petTutor = document.getElementById("inputTutor").value = "";
    petName = document.getElementById("inputPet").value = "";
    petSpecie = document.getElementById("inputSpecie").value = "";
    petPic = document.getElementById("inputPic").value = "";
    petBirthdate = document.getElementById("inputBirthdate").value = "";
}

function showPets() {
    let showContent = '';

    petsList.pets.forEach(pet => {
        showContent = `
        <div class="divEachPet">
        <p><strong>Tutor: </strong>${pet.tutor}</p>
        <p><strong>Nome do Pet: </strong>${pet.name}</p>
        <p><strong>Espécie: </strong>${pet.specie}</p>
        <p><strong>Fotinha: </strong>${pet.pic}</p>
        <p><strong>Data de Nascimento: </strong>${dateInPTBR(pet.birthdate)}</p>

        </div>
        `
    });

    document.getElementById("listPet").innerHTML = showContent;
}

function dateInPTBR(date) {
    const parts = date.split('-');
  
  const dateBr = `${parts[2]}/${parts[1]}/${parts[0]}`;
  
  return dateBr;
}

function isAnyInputEmpty() {
    petTutor = document.getElementById("inputTutor").value;
    petName = document.getElementById("inputPet").value;
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