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
            sendMsg("Por favor, preencha todos os campos.", "error");
        } else if (!isURLValid(pet.pic)) {
            sendMsg("URL inválida.", "error"); 
        } else {
            sendMsg("Seu Pet foi cadastrado!", "success");
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
        <div id="divText">
        <p><strong>Tutor: </strong>${pet.tutor}</p>
        <p><strong>Nome do Pet: </strong>${pet.name}</p>
        <p><strong>Espécie: </strong>${pet.specie}</p>
        <p><strong>Data de Nascimento: </strong>${dateInPTBR(pet.birthdate)}</p>
        <p><strong>Idade: </strong>${pet.age}</p>
        </div>
        <div id="divImg">
        <img src="${pet.pic}" class="imgEachPet">
        </div>
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

function sendMsg(msg, msgType) {
    let msgDiv = document.getElementById("divMsg");
    msgDiv.innerHTML = "";

    let showMsg = `
    <p class="${msgType}">${msg}</p>
    `

    msgDiv.innerHTML += showMsg;

    setTimeout(function() {
        msgDiv.innerHTML = "";
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
        sendMsg("Nenhum Pet foi cadastrado.", "error")
    }
}