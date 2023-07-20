/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "invoices/model/models",
        "sap/ui/model/resource/ResourceModel"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.Devide} Device 
     * @param {typeof invoices.model.models} models 
     * @param {typeof sap.ui.model.resource.ResourceModel} models 
     * @returns 
     */

    function (UIComponent, Device, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("invoices.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // Set data model on the view
                this.setModel(models.createRecipient());
                
                // Set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName : "invoices.i18n.i18n" }); 
                this.setModel(i18nModel, "i18n"); 
            }

        });
    }
);