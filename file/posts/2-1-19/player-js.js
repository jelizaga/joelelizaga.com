/* Good lord, this is the pinnacle of 'move fast and break things.' */

var currentSongName;
var firstSong = true;
var currentAudioPlayer = document.getElementById("current-audio-player");
var nextAudioPlayer = document.getElementById("next-audio-player");

/* Not terribly modular, so I'll just cram it into the post. Why do I do this to myself?*/

function displaySongs(divName, songSelector) {
	/* Hide all unselected song lists. */
	songs = document.getElementsByClassName('song-div');
	for (i = 0; i < songs.length; i++) {
		songs[i].style.display = 'none';
	}
	/* Darken all songs in the selector. */
	selectors = document.getElementsByClassName('song-selector');
	for (i = 0; i < selectors.length; i++) {
		album = selectors[i].getElementsByClassName('album-cover');
		album[0].style.filter = 'brightness(40%)';
	}
	/* Brighten the selected song's selector. */
	selector = document.getElementById(songSelector);
	album = selector.getElementsByClassName('album-cover');
	album[0].style.filter = 'brightness(100%)';
	/* Display selected song's song list. */
	song = document.getElementById(divName);
	song.style.display = 'block';
}

function playSong(songId) {
	/* Determine song file location. */
	songParsed = songId.split("-");
	songName = songParsed[0];
	if (songName == 'agua' && songParsed[songParsed.length]) {
		songParsed = songParsed.pop();
	}
	var properTime = 0;
	var songLocation = "../../../file/posts/2-1-19/";
	for (var i = 1; i < songParsed.length; i++) {
		songLocation = songLocation + songParsed[i] + "-";
	}
	songLocation = songLocation.slice(0, -1);
	/* Change audio player src. */
	nextAudioPlayer.src = songLocation + "/" + songId + ".mp3";
	/* If it's already playing, we pause it all. */
	if (currentAudioPlayer.currentTime > 0 && !currentAudioPlayer.paused && currentAudioPlayer.src == nextAudioPlayer.src) {
		pauseAll();
	/* If it ain't, we play and pause everything else. */
	} else {
		pauseAll();
		if (!firstSong) {
			/* If the songs are identical we play the new song from where the last song left off. */
			if (songName == currentSongName) {
				/* If the current time is greater than the duration of the new song, set current time to 0.*/
				if (currentAudioPlayer.currentTime > nextAudioPlayer.duration) {
					properTime = 0;
				/* Else, match time. */
				} else {
					properTime = currentAudioPlayer.currentTime;
				}
			/* Otherwise, set song's current time to 0.*/
			} else {
				properTime = 0;
			}
		} else {
			firstSong = false;
		}
		currentAudioPlayer.src = songLocation + "/" + songId + ".mp3";
		currentAudioPlayer.currentTime = properTime;
		currentAudioPlayer.play();
		currentSongName = songName;
		updateSongButton(songId);
	}
}

/* All display as playable, show a pause button for the one currently playing/ */
function updateSongButton(song) {
	songButton = document.getElementById(song + "-btn");
	songButton.src = "../../../img/posts/2-1-19/pause.png";
}

/* Pause all audio, replace all song buttons with play images. */
function pauseAll() {
	var songs = document.getElementsByTagName("audio");
		for(i = 0; i < songs.length; i++) {
			songs[i].pause();
	}
	songButtons = document.getElementsByClassName('song-button');
	for (i = 0; i < songButtons.length; i++) {
		songButtons[i].src = "../../../img/posts/2-1-19/play.png"
	}
}

/* Toggling between displaying playlists and hiding them. */
function toggle(list, toggle) {
	list = document.getElementById(list);
	toggle = document.getElementById(toggle);
	firstList = false;
	firstLists = document.getElementsByClassName('first-song-list');
	for (i = 0; i < firstLists.length; i++) {
		if (firstLists[i].id == list.id) {
			firstList = true;
		}
	}
	if (list.style.display == 'table') {
		list.style.display = 'none';
		toggle.innerHTML = "&#9650;";
	} else {
		if (firstList && list.style.display != 'none') {
			list.style.display = 'none';
			toggle.innerHTML = "&#9650;";
		} else {
			list.style.display = 'table';
			toggle.innerHTML = "&#9660;";
		}
	}
}