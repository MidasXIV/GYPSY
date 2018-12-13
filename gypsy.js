var geocoder;
var map;
var marker;
var globalPosition;
var directionsDisplay;
var directionsService;

// TODO : This is a note
// TODO: This is a comment.
// NOTE: hello
//  
/*
 * Google Map with marker
 */
function initialize() {

    var initialLat = 25.3411943;
    var initialLong = 55.385786199999984;

    var latlng = new google.maps.LatLng(initialLat, initialLong);
    globalPosition = new google.maps.LatLng(initialLat, initialLong);
    // Create an array of styles.
    var mapStyles = [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "visibility": "off"
                }, {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                    "visibility": "off"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [{
                "color": "#ff0000"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#000000"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }, {
                "color": "#ffffff"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                    "color": "#00FFFF"
                },
                {
                    "lightness": 20
                }
            ]
        }
    ];
    var icon = {
        url: "myLoc.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(15, 15) // anchor
    };
    var options = {
        zoom: 16,
        center: latlng,
        //styles: mapStyles,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // The following line is essential for making the map background transparent:
        //backgroundColor: 'hsla(0, 0%, 0%, 0)',
        disableDefaultUI: true,
        mapTypeControl: false,
        zoomControl: false,
        styles: [{
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ],
    };

    map = new google.maps.Map(document.getElementById("geomap"), options);

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: icon,
        position: latlng
    });


    $('.map').each(function (index, Element) {

        var flag = 0;

        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();
        var coords = $(Element).text().split(",");
        if (coords.length != 3) {
            $(this).display = "none";
            return;
        }
        var latlng = new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1]));
        var localPosition = new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1]));

        var myOptions = {
            zoom: parseFloat(coords[2]),
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            mapTypeControl: false,
            zoomControl: true,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#212121"
                    }]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#212121"
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#bdbdbd"
                    }]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#181818"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1b1b1b"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#2c2c2c"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#8a8a8a"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#373737"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#3c3c3c"
                    }]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#4e4e4e"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#3d3d3d"
                    }]
                }
            ],
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
        var mapOptions = {
            zoom: 17,
            center: latlng,
            mapTypeId: 'satellite',
            disableDefaultUI: true,
            mapTypeControl: false,
            zoomControl: true,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
        };
        var options = {
            zoom: 16,
            center: latlng,
            //styles: mapStyles,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            // The following line is essential for making the map background transparent:
            //backgroundColor: 'hsla(0, 0%, 0%, 0)',
            disableDefaultUI: true,
            mapTypeControl: false,
            zoomControl: false,
            styles: [{
                    "featureType": "poi.business",
                    "stylers": [{
                        "visibility": "off"
                }]
            },
                {
                    "featureType": "transit",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                }]
            }
        ],
        };
        var icon = {
            url: "restIcon.png", // url
            scaledSize: new google.maps.Size(30, 30), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(15, 30) // anchor
        };

        var map2 = new google.maps.Map(Element, mapOptions);
        directionsDisplay.setMap(map2);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map2,
            icon: icon
        });
        //console.log("START");

        function calcRoute() {
            console.log("starting calcroute");
            //var start = new google.maps.LatLng(37.334818, -121.884886);
            //var end = new google.maps.LatLng(38.334818, -181.884886);
            //var end = new google.maps.LatLng(37.441883, -122.143019);

            var request = {
                origin: globalPosition,
                destination: localPosition,
                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    //directionsDisplay.setDirections(response);
                    //directionsDisplay.setMap(map2);

                    console.log("DURATION Driving :" + (response.routes[0].legs[0].duration.value / 60) + " minutes");
                    console.log("Distance Driving :" + (response.routes[0].legs[0].distance.value / 1000) + " km");
                    flag++;
                } else {
                    alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
                }
            });

            var request = {
                origin: globalPosition,
                destination: localPosition,
                travelMode: google.maps.TravelMode.WALKING
            };

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    //directionsDisplay.setMap(map2);

                    console.log("DURATION Walking :" + (response.routes[0].legs[0].duration.value / 60) + " minutes");
                    console.log("Distance Walking :" + (response.routes[0].legs[0].distance.value / 1000) + " km");

                    console.log("RESQUEST FOR GService is done");
                    flag++;
                } else {
                    alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
                }
            });
        }

        //calcRoute();
        //while(flag < 2){};
    });
}

