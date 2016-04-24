(function() {
    'use strict'

    angular.module('el.videos', [
    		"ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster",
			"com.2fdevs.videogular.plugins.buffering"
		])
    .controller('VideosController', VideosController);
	
	VideosController.$inject = ['$scope', '$sce', '$stateParams', 'VideosService', 'elCookies', 'CLIENT_URL'];

	function VideosController ($scope, $sce, $stateParams, VideosService, elCookies, CLIENT_URL) {
			var video = this;
			video.API = null;
			video.videos = [];

			activate();

			video.onPlayerReady = function(API) {
				video.API = API;
			};

			video.setVideo = function(index) {
				video.API.stop();
				video.config.sources = video.videos[index].sources;
				video.config.plugins.poster = video.videos[index].poster;

			};

			function listVideos() {
				var id = $stateParams.id;
				var key = elCookies.getUser().key;

				VideosService.listVideos(id, key).then(function(data){
					var i = 0;
					var r = {};

					for(i = 0; i < data.length; i++){						
						r = {
								title : data[i].title,
								poster: 'assets/img/' + data[i].poster,
								sources: [
									{
										src: $sce.trustAsResourceUrl(CLIENT_URL +'assets/videos/' + data[i].url), 
										type: 'video/' + data[i].type
									}
								]
							}
						video.videos.push(r);
					}

					video.config = {
						preload: "none",
						autoHide: false,
						autoHideTime: 3000,
						autoPlay: false,
						sources: video.videos[0].sources,
						theme: {
							url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
						},				
						plugins: {
							poster: "assets/img/poster/html5-01-poster.png"
						}
					};			
				});
			}
			function activate() {
	    		return listVideos();
	    	}

			$scope.video = video;
		}

})();
