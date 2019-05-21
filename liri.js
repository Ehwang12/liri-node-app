
//instantiation of variables
require("dotenv").config();

//load keys
var keys = require("./keys.js");

//spotify keys
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

let moment = require("moment");
let axios = require("axios");
let fs = require("fs");

//variables from command line:
let cmd = process.argv[2];
let cmdSearch = process.argv[3];


//app functions
function concertSearch(){
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
            //if no search is provided following message will appear
            console.log("Please enter Band name or Artist name.")
        }
}


function spotifySearch() {
    if(cmd === "spotify-this-song" && cmdSearch) {
        spotify.search({type: 'track', query: cmdSearch, limit: 1 })
            .then(function(response) {
               
                //capture spotify variable as array to access data
                let spotArray = response.tracks.items;
                for(let i = 0; i < spotArray.length; i++) {
                    console.log(` 
                    ========= ${response.tracks.items[i].name} ===========
                    Artist(s): ${response.tracks.items[i].artists[i].name}
                    Song Name: ${response.tracks.items[i].name}
                    Album: ${response.tracks.items[i].album.name}
                    Spotify Link: ${response.tracks.items[i].external_urls.spotify}
                    =============================================================
                    `)
                }
            })
            .catch(function(err){
                console.log(err);
            }) 
        } else if(cmdSearch === undefined) {
           cmdSearch = "The Sign Ace of Base";
           spotifySearch("spotify-this-song", cmdSearch);
        }
}    
        
    
    


function movieSearch() {
    if (cmd === "movie-this" && cmdSearch) {
        let movieUrl = "http://www.omdbapi.com/?t=" + cmdSearch + "&y=&plot=short&apikey=trilogy" 
            axios.get(movieUrl).then(
              function(response) {
                // console.log(response.data);
                console.log("====================================")
                console.log("Movie Title: " + response.data.Title);
                console.log("Release Date: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("====================================")
                 
              }
            );
        } else if (cmdSearch === undefined) {
            let movieUrl = "http://www.omdbapi.com/?t=" + "Mr.Nobody" + "&y=&plot=short&apikey=trilogy" 
            axios.get(movieUrl).then(
              function(response) {
                //log to console Mr. Nobody info for default info input
                console.log("====================================")
                console.log("Movie Title: " + response.data.Title);
                console.log("Release Date: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("====================================")
                 
              }
            );
        }
}

function doWhat(){
    if (cmd === "do-what-it-says" && cmdSearch) {
        //access random.txt file, access data, grab text
        //run 'spotify-this-song' for 'I Want it That Way'
    }
}

movieSearch();
spotifySearch();
concertSearch();
doWhat();