function buildMap() {
    $('.map').each(function (index, Element) {

        var coords = $(Element).text().split(",");
        if (coords.length != 3) {
            $(this).display = "none";
            return;
        }
        var latlng = new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1]));
        //var localPosition = new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1]));

        var mapOptions = {
            zoom: 17,
            center: latlng,
            mapTypeId: 'satellite',
            disableDefaultUI: true,
            mapTypeControl: false,
            zoomControl: true,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
        };
        var icon = {
            url: "restIcon.png", // url
            scaledSize: new google.maps.Size(30, 30), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(15, 30) // anchor
        };

        var map2 = new google.maps.Map(Element, mapOptions);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map2,
            icon: icon
        });
    });

}

function gypsy_zomato_bridge(lat, lng) {
    Zomato.init({
        key: "9716553c84c5bf8e0fe8721ce09956b4"
    });
    Zomato.geocode({
        latitude: lat,
        longitude: lng
    }, function (s) {
        console.log(s);
        BuildCards(s);
    });
}

$(document).ready(function () {
    //load google map
    initialize();

    /*
     * autocomplete location search
     */
    var PostCodeid = '#search_location';
    $(function () {
        $(PostCodeid).autocomplete({
            source: function (request, response) {
                geocoder.geocode({
                    'address': request.term
                }, function (results, status) {
                    response($.map(results, function (item) {
                        return {
                            label: item.formatted_address,
                            value: item.formatted_address,
                            lat: item.geometry.location.lat(),
                            lon: item.geometry.location.lng()
                        };
                    }));
                });
            },
            select: function (event, ui) {

                $('.search_addr').val(ui.item.value);
                $('.search_latitude').val(ui.item.lat);
                $('.search_longitude').val(ui.item.lon);

                //document.getElementById('addr').innerHTML = ui.item.value;
                //document.getElementById('lat').innerHTML  = ui.item.lat;
                //document.getElementById('lng').innerHTML  =ui.item.lon;
                //console.log(ui.item.value);
                //console.log(ui.item.lat);
                //console.log(ui.item.lon);
                globalPosition = new google.maps.LatLng(ui.item.lat, ui.item.lon);
                var latlng = new google.maps.LatLng(ui.item.lat, ui.item.lon);
                marker.setPosition(latlng);
                initialize();
            }
        });
    });

    /*
     * Point location on google map
     */
    $('.get_map').click(function (e) {
        var address = $(PostCodeid).val();
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                console.log("SEARCHED LOCATION : " + marker.getPosition().lat() + " " + marker.getPosition().lng());
                globalPosition = new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng());

                gypsy_zomato_bridge(marker.getPosition().lat(), marker.getPosition().lng());
                //$('.search_addr').val(results[0].formatted_address);
                //$('.search_latitude').val(marker.getPosition().lat());
                //$('.search_longitude').val(marker.getPosition().lng());
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
        e.preventDefault();
    });

    /*
    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 2,
        centerPadding: '17%',
        centerMode: true,
        prevArrow: $('.top-arrow'),
        nextArrow: $('.bottom-arrow')
    });
    */
    sliderInit();

});

function sliderInit() {
    $('.slick-carousel').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 2,
        centerPadding: '17%',
        centerMode: true,
        prevArrow: $('.top-arrow'),
        nextArrow: $('.bottom-arrow')
    });
};

function findUserLocation() {

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        return;
    }

    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log('Latitude is ' + latitude + '\nLongitude is ' + longitude);
        globalPosition = new google.maps.LatLng(latitude, longitude);
        var latlng = new google.maps.LatLng(latitude, longitude);
        marker.setPosition(latlng);
        map.setCenter(latlng);

        gypsy_zomato_bridge(latitude, longitude);
    }

    function error() {
        console.log("Unable to retrieve your location");
        alert("Unable to retrieve your location");
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {}
}


