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
    }

    // C(R)UD: Read

    listTeams() {
        return this.teams;
    }

    listTeamsById(id) {
        return this.teams.filter((team) => team.id == id);
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
        <div>
        <p>Nome: ${team.name}</p>
        </div>
        `;
    });

    elementList.innerHTML = content;

    console.log(teams);
}
