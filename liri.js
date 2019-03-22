require("dotenv").config();
const keys = require("./keys");
const fs = require("fs");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
// const request = require("request");
const axios = require("axios");
const moment = require("moment");
const colors = require("colors");
const userChoice = process.argv[2];
const userInput = process.argv[3];

// inPut(userChoice, userInput);
// console.log(inPut);


function input(userChoice, userInput) {
    switch(userChoice) {
        case "concert-this":
        concertInfomation(userInput);
            break;
        case "spotify-this-song":
        songInformation(userInput);
            break;
        case "movie-this":
        movieInformation(userInput);
            break;
        case "do-what-it-says":
        saySomething(userInput);
            break;
        default:
            console.log(colors.red("Test"));
    }
}

function concertInfomation(userInput) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";
    console.log(colors.red(queryUrl));
    axios.get(queryUrl).then(function(response) {
        console.log(colors.green("\-----------------------------\n"));
        console.log(colors.yellow("Name Of Venue: " + response.data[0].venue.name.white + "\r\n"));
        console.log(colors.yellow("Venue Location: " + response.data[0].venue.city.white + "\r\n"));
        console.log(colors.yellow("Date Of Event: " + moment(response.data[0].datetime).format("MM/DD/YYYY").white + "\r\n"));

        var bandLog = "\n*******Concert Log******** " + 
            "\nName of Venue:" + response.data[0].venue.name +
            "\nVenue Location: " + response.data[0].venue.city +
            "\nDate of Event: " + moment(response.data[0].datetime).format("MM/DD/YYYY").white + 
            "\n*******End Of Log*******";


        fs.appendFile("log.txt", bandLog, function(err) {
            if(err)
            throw err;
        });
    });
}






function songInformation(userInput) {
if(!userInput) {
    userInput = "The Sign by Ace of Base.";
}

spotify.search({
        type: "track",
        query: userInput,
    }, function(err, data) {
        console.log(data);
        if(err) {
            return console.log(colors.red("Error occurred: " + err));
        }
        console.log(colors.green("\-----------------------------\n"));
        console.log(colors.yellow("Artist: " + data.tracks.items[0].artists[0].name.white));
        console.log(colors.yellow("Song: " + data.tracks.items[0].name.white));
        console.log(colors.yellow("Link: " + data.tracks.items[0].preview_url.white));
        console.log(colors.yellow("Album: " + data.tracks.items[0].album.name.white));
        console.log(colors.yellow("Release Date: " + data.tracks.items[0].album.release_date.white));

       var songLog = "\n*******Song Log******** " + 
       "\nArtist: " + data.tracks.items[0].artists[0].name +
       "\nSong: " + data.tracks.items[0].name +
       "\nLink: " + data.tracks.items[0].preview_url +
       "\nAlbum: " + data.tracks.items[0].album.name +
       "\nRelease Date: " + data.tracks.items[0].album.release_date +
       "\n*******End Of Log*******";

       fs.appendFile("log.txt", songLog, function(err) {
           if(err) {
               throw err;
           }
       });
    });
}



// Movie information

function movieInformation(userInput) {
    if(!userInput){
        userInput = "Mr Nobody";
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    console.log(colors.red(queryUrl));
    axios.request(queryUrl).then(function(response) {
        // return console.log(colors.red("Error occurred: " + error));
        console.log(colors.green("\-----------------------------\n"));
        console.log(colors.yellow("Title: " + response.data.Title.white + "\r\n"));
        console.log(colors.yellow("Year: " + response.data.Year.white + "\r\n"));
        console.log(colors.yellow("IMDB Rating: " + response.data.imdbRating.white + "\r\n"));
        console.log(colors.yellow("Rotten Tomatoes Rating: " + response.data.Ratings[1].value + "\r\n"));
        console.log(colors.yellow("Country: " + response.data.Country.white + "\r\n"));
        console.log(colors.yellow("Language: " + response.data.Language.white + "\r\n"));
        console.log(colors.yellow("Plot: " + response.data.Plot.white + "\r\n"));
        console.log(colors.yellow("Actors: " + response.data.Actors.white + "\r\n"));
        // return console.log(colors.red("Error occurred: " + error));

        var movieLog = "\n*******movie Log******** " + 
        "\nTitle: " + response.data.Title +  
        "\nYear: " + response.data.Year +
        "\nIMDB Rating: " + response.data.imdbRating + 
        "\nRotten Tomatoes Rating: " + response.data.Ratings[1].value +
        "\nRotten Tomatoes Rating: " + response.data.Ratings[1].value +
        "\nCountry: " + response.data.Country +
        "\nLanguage: " + response.data.Language +
        "\nPlot: " + response.data.Plot +
        "\nActors: " + response.data.Actors +
        "\n*******End Of Log*******";

        fs.appendFile("log.txt", movieLog, function(err) {
            if(err) {
                throw err;
            }
        });
    });
}

function saySomething(userInput) {
    fs.appendFile("random.txt", "utf8", function(err, data) {
        if(err) {
            return console.log(colors.red("err"));
        }
    })
}

input(userChoice, userInput);