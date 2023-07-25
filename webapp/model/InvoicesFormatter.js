// @ts-nocheck
sap.ui.define([], 

function() {
    return {
        invoiceStatus: function(sStatus){
            const resourceBunder = this.getView().getModel("i18n").getResourceBundle();

            switch(sStatus){
                case 'A': return resourceBunder.getText("invoiceStatusA");
                case 'B': return resourceBunder.getText("invoiceStatusB");
                case 'C': return resourceBunder.getText("invoiceStatusC");
                default : return sStatus;
            }
        }
    } 
});