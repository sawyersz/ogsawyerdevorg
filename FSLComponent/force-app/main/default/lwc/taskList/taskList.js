import { LightningElement, wire, api } from 'lwc'
import GET_TASKS from '@salesforce/apex/TaskListService.getTasks'
export default class TaskList extends LightningElement {
	@api recordId

	@wire(GET_TASKS) taskList
	// taskList({ data, error }) {
	// 	if (data) {
	// 		console.log(data)
	// 	} else if (error) {
	// 		console.error(error)
	// 	}
	// }
	showRecordId() {
		alert(this.recordId)
	}
}