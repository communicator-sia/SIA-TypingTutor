(function() {
	"use strict";

	angular
		.module("typingTutor")
		.service("asynchronousCallsService", asynchronousCallsService);

	asynchronousCallsService.$inject = ["$http"];

	/**
	 * @ngdoc service
	 * @name typingTutor.service:asynchronousCallsService
	 * @description
	 * Service, ki nudi funkcije za izvajanje asinhronih GET/POST klicev.
	 * @requires $http
	 */

	function asynchronousCallsService($http) {
		//console.log("In asynchronousCallsService");

		var noldusFaceReaderUrl = "http://127.0.0.1:8080/noldusFaceReader",
			tobiiEyeTrackerUrl = "http://127.0.0.1:8080/tobiiEyetracker",
			arduino_MPU6050Url = "http://127.0.0.1:8080/arduino_MPU6050",
			androidWear_M360Url = "http://127.0.0.1:8080/wear",
			emptyServerUrl = "http://127.0.0.1:8080/emptyData";

		// vse tu so ASYNCANI REQUESTI, ki vrnejo promise
		// privzeto angularjs naredi headers: {"Content-Type": "application/json"}
		// GET caching in browser ---> tam kjer nam je to koristno

		return {
			postKeyboard: postKeyboard,
			postNoldusFaceReader: postNoldusFaceReader,
			postTobiiEyeTracker: postTobiiEyeTracker,
			postArduino_MPU6050: postArduino_MPU6050,
			postAndroidWear_M360: postAndroidWear_M360
		};

		// post merjenj v MongoDB podatkovno bazo
		function postKeyboard(x) {
			return $http({method: "POST", url: "php/post_keyboard.php", data: x});
		}
		function postNoldusFaceReader(x) {
			return $http({method: "POST", url: "php/post_noldus_face_reader.php", data: x});
		}
		function postTobiiEyeTracker(x) {
			return $http({method: "POST", url: "php/post_tobii_eye_tracker.php", data: x});
		}
		function postArduino_MPU6050(x) {
			return $http({method: "POST", url: "php/post_arduino_MPU6050.php", data: x});
		}
		function postAndroidWear_M360(x) {
			return $http({method: "POST", url: "php/post_android_wear_M360.php", data: x});
		}
	}

})();
