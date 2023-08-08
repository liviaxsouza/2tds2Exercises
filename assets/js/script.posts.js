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
        showPosts()
    } else {
        alert("Preencha todos os campos");
    }
}

function cleanFields() {
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputCategory").value = "";
    document.getElementById("inputResume").value = "";
    document.getElementById("inputAuthor").value = "";
    document.getElementById("inputDate").value = "";
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

function showPosts() {
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="itemPost">
            <h2>${post.title}</h2>
            <p><strong>Categoria: </strong>${post.category}</p>
            <p><strong>Resumo: </strong>${post.resume}</p>
            <p><strong>Autor: </strong>${post.author}</p>
            <p><strong>Data de publicação: </strong>${post.date}</p>

            <button onclick="editPost(${index})">Editar</button>
            <button onclick="deletePost(${index})">Excluir</button>

        </div>
        `;
    })

    document.getElementById("list").innerHTML = showContent;
}