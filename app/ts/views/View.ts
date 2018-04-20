
export abstract class View<T> {
    protected _elemento: JQuery;
    protected _escapar : boolean;

    constructor(selector: string, escapar: boolean = false){
        this._elemento = $(selector);
        this._escapar = escapar;
    }

    update(modal:T): void{
        
        let template = this.template(modal);

        if (this._escapar)
        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        this._elemento.html(template);
    }

    abstract template(modal:T): string;
}
