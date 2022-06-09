import { Fake } from '../assets';

class Article {
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


const articles = [
    new Article(Fake, 'title', 'some delicious description', 10, 'categorie'),
    new Article(Fake, 'title', 'some delicious description', 10, 'categorie'),
    new Article(Fake, 'title', 'some delicious description', 10, 'categorie'),
    new Article(Fake, 'title', 'some delicious description', 10, 'categorie'),
    new Article(Fake, 'title', 'some delicious description', 10, 'categorie'),
]


export {
    articles,
}