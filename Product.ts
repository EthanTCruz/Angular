

export class Product{
    public get category(): string {
        return this._category;
    }
    public set category(value: string) {
        this._category = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get code(): string {
        return this._code;
    }
    public set code(value: string) {
        this._code = value;
    }


    constructor(private _code: string,private _name: string,private _category: string,private _price: number) {

    }


}
