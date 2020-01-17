/* eslint-disable no-console */
import { LightningElement, api, wire, track } from 'lwc';
import GET_WOS from '@salesforce/apex/FSLQueryService.getWorkOrders';
import GET_APPTS from '@salesforce/apex/FSLQueryService.getAppts';
import { deleteRecord } from 'lightning/uiRecordApi';
// import { refreshApex } from '@salesforce/apex';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
// import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
// import ID_FIELD from '@salesforce/schema/Contact.Id';

const actions = [
    { label: 'Show details', name: 'show_details' },
    { label: 'Delete', name: 'delete' },
];

const COLS = [
//{ type: 'button-icon', fixedWidth: 30, typeAttributes: { iconName: 'utility:preview', name: 'see_record', title: 'seeRecord', variant: 'bare', alternativeText: 'seeRecord', disabled: false } },
{ label: 'Project Task', fieldApiName: 'Project_Task__c', type:'text' },
{ label: 'Id', fieldName: 'Id', editable: false },
{ label: 'Account Id', fieldName: 'AccountId', editable: false },
{ label: 'Duration', fieldName: 'Duration', editable: true },
{ label: 'Description', fieldName: 'Description', editable: true },
{
    type: 'action',
    typeAttributes: { rowActions: actions },
},
//{ type: 'button-icon', fixedWidth: 30, typeAttributes: { iconName: 'utility:close', name: 'delete_record', title: 'Delete', variant: 'bare', alternativeText: 'delete', disabled: false } },
];

const COLSTWO = [
//{ type: 'button-icon', fixedWidth: 30, typeAttributes: { iconName: 'utility:preview', name: 'see_record', title: 'See Record', variant: 'bare', alternativeText: 'seeRecord', disabled: false } },
{ label: 'Id', fieldName: 'Id', editable: false},
{ label: 'Work Order', fieldName: 'Work_Order__c', editable: false},
{ label: 'Account Id', fieldName: 'Account', editable: false},
{ label: 'Status', fieldName: 'Status', editable: true},
{ label: 'Duration', fieldName: 'Duration', editable: true},
{
    type: 'action',
    typeAttributes: { rowActions: actions },
},
//pe: 'button-icon', fixedWidth: 30, typeAttributes: { iconName: 'utility:close', name: 'delete_record', title: 'Delete', variant: 'bare', alternativeText: 'delete', disabled: false } },
]; 
export default class FSLcomponent extends LightningElement {
    @api recordId
    @track record = {};
    @wire(GET_WOS) woList
    @wire(GET_APPTS) apptList
    @track columns = COLS;
    @track columnstwo = COLSTWO;
    @track clickedButtonLabel;


    handleRowAction(event) {
    const actionName = event.detail.action.name;
    const row = event.detail.row;
    switch (actionName) {
        case 'delete':
            this.deleteRow(row);
            break;
        case 'show_details':
            this.showRowDetails(row);
            break;
        default:
    }
}

    deleteRow(row) {
        const { id } = row;
        const index = this.findRowIndexById(id);
        if (index !== -1) {
            this.data = this.data
                .slice(0, index)
                .concat(this.data.slice(index + 1));
        }
    }

    findRowIndexById(id) {
        let ret = -1;
        this.data.some((row, index) => {
            if (row.id === id) {
                ret = index;
                return true;
            }
            return false;
        });
        return ret;
    }

    showRowDetails(row) {
        this.record = row;
    }




}


// @track error;
// @track draftValues = [];

//  @wire(getContactList)
//  contact;

//     handleSave(event) {

//     const fields = {};
//     fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
//     fields[FIRSTNAME_FIELD.fieldApiName] = event.detail.draftValues[0].FirstName;
//     fields[LASTNAME_FIELD.fieldApiName] = event.detail.draftValues[0].LastName;

//     const recordInput = {fields};

//     updateRecord(recordInput)
//     .then(() => {
//         this.dispatchEvent(
//             new ShowToastEvent({
//                 title: 'Success',
//                 message: 'Contact updated',
//                 variant: 'success'
//             })ß
//         );
//         // Clear all draft values
//         this.draftValues = [];

//         // Display fresh data in the datatable
//         return refreshApex(this.contact);
//     }).catch(error => {
//         this.dispatchEvent(
//             new ShowToastEvent({
//                 title: 'Error creating record',
//                 message: error.body.message,
//                 variant: 'error'
//             })
//         );
//     });
// }