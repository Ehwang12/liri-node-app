console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.bandsInTown = {
    key: process.env.BANDS_IN_TOWN_KEY
};

exports.omdb = {
    key: process.env.OMDB_API_KEY
};