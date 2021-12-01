import BaseModel from "./BaseModel";
import OrderItem from "./OrderItem";
import Product from "./Product";

export default class Order extends BaseModel {
    private _orderItens: Array<OrderItem>;
    private _total: number;

    public get total(): number {
        return this._total;
    }

    constructor(id: string, createdAt: Date, updatedAt: Date) {
        super(id, createdAt, updatedAt);
        this._orderItens = new Array<OrderItem>();
        this._total = 0;
    }

    public addItem(product: Product, qty: number): void {
        this._orderItens.push(new OrderItem(product, qty));
        this.refreshTotal();
    }

    private refreshTotal(): void {
        this._orderItens.forEach(item => {
            this._total += item.valueCalculated();
        });
    }

}