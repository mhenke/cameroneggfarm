'use strict';

angular.module('core').controller('GoogleMapController', ['$scope',
	function($scope) {
		$scope.initialize = function() {
			var map;
			var coordData = new google.maps.LatLng(parseFloat(42.8611096), parseFloat(-98.0286823));
			var markCoord1 = new google.maps.LatLng(parseFloat(42.8111096), parseFloat(-98.1925768));
			// var markCoord2 = new google.maps.LatLng(parseFloat(40.6422180), parseFloat(-73.9784068,14)); 
			//var markCoord3 = new google.maps.LatLng(parseFloat(40.6450000), parseFloat(-73.9724068,14)); 
			//var markCoord4 = new google.maps.LatLng(parseFloat(40.6442180), parseFloat(-73.9664068,14)); 
			//var markCoord5 = new google.maps.LatLng(parseFloat(40.6379180), parseFloat(-73.9552068,14)); 
			var marker;

			var styleArray = [{
				"stylers": [{
					"saturation": -100
				}, {
					"gamma": 0.8
				}, {
					"lightness": 4
				}, {
					"visibility": "on"
				}]
			}, {
				"featureType": "landscape.natural",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#5dff00"
				}, {
					"gamma": 4.97
				}, {
					"lightness": -5
				}, {
					"saturation": 100
				}]
			}]

			var markerIcon = {
				url: "img/gmap_marker.png",
				size: new google.maps.Size(42, 65),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(21, 70)
			};
			
			var mapOptions = {
				zoom: 9,
				center: coordData,
				scrollwheel: false,
				styles: styleArray
			}

			var contentString = "<div></div>";
			var infowindow = new google.maps.InfoWindow({
				content: contentString,
				maxWidth: 200
			});

			var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			marker = new google.maps.Marker({
				map: map,
				position: markCoord1,
				icon: markerIcon
			});
			/*
			    marker1 = new google.maps.Marker({
			        map: map,
			        position: markCoord2,
			        icon: markerIcon
			    });
                    
			       marker2 = new google.maps.Marker({ 
			        map:map, 
			        position: markCoord3, 
			        icon: markerIcon
			      }); 
			       marker3 = new google.maps.Marker({ 
			        map:map, 
			        position: markCoord4, 
			        icon: markerIcon
			      }); 
			      marker4 = new google.maps.Marker({ 
			        map:map, 
			        position: markCoord5, 
			        icon: markerIcon
			      });
			     */
			var contentString0 = '<div id="content">' +
				'<div id="siteNotice">' +
				'</div>' +
				'<div id="bodyContent">' +
				'<p>4578 Marmora Road, Glasgow D04 89GR <span>800 2345-6789</span></p>' +
				'</div>' +
				'</div>';
			var contentString1 = '<div id="content">' +
				'<div id="siteNotice">' +
				'</div>' +
				'<div id="bodyContent">' +
				'<p>4578 Marmora Road, Glasgow D04 89GR <span>800 2345-6789</span></p>' +
				'</div>' +
				'</div>';
			var contentString2 = '<div id="content">' +
				'<div id="siteNotice">' +
				'</div>' +
				'<div id="bodyContent">' +
				'<p>4578 Marmora Road, Glasgow D04 89GR <span>800 2345-6789</span></p>' +
				'</div>' +
				'</div>';
			var contentString3 = '<div id="content">' +
				'<div id="siteNotice">' +
				'</div>' +
				'<div id="bodyContent">' +
				'<p>4578 Marmora Road, Glasgow D04 89GR <span>800 2345-6789</span></p>' +
				'</div>' +
				'</div>';
			/*var contentString4 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p>4578 Marmora Road, Glasgow D04 89GR <span>800 2345-6789</span></p>'+
			'</div>'+
			'</div>';*/
			var infowindow = new google.maps.InfoWindow({
				content: contentString0
			});
			var infowindow1 = new google.maps.InfoWindow({
				content: contentString1
			});
			var infowindow2 = new google.maps.InfoWindow({
				content: contentString2
			});
			var infowindow2 = new google.maps.InfoWindow({
				content: contentString3
			});
			/*var infowindow2 = new google.maps.InfoWindow({
			    content: contentString4
			});*/
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
				$('.gm-style-iw').parent().parent().addClass("gm-wrapper");
			});
			/*
				google.maps.event.addListener(marker1, 'click', function() {
                    infowindow.open(map, marker1);
                    $('.gm-style-iw').parent().parent().addClass("gm-wrapper");
                });
                 google.maps.event.addListener(marker2, 'click', function() {
                    infowindow.open(map, marker2);
                    $('.gm-style-iw').parent().parent().addClass("gm-wrapper");
                });
                google.maps.event.addListener(marker3, 'click', function() {
                    infowindow.open(map, marker3);
                    $('.gm-style-iw').parent().parent().addClass("gm-wrapper");
                });
               google.maps.event.addListener(marker4, 'click', function() {
                  infowindow.open(map,marker4);
                  $('.gm-style-iw').parent().parent().addClass("gm-wrapper");
                });
                
                
			});
			*/
			google.maps.event.addDomListener(window, "load");
		};

	}
]);