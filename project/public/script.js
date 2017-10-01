if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("mobile").style.display = "block";
}

(function() {
  mapOfIds = {
    '37i9dQZEVXbMJJi3wgRbAy' : 'Uruguay Top 50',
'37i9dQZEVXbLRQDuF5jeBp' : 'United States Top 50',
'37i9dQZEVXbLnolsZ8PSNw' : 'United Kingdom Top 50',
'37i9dQZEVXbIVYVBNw9D5K' : 'Turkey Top 50',
'37i9dQZEVXbMnz8KIWsvf9' : 'Thailand Top 50',
'37i9dQZEVXbMnZEatlMSiu' : 'Taiwan Top 50',
'37i9dQZEVXbJiyhoAPEfMK' : 'Switzerland Top 50',
'37i9dQZEVXbLoATJ81JYXz' : 'Sweden Top 50',
'37i9dQZEVXbNFJfN1Vw8d9' : 'Spain Top 50',
'37i9dQZEVXbKIVTPX9a2Sb' : 'Slovakia Top 50',
'37i9dQZEVXbK4gjvS1FjPY' : 'Singapore Top 50',
'37i9dQZEVXbKyJS56d1pgi' : 'Portugal Top 50',
'37i9dQZEVXbN6itCcaL3Tt' : 'Poland Top 50',
'37i9dQZEVXbNBz9cRCSFkY' : 'Philippines Top 50',
'37i9dQZEVXbJfdy5b0KP7W' : 'Peru Top 50',
'37i9dQZEVXbNOUPGj7tW6T' : 'Paraguay Top 50',
'37i9dQZEVXbKypXHVwk1f0' : 'Panama Top 50',
'37i9dQZEVXbJvfa0Yxg7E7' : 'Norway Top 50',
'37i9dQZEVXbM8SIrkERIYl' : 'New Zealand Top 50',
'37i9dQZEVXbKCF6dqVpDkS' : 'Netherlands Top 50',
'37i9dQZEVXbO3qyFxbkOE1' : 'Mexico Top 50',
'37i9dQZEVXbJlfUljuZExa' : 'Malaysia Top 50',
'37i9dQZEVXbMx56Rdq5lwc' : 'Lithuania Top 50',
'37i9dQZEVXbJWuzDrTxbKS' : 'Latvia Top 50',
'37i9dQZEVXbKXQ4mDTEBXq' : 'Japan Top 50',
'37i9dQZEVXbIQnj7RRhdSX' : 'Italy Top 50',
'37i9dQZEVXbKM896FDX8L1' : 'Ireland Top 50',
'37i9dQZEVXbObFQZ3JLcXt' : 'Indonesia Top 50',
'37i9dQZEVXbKMzVsSGQ49S' : 'Iceland Top 50',
'37i9dQZEVXbNHwMxAkvmF8' : 'Hungary Top 50',
'37i9dQZEVXbLwpL8TjsxOG' : 'Hong Kong Top 50',
'37i9dQZEVXbJp9wcIM9Eo5' : 'Honduras Top 50',
'37i9dQZEVXbLy5tBFyQvd4' : 'Guatemala Top 50',
'37i9dQZEVXbJqdarpmTJDL' : 'Greece Top 50',
'37i9dQZEVXbJiZcmkrIHGU' : 'Germany Top 50',
'37i9dQZEVXbIPWwFssbupI' : 'France Top 50',
'37i9dQZEVXbMxcczTSoGwZ' : 'Finland Top 50',
'37i9dQZEVXbLesry2Qw2xS' : 'Estonia Top 50',
'37i9dQZEVXbLxoIml4MYkT' : 'El Salvador Top 50',
'37i9dQZEVXbJlM6nvL1nD1' : 'Ecuador Top 50',
'37i9dQZEVXbKAbrMR8uuf7' : 'Dominican Republic Top 50',
'37i9dQZEVXbL3J0k32lWnN' : 'Denmark Top 50',
'37i9dQZEVXbIP3c3fqVrJY' : 'Czech Republic Top 50',
'37i9dQZEVXbMZAjGMynsQX' : 'Costa Rica Top 50',
'37i9dQZEVXbOa2lmxNORXQ' : 'Colombia Top 50',
'37i9dQZEVXbL0GavIqMTeb' : 'Chile Top 50',
'37i9dQZEVXbKj23U1GF4IR' : 'Canada Top 50',
'37i9dQZEVXbMXbN3EUUhlg' : 'Brazil Top 50',
'37i9dQZEVXbJqfMFK4d691' : 'Bolivia Top 50',
'37i9dQZEVXbJNSeeHswcKB' : 'Belgium Top 50'
  };
  /**
   * Obtains parameters from the hash of the URL
   * @return Object
   */
  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  var params = getHashParams();
  var access_token = params.access_token,
      refresh_token = params.refresh_token,
      error = params.error;
  if (error) {
    alert('There was an error during the authentication');
  } else {
    if (access_token) {
      for(var key in mapOfIds) {
      $.ajax({
          url: "https://api.spotify.com/v1/users/" + "spotifycharts" + "/playlists/" + key,
          headers: {
            'Authorization': 'Bearer ' + access_token
          },
          accepts: "application/json",
          type: "GET",
          success: function (data) {     
              $("#playlists").append('<img id="' + data.id + '" class="album-art" src=' + data.images[0].url + '></img>');
              $("#playlists").fadeIn("slow"); 
              $("#marquee").fadeIn("slow");
              $( ".album-art" ).hover(function() {
                document.getElementById('marquee').innerHTML = "<b>" + mapOfIds[this.id] + "</b>";
              });
              $( ".album-art" ).on( "click", function() {
                // Store all the tracks
                tracklist = [];
                idToTrack = {};
                playlistTitle = document.getElementById("marquee").innerHTML;

                $.ajax({
                    url:  "https://api.spotify.com/v1/users/" + "spotifycharts" + "/playlists/" + this.id + "/tracks",
                    headers: {
                      'Authorization': 'Bearer ' + access_token
                    },
                    accepts: "application/json",
                    type: "GET",
                    success: function (data) {    
                        var counter = data.items.length;  
                        $("#tracks").empty();
                        $("#tracks").append('<span id="back" class="btn"><b>Back</b></span>');
                        for (var i = 0; i < counter; i++) {
                            tracklist.push(data.items[i].track.id);
                            idToTrack[data.items[i].track.id] = data.items[i].track.name;
                            $("#tracks").append('<img id="' + data.items[i].track.id + '" class="track-art" src=' + data.items[i].track.album.images[0].url + '></img>');
                        }
                        $( "#back" ).on( "click", function() {
                          for(var i = 0; i < tracklist.length; i += 1) {
                              document.getElementById(tracklist[i]).style.border = "";
                              document.getElementById(tracklist[i]).style.animation = "";
                            }
                            $("#audio").removeAttr("src");
                          $("#playlists").fadeIn("slow");
                          $("#tracks").fadeOut("slow");
                          return;
                        });
                        $("#playlists").fadeOut("slow");
                        $("#tracks").fadeIn("slow");
                        // Initialize
                        $('.track-art').each( function(i){
                          var top_of_object = $('#' + this.id.toString()).offset().top;
                          var bottom_of_window = $(window).scrollTop() + $(window).height();
                          /* If the object is completely visible in the window, fade it in */
                          if( bottom_of_window > top_of_object){
                              $('#' + this.id.toString()).stop().fadeTo('fast',1);
                                  
                          }    
                        }); 
                        $( ".track-art" ).hover(function() {
                          document.getElementById('marquee').innerHTML = "<b>" + playlistTitle + " - " + idToTrack[this.id] + "</b>";
                        });
                        $( ".track-art" ).on( "click", function() {
                          if(document.getElementById("audio").hasAttribute("src")) {
                            for(var i = 0; i < tracklist.length; i += 1) {
                              document.getElementById(tracklist[i]).style.border = "";
                              document.getElementById(tracklist[i]).style.animation = "";
                            }
                            $("#audio").removeAttr("src");
                          }
                          if($("#audio").html() != this.id) {
                            currTrack = this.id;
                            $.ajax({
                            url: "https://api.spotify.com/v1/tracks/" + this.id,
                            headers: {
                              'Authorization': 'Bearer ' + access_token
                            },
                            accepts: "application/json",
                            type: "GET",
                            success: function (data) {
                              for(var i = 0; i < tracklist.length; i += 1) {
                                document.getElementById(tracklist[i]).style.border = "";
                                document.getElementById(tracklist[i]).style.animation = "";
                              }
                              document.getElementById(data.id).style.animation = "jiggle 2s infinite linear";
                              if(data.preview_url != null) {
                                document.getElementById(data.id).style.border = "solid rgb(94,175,101) 10px";
                                $("#audio").attr("src", data.preview_url);
                              }
                              else {
                                document.getElementById(data.id).style.border = "solid rgb(204,0,0) 10px";
                                $("#audio").attr("src", "#");
                              }
                              $("#audio").html(currTrack);
                              $("#audio")[0].play();
                              $('#audio').on('ended', function() {
                                 document.getElementById(data.id).style.border = "";
                                 document.getElementById(data.id).style.animation = "";
                                 $("#audio").html("");
                                 $("#audio").removeAttr("src");
                              });
                            }
                          });
                          } else {
                            $("#audio").html("");
                          }
                        });
                    },
                    error: function (data) {
                        $("#tracks").append('<img id="error-image" class="art" src=spotify.jpg></img>');
                    }
                });
              });
          },
          error: function (data) {
              $("#playlists").append("ERROR");
          }
      });
    }
    } else {
        // Render initial screen
        $('#login').fadeIn("slow");
    }
  }
})();

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 750,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.9,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 1.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.1,
      "direction": "right",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 1,
        "duration": 5,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 100
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});