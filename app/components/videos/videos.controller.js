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

    .controller('VideosController', ['$scope', '$sce', '$stateParams', 'VideosService',
      function($scope, $sce, $stateParams, VideosService) {
			var video = this;
			video.API = null;

			video.videos = [
				{
					poster: "http://www.videogular.com/assets/images/videogular.png",
					sources: [
						{
							src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), 
							type: "video/mp4"
						}
					]
				},
				{
					poster: "https://i.ytimg.com/vi/0CphTjm7ot8/maxresdefault.jpg",
					sources: [
						{
							src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), 
							type: "video/mp4"
						}
					]
				}
			];

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
					poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};
			
			video.onPlayerReady = function(API) {
				video.API = API;
			};

			video.setVideo = function(index) {
				video.API.stop();
				video.config.sources = video.videos[index].sources;
				video.config.plugins.poster = video.videos[index].poster;
			};
			$scope.video = video;
		}
    ]);
})();
