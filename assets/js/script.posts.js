const posts = [];

function savePost() {
    const title = document.getElementById("inputTitle").value;
    const category = document.getElementById("inputCategory").value;
    const resume = document.getElementById("inputResume").value;
    const author = document.getElementById("inputAuthor").value;
    const date = document.getElementById("inputDate").value;

    if (title && category && resume && author && date) {
        storePosts(title, category, resume, author, date);
        cleanFields();
    } else {
        alert("Preencha todos os campos");
    }
}

function cleanFields() {
    const title = document.getElementById("inputTitle").value = "";
    const category = document.getElementById("inputCategory").value = "";
    const resume = document.getElementById("inputResume").value = "";
    const author = document.getElementById("inputAuthor").value = "";
    const date = document.getElementById("inputDate").value = "";
}

function storePosts(title, category, resume, author, date) {

    const post = {
        title,
        category,
        resume,
        author,
        date
    };

posts.push(post);

console.log(posts);
}