function BuildCards(response) {
    //document.getElementById("card-carousel").innerHTML = "";
    //response.nearby_restaurants.length
    $('#card-carousel').slick('removeSlide', null, null, true);
    for (var i = 0; i < response.nearby_restaurants.length; i++) {

        var content = '';

        var BGImg = response.nearby_restaurants[i].restaurant.featured_image;
        var RestName = response.nearby_restaurants[i].restaurant.name;
        var RestLocLocality = response.nearby_restaurants[i].restaurant.location.locality_verbose;
        var RestLocLat = response.nearby_restaurants[i].restaurant.location.latitude;
        var RestLocLng = response.nearby_restaurants[i].restaurant.location.longitude;
        var RestLocAddr = response.nearby_restaurants[i].restaurant.location.address;
        var RestURLOrder = response.nearby_restaurants[i].restaurant.order_url;
        var RestURLPhotos = response.nearby_restaurants[i].restaurant.photos_url;
        var RestURLMenu = response.nearby_restaurants[i].restaurant.menu_url;
        var RestAvgCost = response.nearby_restaurants[i].restaurant.average_cost_for_two;
        var RestCurrency = response.nearby_restaurants[i].restaurant.currency;
        var RestRatingAgg = response.nearby_restaurants[i].restaurant.user_rating.aggregate_rating;
        var RestRatingText = response.nearby_restaurants[i].restaurant.user_rating.rating_text;
        var RestRatingColor = response.nearby_restaurants[i].restaurant.user_rating.rating_color;
        var RestRatingVotes = response.nearby_restaurants[i].restaurant.user_rating.votes;
        var RestOnlineDelivery = response.nearby_restaurants[i].restaurant.has_online_delivery;
        var RestCuisines = response.nearby_restaurants[i].restaurant.cuisines;
        var tag = RestName.replace(/\s/g, '');

        var icon = {
            url: "restIcon.png", // url
            scaledSize: new google.maps.Size(30, 30), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(15, 30) // anchor
        };
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(RestLocLat, RestLocLng),
            map: map,
            title: RestName,
            optimized: false,
            icon: icon
        });



        content += '<div class="col-sm-12">';
        content += '<div style="background-image: url(' + BGImg + ');" class="movie-card card">';
        content += '<div class="color-overlay card-header"><div class="movie-share">';
        content += '<a class="movie-share__icon" href="#"><i class="material-icons">&#xe87d</i></a>';
        content += '<a class="movie-share__icon" href="#"><i class="material-icons">&#xe253</i></a>';
        content += '<a class="pixie movie-share__icon" href="#"><i id="' + (tag + "btn") + '"  class="material-icons" onclick="directionService(this.id)">&#xe80d</i></a>';
        content += '</div><div class="movie-content"><div class="movie-header"><h1 class="movie-title">' + RestName + '</h1>';
        content += '<h4 class="movie-info">' + RestLocLocality + '</h4></div>';
        content += '<p class="movie-desc">' + RestLocAddr + '</p>';
        content += '<a class="btn2 btn-outline" href="' + RestURLOrder + '">Order Now</a></div></div>';
        content += '<div class="card-body text-center"><h4>' + RestName + '</h4><h6>' + RestLocLocality + '</h6>';

        /*
        STARS
        */
        content += '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';

        /*TABLE*/

        content += '<br><table class="table table-sm"><tbody><tr><td class="text-left">Average Cost for 2</td><td class="text-right">' + RestAvgCost + " " + RestCurrency + '</td></tr>';

        content += '<tr><td class="text-left">Rating</td><td class="text-right">' + RestRatingAgg + ", " + RestRatingText + '<div class="box" style="background: #' + RestRatingColor + ';"></div></td></tr>';

        content += '<tr><td class="text-left">Votes</td><td class="text-right">' + RestRatingVotes + '</td></tr>'
        content += '<tr><td class="text-left">Has online Delivery</td><td class="text-right">' + (RestOnlineDelivery == 1 ? 'Yes' : 'No') + '</td></tr>';

        /* //GMAPS integration
        <tr>
            <td class="text-left"><i class="fas fa-car"></i>&nbsp;&nbsp;&nbsp;Driving</td>
            <td class="text-right">5 minutes /- 2 km</td>
        </tr>
        <tr>
            <td class="text-left"><i class="fas fa-walking"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Walking</td>
            <td class="text-right">26 minutes /- 2 km</td>
        </tr>
        */
        content += '</tbody></table>';

        /*
        CUSINES
        */
        content += '<h6 class=""> popular cusines</h6><div class="container">';
        var cusines = RestCuisines.split(',');
        for (var j = 0; j < cusines.length; j++) {
            content += '<span class="badge badge-pill badge-dark" style="padding:5px;padding-left:15px;padding-right:15px;">' + cusines[j] + '</span>';
            content += '&nbsp;';
        }
        content += '</div></div>';

        /*MAP*/

        content += '<div class="card-footer map" id="' + (tag + "map") + '" data-latitude="' + RestLocLat + '" data-longitude="' + RestLocLng + '">' + RestLocLat + ',' + RestLocLng + ',20</div></div></div>';

        console.log((i + 1) + " card added");
        $('#card-carousel').slick('slickAdd', content);

        buildMap();
    }
}

