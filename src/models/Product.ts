import BaseModel from "./BaseModel";

export default class Product extends BaseModel {
    private _code: string;
    private _name: string;
    private _price: number;

    public get code(): string {
        return this._code;
    }
    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    constructor(code: string, name: string, price: number,id: string, createdAt: Date, updatedAt: Date) {
        super(id, createdAt, updatedAt);
        this._code = code;
        this._name = name
        this._price = price;
    }

}