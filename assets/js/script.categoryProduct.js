// Uma categoria possui vários produtos.

class Category {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

// Produto pertence a uma categoria.
class Products {
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

const categoryService = new CategoryService();

function createCategory() {
    const categoryName = "Doce";

    categoryService.addCategory(categoryName);

    console.log(categoryService.categories);
}