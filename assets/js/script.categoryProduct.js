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