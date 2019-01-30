console.log("this is loaded");

exports.spotify = {
    // 3f2641f49c0a44fba89f0828bee5c1ae this is the full key VS code shows an error 
    // the number 3 needs to be first.
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
}; 