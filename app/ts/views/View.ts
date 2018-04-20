
export abstract class View<T> {
    protected _elemento: JQuery;

    constructor(selector: string){
        this._elemento = $(selector);
    }

    update(modal:T): void{
        this._elemento.html(this.template(modal));
    }

    abstract template(modal:T): string;
}
