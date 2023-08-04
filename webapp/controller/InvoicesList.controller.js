// @ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], 

/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.ui.model.json.SJONModel} JSONModel
 * @param {typeof model.InvoicesFormatter} InvoicesFormatter
 * @param {typeof sap.ui.model.Filter} Filter
 * @param {typeof sap.ui.model.FilterOpetator} FilterOperator
 * @returns 
 */

function(Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) {
    'use strict';
    
    return Controller.extend("invoices.controller.InvoicesList",{

        formatter: InvoicesFormatter,

        onInit: function(){
            var oViewModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            });
            this.getView().setModel(oViewModel, "currency");
        },

        onFilterInvoices: function(oEvent){
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");

            if(sQuery){
                aFilter.push( new Filter("ProductName", FilterOperator.Contains, sQuery));
            };

            const oList = this.getView().byId("invoices");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        }, 

        viewInvoiceDetails: function(oEvent){
            const oItem = oEvent.getSource();
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteDetails", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoices").getPath().substr(1))
            }); 
        }
    });

});