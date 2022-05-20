import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { CurrentPageReference } from 'lightning/navigation';
import {fireEvent} from 'c/pubsub';

export default class SelectAccount extends LightningElement {

    @track accountList = [];
    @wire(CurrentPageReference) pageRef; 

    connectedCallback(){
        getAccounts({}).then( (response) => {
            console.log('response getAccounts',response);
        this.accountList = JSON.parse(response);
        }).catch((error) => {
            console.log('ocorreu um erro ao chamar o getAccounts ', error);
        });
    }

    handleAccount(event){
        let idAccount = event.detail.value;
        console.log('id da conta selecionada é',idAccount);
        fireEvent(this.pageRef, 'selectedAccount', idAccount);
    }

}