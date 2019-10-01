export class Book {

    id: number;
    author: string;
    title: string;
    price: number;

    constructor(id:number, author:string, title:string, price:number) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.price = price;
    }
}
