// CRUD: Create, Read, Update, Delete.

class Team {
    constructor(name, holders) {
        this.name = name;
        this.holders = holders;
        this.id = this.generateId();
        this.reserves = this.calculateReserves();
        this.total = this.calculateTotal();
    }

    generateId() {
        return Math.floor(Math.random() * 1000);
    }

    calculateReserves() {
        return Math.floor(this.holders / 2);
    }

    calculateTotal() {
        return this.holders + this.reserves;
    }
}

class TeamsService {
    constructor() {
        this.teams = [];
    }

    // (C)RUD: Create

    addTeam(team) {
        this.teams.push(team);
        clearFields();
    }

    // C(R)UD: Read

    listTeams() {
        return this.teams;
    }

    listTeamsById(id) {
        return this.teams.find((team) => team.id == id);
    }

    attTeam(id, name, holders) {
        const team = teamsService.listTeamsById(id);

        team.name = name;
        team.holders = holders;
        team.reserves = team.calculateReserves();
        team.total = team.calculateTotal();

        return team;
    }

    deleteTeam(id) {
        return (this.teams = this.teams.filter(
            (team) => team.id != id));
    }
}

const teamsService = new TeamsService();

function createTeam() {
    const name = document.getElementById("input-name").value;
    const holders = Number(document.getElementById("input-holders").value);

    const team = new Team(name, holders);

    teamsService.addTeam(team);

    listTeams();
}

function listTeams() {
    const teams = teamsService.listTeams();

    const elementList = document.getElementById("list-teams");
    elementList.innerHTML = "";

    let content = "";

    teams.forEach((team) => {
        content += `
        <div onclick="listTeamsById(${team.id})">
        <p>Nome: ${team.name}</p>
        </div>
        `;
    });

    elementList.innerHTML = content;

    console.log(teams);
}

function listTeamsById(id) {
    const team = teamsService.listTeamsById(id);

    const elementList = document.getElementById("list-single-team");
    document.getElementById("list-single-team").classList.remove("hidden");

    elementList.innerHTML = "";

    let content = `
    <div>
    <p>ID: ${team.id}</p>
    <p>Nome: ${team.name}</p>
    <p>Total de jogadores: ${team.total}</p>
    <p>Titulares: ${team.holders}</p>
    <p>Reservas: ${team.reserves}</p>
    <button onclick="attTeam(${team.id})">Editar</button>
    </div>
    `

    elementList.innerHTML = content;
}

function clearFields() {
    document.getElementById("input-name").value = "";
    document.getElementById("input-holders").value = "";
}

let aux = null;

function attTeam(id) {
    const team = teamsService.listTeamsById(id);

    document.getElementById("input-name").value = team.name;
    document.getElementById("input-holders").value = team.holders;

    document.getElementById("btn-cadaster").classList.add("hidden");
    document.getElementById("btn-edit").classList.remove("hidden");

    aux = id;
}

function editTeam() {
    const name = document.getElementById("input-name").value;
    const holders = Number(document.getElementById("input-holders").value);

    teamsService.attTeam(aux, name, holders);

    listTeams();
    clearFields();

    document.getElementById("btn-cadaster").classList.remove("hidden");
    document.getElementById("btn-edit").classList.add("hidden");
    document.getElementById("list-single-team").classList.add("hidden");

    aux = null;
}

function deleteTeam(id) {
    teamsService.deleteTeam(id);

    listTeams();

    document.getElementById("list-single-team").classList.add("hidden");
}