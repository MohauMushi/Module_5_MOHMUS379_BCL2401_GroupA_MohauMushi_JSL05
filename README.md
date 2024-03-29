# [JSL05]: Galaxy Playlist Generator

### Galaxy Playlist Generator

# Project Overview
In this project, the task was to combine knowledge of JavaScript arrays and the `map()` function to create a personalized "Awesome Mix" playlist for each of the Guardians of the Galaxy. This involves expanding the songs array, assigning music genre preferences to each Guardian, implementing the generatePlaylist function, dynamically creating and appending elements to display the playlists, and testing the application to ensure correct functionality.

![alt text](JSL05_solution.png)

## Steps required for the project :

1. **Expand the Songs Array**: Add at least five songs to the `songs` array, each with `title`, `artist`, and `genre`.
2. **Assign Preferences**: Complete the `guardians` object by assigning each Guardian their preferred music genre.
3. **Generate Playlists**: Implement the `generatePlaylist` function. Use the `map()` function to create a personalized playlist for each Guardian based on their genre preference.
4. **Display Playlists**: Dynamically create and append elements to the `#playlists` div to display each Guardian's playlist. Include the Guardian's name and their list of songs.
5. **Test Your Application**: Ensure that your application correctly filters songs by genre for each Guardian and displays the playlists on the web page.

## Challenges
When implementing code, a challenge I faced was ensuring the correct creation and appending of elements to the DOM to display the playlist. This involved using the `document.createElement()` method to create new HTML elements and then appending them to the desired location in the DOM. The other challenge was the `forEach()` method to loop through the songs array and add the songs to the correct playlist


## 📚 What I learned
To manipulate arrays and objects, use the `map()` function for data transformation, and dynamically update the DOM based on data and also the `filter()` function to filter and organise songs based on each Guardian's musical preference, displaying a playlist tailored just for them.


