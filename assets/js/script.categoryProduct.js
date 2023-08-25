// Uma categoria possui vários produtos.

class Category {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

// Produto pertence a uma categoria.
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 0;
    }

    addCategory(name) {
        const id = this.nextCategoryId++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService {
    constructor() {
        this.products = [];
        this.nextProductId = 0;
    }

    addProduct(name, price, category) {
        const id = this.nextProductId++;
        const product = new Product(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }
}

const categoryList = new CategoryService();
const productList = new ProductService();

function createCategory() {
    const categoryName = document.getElementById("categoryName").value;
    categoryList.addCategory(categoryName);

    displayCategoriesAndProducts()
    clearFormFields();

    document.getElementById("categoriesList").innerHTML = categoryName;
}

function createProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCategory = document.getElementById("productCategory").value;

    productList.addProduct(productName, productPrice, productCategory);
}

function clearFormFields() {
    document.getElementById("categoryName").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
}

function displayCategoriesAndProducts() {
    let showContent = "";

    categoryList.categories.forEach(category => {
        showContent += `
        <li>
        <div class="categoriesList">
        <span><b>Categoria: </b>${category.name}</span>

        <div>
            <button class="editButton" onclick="edit">Editar</button>
            <button class="deleteButton" onclick="delete">Remover</button>
        </div>
        </div>

        <ul class="productsListByCategory">`;
        category.products.forEach(product => {
            showContent += `
            <li>
            <div class="productList">
            <span><b>Produto: </b>${product.name} - <b>Preço: </b>${product.price}<span>

            <div>
            <button class="editButton" onclick="edit">Editar</button>
            <button class="deleteButton" onclick="delete">Remover</button>
        </div>
        </div>`;

});
showContent += `
    </li>
    </ul>  
`
});

    document.getElementById("categoriesList").innerHTML = showContent;
}