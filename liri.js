require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var axios = require("axios");
var spotify = require("node-spotify-api");

var argv1 = process.argv[2];
var argv2 = process.argv[3];

function commands(argv1, argv2) {
    switch (argv1) {
        case "concert-this":
        concertThis(argv2);
        break;

            case "spotify-this-song":
            spotifyThisSong(argv2);
            break;

                case "movie-this":
                movieThis(argv2);
                break;

                    case "do-what-it-says":
                    doWhatItSays(argv2);
                    break;

                    default:

                    console.log("This is a test");
    }
}

commands(argv1, argv2);

function concertThis() {
    var band = "";
    var queryUrl = "https://rest.bandsintown.com/artists/" + argv2 + "/events?app_id=codingbootcamp";
    console.log(queryUrl);
    axios.get(queryUrl).then(function() {
        if(error.response) {
            for(var i = 0; i < band.length; i++) {
                band = JSON.stringify();
                fs.appendFile("log.txt" +  band[i].nameOfVenue + '\n');
                console.log("Name Of Venue " + band[i].nameOfVenue);
                fs.appendFile("log.txt" + band[i].venueLocation + "\n");
                console.log("Venue Location " + band[i].venueLocation);
                fs.appendFile("log.txt" + band[i].date + "\n");
                console.log("Date Of The Event " + band[i].date);
            }
        }
    })
}





function spotifyThisSong(argv1) {
    if(argv2 === error) {
        argv2 = "The Sign";
    }
    spotify.search({ type: 'track', query: argv1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var spotifySong = data;
        for(var i = 0; i < spotifySong.lenght; i++) {
            fs.appendFile("log.txt" + spotifySong[i].name + "\n");
            console.log("The song's name " + spotifySong[i].name);
            fs.appendFile("log.txt" + spotifySong[i].artist + "\n");
            console.log("Artist Name " + spotifySong[i].artist);
            fs.appendFile("log.txt" + spotifySong[i].preview_url + "\n");
            console.log("Preview song link " + spotifySong[i].preview_url);
            fs.appendFile("log.txt" + spotifySong[i].album + "\n");
            console.log("The Album " + spotifySong[i].album);
        }
       
      console.log(data); 
      });
};





function movieThis() {
    if(argv2 === error) {
        argv2 = "Mr Nobody";
    }
    var movieName = "";
    var queryUrl = "http://www.omdbapi.com/?t=" + argv2 + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);
    axios.get(queryUrl).then(function(){
       if(error.response) {
           movieName = JSON.stringify();
           fs.appendFile("log.txt" + movieName.Title + "\n");
           console.log("Title " + movieName+Title);
           fs.appendFile("log.txt" + movieName.Year + "\n");
           console.log("Movie Year " + movieName.Year);
           fs.appendFile("log.txt" + movieName.imdbRating + "\n");
           console.log("iMDB Movie Rating " + movieName.imdbRating);
           fs.appendFile("log.txt" + movieName.rottenTomatoesRating + "\n");
           console.log("Rotten Tomatoe's Rating of this Movie " + movieName.rottenTomatoesRating);
           fs.appendFile("log.txt" + movieName.Country + "\n");
           console.log("Country Wher The Movie Was Produced " + movieName.Country);
           fs.appendFile("log.txt" + movieName.Language + "\n");
           console.log("Language Of The Movie " + movieName.Country);
           fs.appendFile("log.txt" + movieName.Plot + "\n");
           console.log("Plot Of The Movie " + movieName.Plot);
           fs.appendFile("log.txt" + movieName.Actors + "\n");
           console.log("Actors Of This Movie " + movieName.Actors);
       } 
    })

};

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.




function doWhatItSays() {

};



