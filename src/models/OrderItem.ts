import Product from "./Product";

export default class OrderItem {
    public product : Product;
    public qty : number;
    private _valueCalculated: number;

    constructor(product: Product, qty: number) {
        this.product = product;
        this.qty = qty;
        this._valueCalculated = 0;
    }

    public valueCalculated() : number {
        return this._valueCalculated = this.product.price * this.qty;
    }

}