public with sharing class TaskListService {
    @AuraEnabled(cacheable=true)
    public static List<project_cloud__Project_Task__c> getTasks() {
        return [SELECT Id, Name, project_cloud__Project_Phase__r.Name
                FROM project_cloud__Project_Task__c
                WHERE project_cloud__Project_Phase__c != null
                LIMIT 10];
    }
    @AuraEnabled
    public static List<project_cloud__Ticket__c> getTickets(Id taskId) {
        return [SELECT Id, Name 
                FROM project_cloud__Ticket__c 
                WHERE project_cloud__Project_Task__c = :taskId];
    }
}
