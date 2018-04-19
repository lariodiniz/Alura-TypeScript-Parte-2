class View {
    constructor(selector) {
        this._elemento = $(selector);
    }
    update(modal) {
        this._elemento.html(this.template(modal));
    }
}
