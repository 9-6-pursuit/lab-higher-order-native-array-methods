/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printAllSongTitles(songs) {
  songs.forEach((song) => {
    console.log(song.title);
  });
}
/* when we are constructing forEach function the syntax is as follows:
- the name of the array - in this example it is songs:
         songs.forEach() ...

- then inside of our forEach() we put the name of the iterator - could be anything! in this case I named the iterator "song" which will have the equivalent value of array[i] in a for...loop:
          songs.forEach((song) => {})

- if our array is an array of objects then we attach the property name to our array element (song) inside the curly braces like so:
        songs.forEach((song) => {
          do something to song.title
        });
*/


/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */
function printSongDetails(songs) {
  songs.forEach((song) => {
    console.log(`${song.title} by ${song.artist}`)
  });
}

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {
  songs.forEach((song) => {
    if (song.runtimeInSeconds > 180) {
      console.log(song.title);
    }
  });
}

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
