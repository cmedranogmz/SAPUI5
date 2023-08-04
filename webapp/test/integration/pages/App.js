sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";
	var sViewName = "App";
	
	Opa5.createPageObjects({
		onTheViewPage: {

			actions: {},

			assertions: {

				iShouldSeeThePageView: function () {
					return this.waitFor({
						id: "page",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				}
			}
		}
	});
});
