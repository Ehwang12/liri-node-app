
//instantiation of variables
require("dotenv").config();

//load keys
var keys = require("./keys.js");

//spotify keys
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// var bInTwn = new bands(keys.bandsInTown);
// var omdb = new omdb(keys.omdb);
let moment = require("moment");
let axios = require("axios");
let fs = require("fs");

//variables from command line:
let cmd = process.argv[2];
let cmdSearch = process.argv[3];


//app function
if(cmd === "concert-this" && cmdSearch) {
    //search Bands in Town Artist Events API
    let queryUrl = "https://rest.bandsintown.com/artists/" + cmdSearch + "/events?app_id=codingbootcamp";
    
    axios.get(queryUrl).then(
        function(response){
        //   console.log(response.data);
        //capture data into variable
        var rData = response.data;
        
        //in order to access data, loop through object array
        for (let i = 0; i < rData.length; i++ ){

            //log venue name and location
            console.log(
                "========" + rData[i].venue.city + "," + rData[i].venue.region + "===========" + 
                "\nVenue Name:" + rData[i].venue.name + 
                "\nVenue Location: " + rData[i].venue.city + "," + rData[i].venue.region);
            
                //log concert date
                var conDate = moment(rData[i].datetime).format("MM/DD/YYYY");
            console.log("Date of concert: " + conDate + "\n=================================\n\n");
            }

        })
        .catch(function(err){
            console.log(err);
        });
    } else if(cmdSearch === undefined){
        console.log("Please enter Band name or Artist name.")
    }


    if(cmd === "spotify-this-song" && cmdSearch) {
    spotify.search({type: 'track', query: cmdSearch, limit: 1 })
        .then(function(response) {
            console.log(response);

            //capture spotify variable as array to access data
            let spotArray = reponse.tracks.items;

            for(let i = 0; i < spotArray.length; i++) {
                console.log()
            }
            //console.log:
            //artist
            //song name
            //preview link of song from spotify
            //album song is from
            //else default song
        })
        .catch(function(err){
            console.log(err);
        })
    };
    


// } else if( cmdSearch === undefined) {
//     //search default song from random text file
// } else if (cmd === "movie-this") {
//     let movieUrl = "http://www.omdbapi.com/?t=" + cmdSearch + "&y=&plot=short&apikey=trilogy" 
//         axios.get(movieUrl).then(
//           function(response) {
//             // console.log(response.data);
//             console.log("Movie Title: " + response.data.Title);
//             console.log("Release Date: " + response.data.Year);
//             console.log("IMDB Rating: " + response.data.imdbRating);
//             console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
//             console.log("Country: " + response.data.Country);
//             console.log("Language: " + response.data.Language);
//             console.log("Plot: " + response.data.Plot);
//             console.log("Actors: " + response.data.Actors);
             
//           }
//         );
// } else if (cmd === undefined) {
    //console.log Mr. Nobody 
// } else if (cmd === "do-what-it-says") {
//     fs.readFile
// }



