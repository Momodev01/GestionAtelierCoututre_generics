export class GenericService<T> {
    public list: T[] = [];

    public showlist(): T[] {
        return this.list
    }

    public addItem(item: T): void {
        this.list.push(item);
    }

    public removeItem(item: T): void {
        this.list = this.list.filter(i => i !== item);
    }

    public updateItem(item: T): void{
        let newItem: T  | undefined = this.list.find(i => i === item);
    }

}