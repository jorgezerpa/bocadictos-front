import { Fake } from '../assets';

class Product {
    constructor(image, name, description, price, category ){
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.id = Math.random()*4000;
        this.quantity = 0;
    }
}


const products = [
    new Product(Fake, 'title', 'some delicious description', 10, 'categorie'),
    new Product(Fake, 'title', 'some delicious description', 10, 'categorie'),
    new Product(Fake, 'title', 'some delicious description', 10, 'categorie'),
    new Product(Fake, 'title', 'some delicious description', 10, 'categorie'),
    new Product(Fake, 'title', 'some delicious description', 10, 'categorie'),
]


export {
    products,
}