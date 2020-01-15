import { LightningElement, api, wire, track } from 'lwc';
import GET_TASKS from '@salesforce/apex/FSLQueryService.getTasks';
import GET_APPTS from '@salesforce/apex/FSLQueryService.getAppts';
// import { updateRecord } from 'lightning/uiRecordApi';
// import { refreshApex } from '@salesforce/apex';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
// import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
// import ID_FIELD from '@salesforce/schema/Contact.Id';


const COLS = [
    { label: 'Id', fieldName: 'Id', editable: false },
    { label: 'Project Task', fieldName: 'Project Task', editable: false },
    { label: 'Account Id', fieldName: 'Account', editable: false },
    { label: 'Duration', fieldName: 'Duration' },
    { label: 'Description', fieldName: 'Description' }
];

const COLSTWO = [
    { label: 'Id', fieldName: 'Id', editable: false},
    { label: 'Work Order', fieldName: 'Work Order', editable: false},
    { label: 'Account Id', fieldName: 'Account', editable: false},
    { label: 'Status', fieldName: 'Status', editable: false},
    { label: 'Duration', fieldName: 'Duration', editable: false}
];


export default class FSLcomponent extends LightningElement {
     @api recordId
     @wire(GET_TASKS) taskList
     @wire(GET_APPTS) apptList
     @track columns = COLS;
     @track columnstwo = COLSTWO;

    // @track error;
    // @track draftValues = [];

    //  @wire(getContactList)
    //  contact;

}


    // handleSave(event) {

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
    //             })
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
