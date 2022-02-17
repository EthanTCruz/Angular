import {Product} from "./Product"

class ProductList{
    private productList:Product[];
    

    constructor(){
        const prod = new Product("aaa", "bbb", "ccc", 100);
        this.productList = [
            new Product("aaa", "bbb", "ccc", 100)
        ];
    }
}