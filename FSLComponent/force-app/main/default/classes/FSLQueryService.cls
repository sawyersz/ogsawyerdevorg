public with sharing class FSLQueryService {
        @AuraEnabled(cacheable=true)
        public static List<WorkOrder> getTasks() {
            return [SELECT Id, AccountId, Duration, Description
                    FROM WorkOrder
                    LIMIT 10];
        }
        @AuraEnabled(cacheable=true)
        public static List<ServiceAppointment> getAppts() {
                return [SELECT Id, Work_Order__c, AccountId, Status, Duration
                        FROM ServiceAppointment
                        LIMIT 10];
        }
    
}
