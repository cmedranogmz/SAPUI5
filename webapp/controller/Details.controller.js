sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.routing.History} History
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */
    function (Controller, History, UIComponent) {
        "use strict";

        return Controller.extend("invoices.controller.Details", {
            
            _onObjectMatch: function(oEvent){
                this.byId("rating").reset();
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                    model: "invoices"
                });
            },

            onInit: function () {  
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteDetails").attachPatternMatched(this._onObjectMatch, this);
            },

            onNavBack: function () {
                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();

                // Validar si existe una navegacion a vista anterior
                if (sPreviousHash !== undefined) {
                    // Navegar a vista anterior
                    window.history.go(-1);
                } else {
                    // Navegar a la pagina principal
                    const oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteApp", {}, true);
                }
            },

            onRatingChange: function(oEvent){
                const fvalue = oEvent.getParameter("value");
                const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

                sap.m.MessageToast.show(oResourceBundle.getText("productRatingConfirmation", [fvalue]))
            }

        });
    });
