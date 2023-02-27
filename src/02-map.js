/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
function getSongTitles(songs) {
  const songTitle = songs.map((song) => {
    return song.title;
  });
  return songTitle;
}
/* here I had to do 2 returns because I defined a new variable called songTitle (which is a copy of the original array).
1 inside the map() fxn which pushed each song title into the copy array called songTitle. 

Then I had to do another return outside of the map() fxn that returned the new array, songTitle, with all the song titles that were pushed via the map() up until the last index (array.length-1)
*/


/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */
function getSongDetails(songs) {
  const SongDetails = songs.map((song) => {
  return `${song.title} by ${song.artist}`
  })
  return SongDetails;
}

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */
function getTitleAndArtist(songs) {
  return songs.map((song) => { 
   return {[song.title]: song.artist}
  });
}
/* here I did not make a new variable for maps but I still have 2 returns:
       - 1 for the main (outer function - getTitleAndArtist) 
       - 1 for the map() fxn 
note: unlike the example in the lesson reading,song.title has to be in [] >>> [song.title] in order to get the value of the song.title, example "Berlin Tsukin":, to read as the property's name. without the brackets js will read it as "song.title"
*/

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
