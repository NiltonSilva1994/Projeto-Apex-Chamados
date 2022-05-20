import { LightningElement, api, track } from 'lwc';

export default class AccountListCard extends LightningElement {
    _account;
    @api
    get account(){
        return this._account;
    }
    set account(value){

        let image = "https://imagens.tiespecialistas.com.br/2015/10/help-desk.png"

        this._account = {id : value.Id, nome : value.Name, imagem : image};

    }

    handleAccountSelected(){
        const accountSelected = new CustomEvent("selected", {
            detail: JSON.stringify(this._account),
        });
        console.log('esta disparando o evento no componente filho');
        this.dispatchEvent(accountSelected);
    }    
}