function directionService(id) {
    //console.log(id);
    tag = id.replace('btn', '');
    var MAP = document.getElementById(tag + "map");
    var MAPlatitude = MAP.dataset.latitude;
    var MAPlongitude = MAP.dataset.longitude;

    console.log(MAPlatitude + " " + MAPlongitude);
    //var tempmap = new google.maps.Map(document.getElementById("geomap"));
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });
    var localPosition = new google.maps.LatLng(MAPlatitude, MAPlongitude);
    directionsDisplay.setMap(map);
    console.log("starting calcroute");
    console.log(globalPosition);
    console.log(localPosition);
    var request = {
        origin: globalPosition,
        destination: localPosition,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            //directionsDisplay.setDirections(response);
            //directionsDisplay.setMap(map2);
            var DrivingDuration = "DURATION Driving :" + (response.routes[0].legs[0].duration.value / 60) + " minutes";
            var DrivingDistance = "Distance Driving :" + (response.routes[0].legs[0].distance.value / 1000) + " km";
            console.log(DrivingDuration);
            console.log(DrivingDistance);

            $.notify({
                // options
                icon: 'glyphicon glyphicon-warning-sign',
                title: 'DRIVING<br>',
                message: DrivingDuration + "<br>" + DrivingDistance,
                target: '_blank'
            }, {
                // settings
                element: 'body',
                position: null,
                type: "info",
                allow_dismiss: false,
                newest_on_top: true,
                showProgressbar: false,
                placement: {
                    from: "top",
                    align: "center"
                },
                offset: 20,
                spacing: 20,
                z_index: 1031,
                delay: 5000,
                timer: 5000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-8 col-sm-8 text-white bg-dark alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'
            });

        } else {
            alert("Directions Request failed");
        }
    });

    var request = {
        origin: globalPosition,
        destination: localPosition,
        travelMode: google.maps.TravelMode.WALKING
    };

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            //directionsDisplay.setMap(map2);

            var WalkingDuration = "DURATION Walking :" + (response.routes[0].legs[0].duration.value / 60) + " minutes";
            var WalkingDistance = "Distance Walking :" + (response.routes[0].legs[0].distance.value / 1000) + " km";
            console.log(WalkingDuration);
            console.log(WalkingDistance);

            console.log("RESQUEST FOR GService is done");

            $.notify({
                // options
                icon: 'glyphicon glyphicon-warning-sign',
                title: 'WALKING<br>',
                message: WalkingDuration + "<br>" + WalkingDistance,
                target: '_blank'
            }, {
                // settings
                element: 'body',
                position: null,
                type: "info",
                allow_dismiss: false,
                newest_on_top: true,
                showProgressbar: false,
                placement: {
                    from: "top",
                    align: "center"
                },
                offset: 20,
                spacing: 20,
                z_index: 1031,
                delay: 5000,
                timer: 5000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-8 col-sm-8 text-white bg-dark alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'

            });

        } else {
            alert("Directions Request failed");
        }
    });


}
