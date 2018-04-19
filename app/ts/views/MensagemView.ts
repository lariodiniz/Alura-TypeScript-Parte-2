class MensagemView extends View<string> {

    template(modal:string): string{
        return `
        <p class="alert alert-info" >${modal}</p>
        `
    }
}