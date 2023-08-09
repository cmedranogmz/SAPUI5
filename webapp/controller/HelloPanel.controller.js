sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/base/Log"
],   
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.core.Fragment} Fragment
     * @param {typeof sap.base.Log} Log
     */
    function (Controller, MessageToast, Fragment, Log) {
        "use strict";

        return Controller.extend("invoices.controller.HelloPanel", {
            onInit: function () {
            
            },

            onBeforeRendering: function(){
                Window.message = "LOG MESSAGE - Mensaje de error de prueba";
                Log.info(Window.message);
                Log.error(Window.message);
            },

            onAfterRendering: function(){
                Window.message = "Breakpoint en vista Debug - Detiene la ejecución";
                Log.error(Window.message);
                //debugger;
            },
            
            onShowHello: function(){
                //Read text fromi18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //Read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg); 
            },

            onOpenDialog: function () {

                /** const oView = this.getView();
                
                if (!this.byId("helloDialog")){
                    Fragment.load({
                        id : oView.getId(),
                        name: "invoices.view.HelloDialog",
                        controller: this
                    }).then(function (oDialog){
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });    
                } else{
                    this.byId("helloDialog").open();
                } **/
                
                this.getOwnerComponent().openHelloDialog();
                          
            },

            onCloseDialog : function (){
                this.byId("helloDialog").close();
            }

        });
    });

