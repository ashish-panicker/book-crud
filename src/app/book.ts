export class Book {

    id: number;
    author: string;
    title: string;
    price: number;

    constructor(id, author, title, price) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.price = price;
    }
}
