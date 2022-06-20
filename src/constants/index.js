import { bretzel } from '../assets';
import { carousel1_1, carousel1_2, carousel1_3, carousel1_4, carousel1_5, carousel1_6, carousel1_7, carousel1_8, carousel2_1, carousel2_2, carousel2_3, carousel2_4, carousel2_5, carousel2_6, carousel2_7, carousel2_8 } from '../assets';
        
import {
    testimoniesCollage1,
    testimoniesCollage2,
    testimoniesCollage3,
    testimoniesCollage4,
    testimoniesCollage5,
    testimoniesCollage6,
    testimoniesCollage7,
    testimoniesCollage8,
    testimoniesCollage9,
    testimoniesCollage10,
    testimoniesCollage11
} from '../assets'


    //fake testing products
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
    new Product(bretzel, 'title', 'some delicious description', 10, 'categorie'),
    new Product(bretzel, 'title', 'some delicious description', 10, 'categorie'),
    new Product(bretzel, 'title', 'some delicious description', 10, 'categorie'),
    new Product(bretzel, 'title', 'some delicious description', 10, 'categorie'),
    new Product(bretzel, 'title', 'some delicious description', 10, 'categorie'),
]



        //carousel images
const carouselOneImages = [
    carousel1_1,
    carousel1_2,
    carousel1_3,
    carousel1_4,
    carousel1_5,
    carousel1_6,
    carousel1_7,
    carousel1_8,
]

const carouselTwoImages = [
    carousel2_1,
    carousel2_2,
    carousel2_3,
    carousel2_4,
    carousel2_5,
    carousel2_6,
    carousel2_7,
    carousel2_8,
]


    // testimonies collage
const testimoniesCollageImages = [
    testimoniesCollage1,
    testimoniesCollage2,
    testimoniesCollage3,
    testimoniesCollage4,
    testimoniesCollage5,
    testimoniesCollage6,
    testimoniesCollage7,
    testimoniesCollage8,
    testimoniesCollage9,
    testimoniesCollage10,
    testimoniesCollage11   
]



export {
    products,
    carouselOneImages,
    carouselTwoImages,
    testimoniesCollageImages
}