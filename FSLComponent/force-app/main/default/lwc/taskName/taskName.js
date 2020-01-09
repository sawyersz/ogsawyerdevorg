import { LightningElement, wire, api } from 'lwc';
import GET_TICKETS from '@salesforce/apex/TaskListService.getTickets'
export default class TaskName extends LightningElement {
	@api taskname
	@api taskid
	@wire(GET_TICKETS, { taskId: this.taskId }) tickets
}