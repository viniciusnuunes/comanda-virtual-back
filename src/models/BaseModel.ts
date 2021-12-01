export default abstract class BaseModel {
    readonly id : string;
    readonly createdAt : Date;
    private _updatedAt: Date;

    protected constructor(id: string,createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    public updatedAt(date : Date) : void {
        this._updatedAt = date;
    }
    public get updateAt() {
        return this._updatedAt;
    }
}