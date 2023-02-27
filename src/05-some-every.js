/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function allSongsAreOverTwoMinutes(songs) {
  return songs.every(song => song.runtimeInSeconds > 120);
}
// remember the every() method checks every element in an array and returns a BOOLEAN


/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsOverFourMinutes(songs) {
  return songs.some(song => song.runtimeInSeconds > 240);
}
/* not all songs in the songs array are over 4 mins therefore if we use every it will return false. if we want to return true, we have to use the some() fxn - the key word to look for was "any". 
- The every() method executes a function for each array element.
- The every() method returns true if the function returns true for all elements.
- The every() method returns false if the function returns false for one element.
- The every() method does not execute the function for empty elements.
- The every() method does not change the original array
*/

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsByPeanut(songs) {
return songs.some(song => song.artist === "Peanut")
}
//how did I know to use some() & not every()? the key word: any

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
