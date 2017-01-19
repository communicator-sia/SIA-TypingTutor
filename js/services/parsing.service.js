(function() {
	"use strict";

	angular
		.module("typingTutor")
		.service("parsingService", parsingService);

	parsingService.$inject = ["asynchronousCallsService", "measurementsService", "sharedStatesService"];

	/**
	 * @ngdoc service
	 * @name typingTutor.service:parsingService
	 * @description
	 * Service, ki dobi meritve, jih preparsa v primerno obliko in poslje naprej.
	 * @requires typingTutor.service:asynchronousCallsService
	 * @requires typingTutor.service:measurementsService
	 * @requires typingTutor.service:sharedStatesService
	 */
	function parsingService(asynchronousCallsService, measurementsService, sharedStatesService) {
		//console.log("In parsingService");
		var vm = this;

		var sensorsValues = sharedStatesService.getSensors();

		var noldus = eval(sensorsValues.noldus);
		var tobii = eval(sensorsValues.tobii);
		var arduino = eval(sensorsValues.arduino);
		var wear = eval(sensorsValues.wear);

		return {
			postSensors: postSensors,
			postKeyboard: postKeyboard,
			emptyServer: emptyServer
		};

		function postKeyboard() {
			asynchronousCallsService.postKeyboard(measurementsService.getHistoryKeyboard()[sharedStatesService.getSteps()]);
		}

		function emptyServer() {
			console.log("In function emptyServer");
			asynchronousCallsService.emptyServer();
		}

		function postSensors() {
			if (noldus) {
				asynchronousCallsService.requestNoldusFaceReader()
					.then(function(response) {
						//console.log("Dobljeni objekt od NoldusFaceReader", response.data);

						var result = {};
						var temp = [];

						var str = response.data.NoldusDetailedLog;

						for (var i = 0; i < str.length; i ++) {
							result = str[i];
							// dodajanje timestampa
							result.casovniZig = Date.now();
							result.exerciseIdentifier = sharedStatesService.getExerciseIdentifier();
							measurementsService.addToHistoryNoldusFaceReader(result);
							temp.push(result);
						}

						return asynchronousCallsService.postNoldusFaceReader(temp);

					})
					// vpisi v MongoDB
					.then(function(response) {
						//console.log("Success in function asynchronousCallsService.postNoldusFaceReader", response);
					});
			}

			if (tobii) {
				asynchronousCallsService.requestTobiiEyeTracker()
					.then(function(response) {

						//console.log("Dobljeni objekt od  TobiiEyeTracker", response.data);

						var result = {};
						var temp = [];

						var str = response.data.TobiiDetailedLog;

						for (var i = 0; i < str.length; i ++) {
							result = str[i].tobiiEyeTracker;
							// dodajanje timestampa
							result.casovniZig = Date.now();
							result.exerciseIdentifier = sharedStatesService.getExerciseIdentifier();
							measurementsService.addToHistoryTobiiEyeTracker(result);
							temp.push(result);
						}

						return asynchronousCallsService.postTobiiEyeTracker(temp)

					})
					// vpisi v MongoDB
					.then(function(response) {
						//console.log("Success in function asynchronousCallsService.postTobiiEyeTracker", response);
					});
			}

			if (arduino) {
				asynchronousCallsService.requestArduino_MPU6050()
					.then(function(response) {

						//console.log("Dobljeni objekt od Arduino_MPU6050", response.data);

						var result = {};
						var temp = [];

						var str = response.data.TobiiDetailedLog;

						for (var i = 0; i < str.length; i ++) {
							result = str[i].arduinoDetailedLog;
							// dodajanje timestampa
							result.casovniZig = Date.now();
							result.exerciseIdentifier = sharedStatesService.getExerciseIdentifier();
							measurementsService.addToHistoryArduino_MPU6050(result);
							temp.push(result);
						}

						return asynchronousCallsService.postArduino_MPU6050(temp);
					})
					// vpisi v MongoDB
					.then(function(response) {
						//console.log("Success in function asynchronousCallsService.postArduino_MPU6050", response);
					});
			}

			if (wear) {
				asynchronousCallsService.requestAndroidWear_M360()
					.then(function(response) {

						//console.log("Dobljeni objekt od             Wear", response.data);

						var result = {};
						var temp = [];

						var str = response.data.wearLog;

						for (var i = 0; i < str.length; i ++) {
							result = str[i];
							// dodajanje timestampa
							result.casovniZig = Date.now();
							result.exerciseIdentifier = sharedStatesService.getExerciseIdentifier();
							measurementsService.addToHistoryAndroidWear_M360(result);
							temp.push(result);
						}

						return asynchronousCallsService.postAndroidWear_M360(temp);
					})
					// vpisi v MongoDB
					.then(function(response) {
						//console.log("Success in function asynchronousCallsService.postAndroidWear_M360", response);
					});
			}
		}
	}

})();
