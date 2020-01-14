public with sharing class FSLQueryService {
        @AuraEnabled(cacheable=true)
        public static List<workOrders> getTasks() {
            return [SELECT Id, Name  
                    FROM workOrders
                    LIMIT 10];
        }
        
    
}
