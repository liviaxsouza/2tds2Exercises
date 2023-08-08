function savePost() {
    const title = document.getElementById("inputTitle").value;
    const category = document.getElementById("inputCategory").value;
    const resume = document.getElementById("inputResume").value;
    const author = document.getElementById("inputAuthor").value;
    const date = document.getElementById("inputDate").value;

    console.log(title, category, resume, author, date);

    cleanFields();
}

function cleanFields() {
    const title = document.getElementById("inputTitle").value = "";
    const category = document.getElementById("inputCategory").value = "";
    const resume = document.getElementById("inputResume").value = "";
    const author = document.getElementById("inputAuthor").value = "";
    const date = document.getElementById("inputDate").value = "";
}