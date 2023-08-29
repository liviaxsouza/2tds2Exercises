class Pet {
    constructor(tutor, name, specie, pic, birthdate) {
        this.tutor = tutor;
        this.name = name;
        this.specie = specie;
        this.pic = pic;
        this.birthdate = birthdate;
        this.age = this.calculateAge();
    }

    calculateAge() {
        const actualDate = new Date();
        const birthDate = new Date(this.birthdate);

        const actualYear = actualDate.getFullYear();
        const actualMonth = actualDate.getMonth() + 1; // Mês começa em 0, então somamos 1
        const actualDay = actualDate.getDate();

        const birthYear = birthDate.getFullYear();
        const birthMonth = birthDate.getMonth() + 1;
        const birthDay = birthDate.getDate();

        let userAge = actualYear - birthYear;

        if ((actualMonth < birthMonth) || (actualMonth === birthMonth && actualDay < birthDay)) {
            userAge--;
        }
        return userAge;
    }
}

class PetsList {
    constructor() {
        this.pets = [];
    }

    addPet(pet) {
        if (isAnyInputEmpty()) {
            sendErrorMsg("Por favor, preencha todos os campos.", "error")
        } else if (!isURLValid(pet.pic)) {
            sendErrorMsg("URL inválida.", "error")
        } 
        else {
            sendSuccessMsg("Seu Pet foi cadastrado!", "success")
            this.pets.push(pet);
            clearInputs();
        }
    }

    countPets() {
        return this.pets.length;
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
        console.log(pet.pic);
        showContent += `
        <div class="divEachPet">
        <p><strong>Tutor: </strong>${pet.tutor}</p>
        <p><strong>Nome do Pet: </strong>${pet.name}</p>
        <p><strong>Espécie: </strong>${pet.specie}</p>
        <p><strong>Data de Nascimento: </strong>${dateInPTBR(pet.birthdate)}</p>
        <p><strong>Idade: </strong>${pet.age}</p>
        <img src="${pet.pic}">
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

function isURLValid(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function sendErrorMsg(msg) {

    document.getElementById("divError").innerHTML = msg;
    document.getElementById("divError").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("divError").classList.add("hidden");
    }, 2000);
}

function sendSuccessMsg(msg) {

    document.getElementById("divSuccess").innerHTML = msg;
    document.getElementById("divSuccess").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("divSuccess").classList.add("hidden");
    }, 2000);
}

function showRegister() {
    document.getElementById("subDiv").classList.add("hidden");
    document.getElementById("mainDiv").classList.remove("hidden");
}

function renderContent() {
    let isThereAnyRegister = petsList.countPets();

    if (isThereAnyRegister != 0) {
        document.getElementById("subDiv").classList.remove("hidden");
        document.getElementById("mainDiv").classList.add("hidden");
        showPets();
    }
    else {
        sendErrorMsg("Nenhum Pet foi cadastrado.", "error")
    }
}