(function() {
	"use strict";

	angular
		.module("typingTutor")
		.controller("MenuController", MenuController);

	MenuController.$inject = ["$rootScope", "$scope", "$uibModal", "$state", "asynchronousCallsService", "audioService"];

	/**
	 * @ngdoc controller
	 * @name typingTutor.controller:MenuController
	 * @description
	 * Controller, ki kontrolira pogled <i>menu.html</i>
	 * <pre>
	 * http://nacomnet.lucami.org/expApp/typingTutor/#/
	 * </pre>
	 * Dostop do tega pogleda je mogoc prek brskalnikove naslovne vrstice in prek brskalnikovih BACK/FORWARD gumbov.
	 * @requires $scope
	 * @requires $uibModal
	 * @requires $state
	 * @requires typingTutor.service:sharedStatesService
	 * @requires typingTutor.service:asynchronousCallsService
	 * @requires typingTutor.service:audioService
	 */

	function MenuController($rootScope, $scope, $uibModal, $state, asynchronousCallsService, audioService) {
		//console.log("In MenuController");
		var vm = this;

		vm.besedilo = "To je osnovni menu";
	}

})();
