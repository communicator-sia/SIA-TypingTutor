(function() {
	"use strict";

	/**
	 * @ngdoc object
	 * @name typingTutor
	 * @description Socially Aware Application (SAA) Typing Tutor.
	 */
	angular
		.module("typingTutor", ["ui.router", "ui.bootstrap", "ngAnimate", "ngCookies"])
		.config(config, "config")
		.run(run, "run");

	config.$inject = ["$urlRouterProvider", "$stateProvider"];

	function config($urlRouterProvider, $stateProvider) {

		var referencaTrenutniModal;

		// For any unmatched url, redirect
		$urlRouterProvider
			.otherwise("/");


		$stateProvider
			.state("menu", {
				url: "/",
				templateUrl: "partials/menu.html",
				controller: "MenuController",
				controllerAs: "MenuCtrl",
				// cache: false
				onEnter: function() {
					console.log("onEnter menu state");
				}
			})
	}

	run.$inject = ["$location", "$rootScope"];

	function run($location, $rootScope) {
		// ob refreshu brskalnika (F5) se aplikacija vedno postavi na zacetek
		$location.path("/");

		//console.log("In function run");

		$rootScope.$on('$stateChangeStart',
			function(event, toState, toParams, fromState, fromParams) {
				//console.log("Application has switched from state", fromState, "to state", toState, "from parameters", fromParams, "to parameters", toParams);
				console.log("PREHOD STANJ:", fromState.name, "-->", toState.name);
		});
	}
})();
