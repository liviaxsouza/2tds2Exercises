const posts = [];
let postIndex = -1;

function savePost() {
    const title = document.getElementById('inputTitle').value;
    const category = document.getElementById('inputCategory').value;
    const resume = document.getElementById('inputResume').value;
    const author = document.getElementById('inputAuthor').value;
    const date = document.getElementById('inputDate').value;

    if (title && category && resume && author && date) {
        if (postIndex == -1) {
            storePost(title, category, resume, author, date);
            cleanFields();
            showPosts();
        } else {
            posts[postIndex] = {
                title,
                category,
                resume,
                author,
                date
            };
        }
        cleanFields();
        showPosts();
        postIndex = -1;
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

function storePost(title, category, resume, author, date) {
    const post = {
        title,
        category,
        resume,
        author,
        date
    };

posts.push(post);
}

function showPosts() {
    document.getElementById("list").classList.remove("hidden");
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
            <button onclick="removePost(${index})">Excluir</button>

        </div>
        `;
    })

    document.getElementById("list").innerHTML = showContent;
}

function editPost(index) {
    const post = posts[index];
    
    document.getElementById("inputTitle").value = post.title;
    document.getElementById("inputCategory").value = post.category;
    document.getElementById("inputResume").value = post.resume;
    document.getElementById("inputAuthor").value = post.author;
    document.getElementById("inputDate").value = post.date;

    postIndex = index;
}

function removePost(index) {
    posts.splice(index, 1);
    showPosts();

    if (posts.length == 0){
        document.getElementById("list").classList.add("hidden");
    }
}