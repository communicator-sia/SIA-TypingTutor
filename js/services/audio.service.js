(function() {
	"use strict";

	angular
		.module("typingTutor")
		.service("audioService", audioService);

	audioService.$inject = [];

	/**
	 * @ngdoc service
	 * @name typingTutor.service:audioService
	 * @requires typingTutor.service:sharedStatesService
	 * @description
	 * Service, ki nudi funkcije za predvajanje zvoka.
	 * @requires sharedStatesService
	 */

	function audioService() {
		//console.log("In audioService");

		var soundTurnedOn = true;
		var path = "sounds/";

		var soundCorrectLetter = new Howl({
			urls: [path + "correct_letter.mp3", path + "correct_letter.ogg", path + "correct_letter.wav"]
		});
		var soundWrongLetter = new Howl({
			urls: [path + "wrong_letter.mp3", path + "wrong_letter.ogg", path + "wrong_letter.wav"]
		});
		var soundStarPopout = new Howl({
			urls: [path + "star_popout.mp3", path + "star_popout.ogg", path + "star_popout.wav"]
		});
		var soundEmoticonUpdate = new Howl({
			urls: [path + "emoticon_update.mp3", path + "emoticon_update.ogg", path + "emoticon_update.wav"]
		});
		var soundBeginExperiment = new Howl({
			urls: [path + "fanfare.mp3"]
		});

		return {
			playSoundCorrectLetter: playSoundCorrectLetter,
			playSoundWrongLetter: playSoundWrongLetter,
			playSoundStarPopout: playSoundStarPopout,
			playSoundEmoticonUpdate: playSoundEmoticonUpdate,
			playSoundInterupt: playSoundInterupt,
			playSoundBeginExperiment: playSoundBeginExperiment,

			toogleSound: toogleSound,
			isSoundTurnedOn: isSoundTurnedOn,
		};

		/**
		 * @ngdoc method
		 * @name toogleSound
		 * @methodOf typingTutor.service:audioService
		 * @description
		 * Vklopi / izklopi zvok.
		 * @example
		 * audioService.toogleSound();
		 */
		function toogleSound() {
			soundTurnedOn ? soundTurnedOn = false : soundTurnedOn = true;
		}

		/**
		 * @ngdoc method
		 * @name isSoundTurnedOn
		 * @methodOf typingTutor.service:audioService
		 * @description
		 * Ali je zvok vklopljen?
		 * @example
		 * audioService.isSoundTurnedOn();
		 * @returns {boolean} stanje zvoka
		 */
		function isSoundTurnedOn() {
			return soundTurnedOn;
		}

		/**
		 * @ngdoc method
		 * @name playSoundCorrectLetter
		 * @methodOf typingTutor.service:audioService
		 * @description
		 * Predvajaj zvok ob pravilnem pritisku.
		 * @example
		 * audioService.playSoundCorrectLetter();
		 */
		function playSoundCorrectLetter() {
			if (soundTurnedOn) {
				soundCorrectLetter.play();
			}
		}

		/**
		 * @ngdoc method
		 * @name playSoundWrongLetter
		 * @methodOf typingTutor.service:audioService
		 * @description
		 * Predvajaj zvok ob napacnem pritisku.
		 * @example
		 * audioService.playSoundWrongLetter();
		 */
		function playSoundWrongLetter() {
			if (soundTurnedOn) {
				soundWrongLetter.play();
			}
		}

		/**
		 * @ngdoc method
		 * @name playSoundStarPopout
		 * @methodOf typingTutor.service:audioService
		 * @description
		 * Predvajaj zvok zvezdice.
		 * @example
		 * audioService.playSoundStarPopout();
		 */
		function playSoundStarPopout() {
			if (soundTurnedOn) {
				soundStarPopout.play();
			}
		}

		/**
		 * @ngdoc method
		 * @name playSoundEmoticonUpdate
		 * @methodOf typingTutor.service:audioService
		 * @description
		 * Predvajaj zvok posodobitve smejka.
		 * @example
		 * audioService.playSoundEmoticonUpdate();
		 */
		function playSoundEmoticonUpdate() {
			if (soundTurnedOn) {
				soundEmoticonUpdate.play();
			}
		}

		/**
		 * @ngdoc method
		 * @name playSoundInterupt
		 * @methodOf typingTutor.service:audioService
		 * @description
		 * Predvajaj zvok motnje.
		 * @params
		 * index nahajanja zvoka
		 * @example
		 * audioService.playSoundInterupt();
		 */
		function playSoundInterupt(index) {
			if (index === -2) {
				return;
			}
			if (soundTurnedOn) {
				soundInterupt[index].play();
			}
		}

		/**
		 * @ngdoc method
		 * @name playSoundBeginExperiment
		 * @methodOf typingTutor.service:audioService
		 * @description
		 * Predvajaj zvok začetka vodenega experimenta.
		 * @example
		 * audioService.playSoundBeginExperiment();
		 */
		function playSoundBeginExperiment() {
			/* if (soundTurnedOn) {
				soundBeginExperiment.play();
			} */
		}

	}
})();
