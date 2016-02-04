(function() {
    'use strict'

    angular.module('ge.panel', [
      'ui.bootstrap',
      "ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster",
			"com.2fdevs.videogular.plugins.buffering"
])

    .controller('PanelController', ['$scope', '$sce', 'PanelService',
      function($scope, $sce, PanelService) {
        var video = this;
        video.API = null;

        video.onPlayerReady = function(API) {
          video.API = API;
        };

        video.videos = [
        {
          sources: [
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
          ]
        },
        {
          sources: [
            {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
            {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
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

        video.setVideo = function(index) {
          video.API.stop();
          video.config.sources = video.videos[index].sources;
        };
        $scope.video = video;
      }
    ]);
})();
