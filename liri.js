
//instantiation of variables
require("dotenv").config();
var keys = require("./keys.js");
// var Spotify = require("node-spotify-api");
// var spotify = new spotify(keys.spotify);
// var bInTwn = new bands(keys.bandsInTown);
// var omdb = new omdb(keys.omdb);
let axios = require("axios");

//variables from command line:
let cmd = process.argv[2];
let cmdSearch = process.argv[3];

// concert-this

if(cmd === "concert-this") {
    //search Bands in Town Artist Events API
    let queryUrl = "https://rest.bandsintown.com/artists/" + cmdSearch + "/events?app_id=codingbootcamp";
    
    axios.get(queryUrl).then(
        function(response) {
            console.log(response);
            //want to check if status is ok within axio call
            if (response.status === 200) {
                console.log(response.data);
                //name of venue
                //venue location
                //date of event (MM/DD/YYYY) (moment)
            }
            
        })
        .catch(function(error){
    
        });
    }        
    
// } else if( cmd === "spotify-this-song") {
//     Spotify.search({type: 'track', query: cmdSearch })
//     .then(function(response) {
//         console.log(response);
//         //console.log:
//         //artist
//         //song name
//         //preview link of song from spotify
//         //album song is from
//         //else default song
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// } else if( cmdSearch === undefined) {
//     //search default song
// } else if (cmd === "movie-this") {
//     let movieUrl = 
// }









// movie-this

// do-what-it-says
