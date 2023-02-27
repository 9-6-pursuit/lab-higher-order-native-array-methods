/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
let sortedSongs = songs.sort((s1, s2) => {
  return s1.runtimeInSeconds - s2.runtimeInSeconds;
  })
  return sortedSongs;
}
/* NOTES: 
1. the sort() method mutates (changes) the original array, which is why I defiend a new variable called sortedSongs, so that the original array stays the same - pratcing for real life situations where we would not want to mutate the original data

2. sort() method works naturally with strings (letters), however we are working with numbers & when doing so we have to write a compare function to compare the property values:

    1. array.sort(function(a, b){return a.year - b.year});  (ascending)

    2. array.sort(function(a, b){return a.year - b.year});  (descending)

3. Also keep in mind the sort() method is CASE SENSITIVE which means "a" & "A" are read differently!!! CAPITAL LETTERS COME FIRST (A, B, O,  then a, b, o) !!
*/ 



/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  /* let descending = songs.sort((s1,s2) => s1.artist.toLowerCase() - s2.artist.toLowerCase())
  return descending.reverse();
*/

 let descending = songs.sort((s1, s2) => s1.artist.toLowerCase() > s2.artist.toLowerCase() ? -1 : 1);

  return descending;
}
/* sort () cheatsheet
example 1:
myArray.sort(
  function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return 1;
    if (a.toLowerCase() > b.toLowerCase()) return -1;
    if (a.toLowerCase() = b.toLowerCase()) return -1return 0;
  }
);

example 2:
array.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

localeCompare():
- The localeCompare() method compares two strings in the current locale.

- The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.

If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.


If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
*/



/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  let ascending = songs.sort((s1, s2) => s1.title.toLowerCase() < s2.title.toLowerCase() ? -1 : 1);

  return ascending;
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
