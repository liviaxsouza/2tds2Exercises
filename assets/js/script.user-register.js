class User {
    constructor(name, email, birthdate, address, cellphone, cpf) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.address = address;
        this.cellphone = cellphone;
        this.cpf = cpf;
        this.sign = this.getZodiacSign();
        this.age = this.calculateAge();
        this.client = this.isPossibleClient();
    }

    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
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

    isPossibleClient() {
        if (this.age >= 18 && this.age <= 31) {
            return "Sim!"
        } else {
            return "Não!"
        }
    }
}

class UsersList {
    constructor() {
        this.users = [];
    }

    addUser(user) {
    if (isAnyInputEmpty()) {
        sendErrorMsg("Por favor, preencha todos os campos.");
    } else if (! validaCpf(user.cpf)) {
        sendErrorMsg(" CPF inválido.")
    } else if (isUserAlreadyRegistered(user.cpf)) {
        sendErrorMsg("CPF já cadastrado.");
    } else {
        this.users.push(user);
        sendSuccessMsg("Você foi registrado na lista de espera!")
        clearInputs();
        showUsers()
    }
    }

    getAllUsers() {
        return this.users;
    }

    countUsers() {
        return this.users.length;
    }
}

const usersList = new UsersList();

function createUser() {
    userName = document.getElementById("inputName").value;
    userEmail = document.getElementById("inputEmail").value;
    userBirthDate = document.getElementById("inputBirthDate").value;
    userAddress = document.getElementById("inputAddress").value;
    userPhone = document.getElementById("inputPhone").value;
    userCpf = document.getElementById("inputCpf").value;

    const user = new User (userName, userEmail, userBirthDate, userAddress, userPhone, userCpf);

    usersList.addUser(user);
}

function showUsers() {
    let showContent = '';

    usersList.users.forEach(user => {
        showContent += `
        <div class="listEachUser">
        <p><strong>Nome: </strong>${user.name}</p>
        <p><strong>E-mail: </strong>${user.email}</p>
        <p><strong>Data de nascimento: </strong>${dateInPTBR(user.birthdate)}</p>
        <p><strong>Idade: </strong>${user.age}</p>
        <p><strong>Signo: </strong>${user.sign}</p>
        <p><strong>Cidade: </strong>${user.address}</p>
        <p><strong>Celular: </strong>${formatedCellphone(user.cellphone)}</p>
        <p><strong>CPF: </strong>${formatedCPF(user.cpf)}</p>
        <p><strong>Possível cliente?: </strong>${user.client}</p>
        </div>
        `
    });

    document.getElementById("userList").innerHTML = showContent;
    document.getElementById("pContador").innerHTML = `Contador: ${usersList.countUsers()}`;
}

function clearInputs() {
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputBirthDate").value = "";
    document.getElementById("inputAddress").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputCpf").value = "";
}

function isAnyInputEmpty() {
    userName = document.getElementById("inputName").value;
    userEmail = document.getElementById("inputEmail").value;
    userBirthDate = document.getElementById("inputBirthDate").value;
    userAddress = document.getElementById("inputAddress").value;
    userPhone = document.getElementById("inputPhone").value;
    userCpf = document.getElementById("inputCpf").value;

    if (userName == "" || userEmail == "" || userBirthDate == "" || userAddress == "" || userPhone == "" || userCpf == "" ) {
        return true;
    } else {
        return false;
    }
}

function showRegister() {

    document.getElementById("subDiv").classList.add("hidden");
    document.getElementById("titlePage").classList.remove("hidden");
    document.getElementById("mainDiv").classList.remove("hidden");
}

function renderContent() {
    let isThereAnyUser = usersList.countUsers();

    if (isThereAnyUser != 0) {
        document.getElementById("subDiv").classList.remove("hidden");
        document.getElementById("titlePage").classList.add("hidden");
        document.getElementById("mainDiv").classList.add("hidden");
    } else {
        sendErrorMsg("Nenhum cadastro foi realizado.")
    }
}

function formatedCPF(cpf) {

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}

function validaCpf(cpf) {

    var numeros, digitos, soma, i, resultado, digitosIguais;
    digitosIguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitosIguais = 0;
            break;
        }
    if (!digitosIguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function isUserAlreadyRegistered(cpf) {
    let userRegistered = false;

    usersList.users.forEach(user => {
        if (user.cpf == cpf) {
            return userRegistered = true;
        }
    });
    return userRegistered;
}

function formatedCellphone(cellphone) {

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function dateInPTBR(date) {
    const partes = date.split('-');
  
  // Verificar se a data está no formato correto (ano-mês-dia)
  if (partes.length !== 3) {
    return "Formato de data incorreto. Use o formato AAAA-MM-DD.";
  }
  
  // Montar a data no formato brasileiro (dia/mês/ano)
  const dataBrasileira = `${partes[2]}/${partes[1]}/${partes[0]}`;
  
  return dataBrasileira;
}

dateInPTBR

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