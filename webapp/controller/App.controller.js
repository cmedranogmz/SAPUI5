sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "invoices/model/models",
    "sap/ui/model/resource/ResourceModel"
],   
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, models, ResourceModel) {
        "use strict";
    
        return Controller.extend("invoices.controller.App", {
            onInit: function () {

                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

                /**
                // Set data model on the view
                this.getView().setModel(models.createRecipient());
                
                // Set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName : "invoices.i18n.i18n" }); 
                this.getView().setModel(i18nModel, "i18n");  */
                
            }, 
            
            /** onShowHello: function(){
                //MessageToast.show("Hello world...");

                //Read text fromi18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //Read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg); 
            }*/
            
            onOpenDialogHeader: function(){
                this.getOwnerComponent().openHelloDialog();
            } 
        });
    });
