/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns the song "Pink Elephants" from the song array, if it is in the array.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findPinkElephantsByTimestreet(songs) {
  return songs.find(songs => songs.title === "Pink Elephants")
}

/* find() method finds the first element in an array that matches set conditions/ passes a test and returns that value. 
- The find() method executes a function for each array element.
- The find() method returns undefined if no elements are found.
- The find() method does not execute the function for empty elements.
- The find() method does not change the original array.
- takes in an optional parameter called "thisValue"; Default undefined; A value passed to the function as its this value.
*/


/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstSongUnderThreeMinutes(songs) {
  return songs.find(song => song.runtimeInSeconds < 180);
}
// since the code is a single line we do not need the 2nd return or the curly braces. 

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstTitleTrack(songs) {
  return songs.find(song => song.album === song.title);
}

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
