let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playID = document.getElementById("playID");
let playID2 = document.getElementById("playID2");
let playID3 = document.getElementById("playID3");
let playID4 = document.getElementById("playID4");
let playID5 = document.getElementById("playID5");

const songList = [
    {
        title: "Love Story",
        artist: "Taylor Swift",
        imgSrc: "images/taylorSwift.jpg",
        audioSrc: "media/LoveStory.mp3",
        bgColor: "linear-gradient(90deg, rgba(0,0,0,1) 32%, rgba(124,245,60,1) 100%);"
    },
    {
        title: "Isn't it Lovely",
        artist: "Billie Ellish",
        imgSrc: "images/ellish.jpg",
        audioSrc: "media/lovely.mp3",
        bgColor: "linear-gradient(90deg, rgba(0,0,0,1) 32%, rgba(124,245,60,1) 100%);"
    },
    {
        title: "Calm Down",
        artist: "Selena Gomez",
        imgSrc: "images/selena.jpg",
        audioSrc: "media/calmDown.mp3",
        bgColor: "linear-gradient(90deg, rgba(0,0,0,1) 32%, rgba(124,245,60,1) 100%);"
    },
    {
        title: "Stay Forever",
        artist: "Justin Bieber",
        imgSrc: "images/justinBieber.jpg",
        audioSrc: "media/stay.mp3",
        bgColor: "linear-gradient(90deg, rgba(0,0,0,1) 32%, rgba(124,245,60,1) 100%);"
    }
];

let currentSongIndex = 0;

updateWindowContent();

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    // const left = document.querySelector(".left");
    if(currentSongIndex === 0){
        if (playID.classList.contains("fa-pause") && playID2.classList.contains("fa-pause")) {
            song.pause();
            playID.classList.remove("fa-pause");
            playID.classList.add("fa-play");
            playID2.classList.remove("fa-pause");
            playID2.classList.add("fa-play");
        }
        else {
            song.play();
            playID.classList.add("fa-pause");
            playID.classList.remove("fa-play");
            playID2.classList.add("fa-pause");
            playID2.classList.remove("fa-play");
        }
    }
    else if(currentSongIndex === 1){
        if (playID.classList.contains("fa-pause") && playID3.classList.contains("fa-pause")) {
            song.pause();
            playID.classList.remove("fa-pause");
            playID.classList.add("fa-play");
            playID3.classList.remove("fa-pause");
            playID3.classList.add("fa-play");
        }
        else {
            song.play();
            playID.classList.add("fa-pause");
            playID.classList.remove("fa-play");
            playID3.classList.add("fa-pause");
            playID3.classList.remove("fa-play");
        }
    }
    else if(currentSongIndex === 2){
        if(playID.classList.contains("fa-pause") && playID4.classList.contains("fa-pause")){
            song.pause();
            playID.classList.remove("fa-pause");
            playID.classList.add("fa-play");
            playID4.classList.remove("fa-pause");
            playID4.classList.add("fa-play");
        }
        else {
            song.play();
            playID.classList.add("fa-pause");
            playID.classList.remove("fa-play");
            playID4.classList.add("fa-pause");
            playID4.classList.remove("fa-play");
        }
    }
    else if(currentSongIndex === 3){
        if(playID.classList.contains("fa-pause") && playID5.classList.contains("fa-pause")){
            song.pause();
            playID.classList.remove("fa-pause");
            playID.classList.add("fa-play");
            playID5.classList.remove("fa-pause");
            playID5.classList.add("fa-play");
        }
        else {
            song.play();
            playID.classList.add("fa-pause");
            playID.classList.remove("fa-play");
            playID5.classList.add("fa-pause");
            playID5.classList.remove("fa-play");
        }
    }
    else{
        if(playID.classList.contains("fa-pause") && playID2.classList.contains("fa-play")){
            playID2.classList.add("fa-pause");
            playID2.classList.remove("fa-play");
        }
    }

}
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function () {
    song.currentTime = progress.value;
}


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Add an event listener for the 'ended' event
song.addEventListener("ended", playNextSong);

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    updateWindowContent();
    song.play();
    playPause();
}

function updateWindowContent() {
    const windowDiv = document.querySelector(".window");
    const imgDiv = windowDiv.querySelector(".img1");
    const controlsDiv = windowDiv.querySelector(".controls");
    const backward = windowDiv.querySelector(".fa-backward");
    const forward = windowDiv.querySelector(".fa-forward");
    const progress = windowDiv.querySelector(".progress");

    if (currentSongIndex === 1) {
        windowDiv.style.background = "linear-gradient(90deg, rgba(224,160,44,1) 37%, rgba(235,247,61,1) 100%)";
        windowDiv.style.color = "#fff";
        controlsDiv.querySelector(".play").style.backgroundColor = "rgb(255, 81, 0)";
        controlsDiv.querySelector(".play").style.color = "#fff";
        backward.style.color = "rgb(255, 81, 0)";
        forward.style.color = "rgb(255, 81, 0)";
        progress.style.backgroundColor = "rgb(255, 81, 0)";
    }
    else if (currentSongIndex === 2) {
        windowDiv.style.background = "linear-gradient(90deg, rgba(172,169,169,1) 25%, rgba(255,255,253,1) 80%)";
        windowDiv.style.color = "rgb(78, 75, 75)";
        controlsDiv.querySelector(".play").style.backgroundColor = "rgb(78, 75, 75)";
        controlsDiv.querySelector(".play").style.color = "#fff";
        backward.style.color = "rgb(78, 75, 75)";
        forward.style.color = "rgb(78, 75, 75)";
        progress.style.backgroundColor = "rgb(78, 75, 75)";
    }
    else if (currentSongIndex === 3) {
        windowDiv.style.background = "linear-gradient(90deg, rgba(61,22,110,1) 44%, rgba(198,144,209,1) 100%)";
        windowDiv.style.color = "#fff";
        controlsDiv.querySelector(".play").style.backgroundColor = "rgba(198,144,209,1)";
        controlsDiv.querySelector(".play").style.color = "#fff";
        backward.style.color = "rgba(198,144,209,1)";
        forward.style.color = "rgba(198,144,209,1)";
        progress.style.backgroundColor = "rgba(198,144,209,1)";
    }
    else {
        windowDiv.style.background = "linear-gradient(90deg, rgba(187, 187, 187, 1) 27%, rgba(206, 244, 249, 1) 100%)";
        windowDiv.style.color = "#fff";
        controlsDiv.querySelector(".play").style.backgroundColor = "#00a3d7";
        controlsDiv.querySelector(".play").style.color = "#fff";
        backward.style.color = "#00a3d7";
        forward.style.color = "#00a3d7";
        progress.style.backgroundColor = "#00a3d7";
    }

    imgDiv.innerHTML = `
        <img src="${songList[currentSongIndex].imgSrc}" alt="${songList[currentSongIndex].artist}" width="250px">
        <h1>${songList[currentSongIndex].title}</h1>
        <p>${songList[currentSongIndex].artist}</p>
    `;

    song.src = songList[currentSongIndex].audioSrc;
}

document.querySelector(".forward").addEventListener("click", function () {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    updateWindowContent();
});
document.querySelector(".backward").addEventListener("click", function () {
    currentSongIndex = (currentSongIndex - 1) % songList.length;
    updateWindowContent();
});


function createPlaylist() {
    const modal = document.getElementById("playlistModal");
    modal.style.display = "block";



    // Dynamically create checkboxes for available songs
    const availableSongsDiv = document.getElementById("availableSongs");
    availableSongsDiv.innerHTML = ""; // Clear existing content


    for (let i = 0; i < songList.length; i++) {
        const songCheckbox = document.createElement("input");
        songCheckbox.type = "checkbox";
        songCheckbox.value = i;
        songCheckbox.className = "songCheckbox";
        songCheckbox.id = `songCheckbox${i}`;

        const songLabel = document.createElement("label");
        songLabel.htmlFor = `songCheckbox${i}`;
        songLabel.innerHTML = `${songList[i].title} - ${songList[i].artist}`;

        availableSongsDiv.appendChild(songCheckbox);
        availableSongsDiv.appendChild(songLabel);
        availableSongsDiv.appendChild(document.createElement("br"));
    }
}

// let playlistOrder = [];
function addPlaylist() {
    const playlistName = document.getElementById("playlistName").value;

    if (playlistName.trim() === "") {
        alert("Please enter a valid playlist name");
        return;
    }

    const selectedSongs = [];

    // Collect selected songs
    const checkboxes = document.querySelectorAll(".songCheckbox");
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const songIndex = checkbox.value;
            selectedSongs.push(songList[songIndex]);
        }
    });

    playlistOrder = [];
    selectedSongs.forEach((song, index) => {
        playlistOrder.push(index);
    });

    // Create a div for the playlist
    const playlistDiv = document.createElement("div");
    playlistDiv.className = "playlist";
    playlistDiv.innerHTML = `<h3>${playlistName}</h3>`;

    // Add selected songs to the playlist
    selectedSongs.forEach((song, index) => {
        const songDiv = document.createElement("div");
        songDiv.innerHTML = `${song.title} - ${song.artist} <i class="fa-solid fa-play" id="playID${index}" style="color: #ffffff; cursor: pointer;"></i>`;
        playlistDiv.appendChild(songDiv);

        // Attach click event listener to play icon
        const playIcon = songDiv.querySelector(`#playID${index}`);
        playIcon.addEventListener("click", function () {
            playSong(index);
        });
    });
    const createPlaylistButton = document.querySelector(".left button");
    createPlaylistButton.parentNode.insertBefore(playlistDiv, createPlaylistButton.nextSibling);

    // Close the modal after creating the playlist
    closeModal();
}




function playSong(index) {
    currentSongIndex = index;
    updateWindowContent()
    // currentSongIndex = playlistOrder[index];
    console.log(currentSongIndex)

    if (currentSongIndex === 0){
        const playIcon = document.getElementById(`playID${index}`);
        if (playIcon.classList.contains("fa-pause")) {
            song.pause();
            playIcon.classList.remove("fa-pause");
            playIcon.classList.add("fa-play");
            playID.classList.remove("fa-pause");
            playID.classList.add("fa-play");
            playID2.classList.remove("fa-pause");
            playID2.classList.add("fa-play");
        }
        else {
            song.play();
            playIcon.classList.add("fa-pause");
            playIcon.classList.remove("fa-play");
            playID.classList.add("fa-pause");
            playID.classList.remove("fa-play");
            playID2.classList.add("fa-pause");
            playID2.classList.remove("fa-play");
        }
    }
    else if(currentSongIndex === 1){
        const playIcon = document.getElementById(`playID${index}`);
        if (playIcon.classList.contains("fa-pause")) {
            song.pause();
            playIcon.classList.remove("fa-pause");
            playIcon.classList.add("fa-play");
            playID.classList.remove("fa-pause");
            playID.classList.add("fa-play");
            playID3.classList.remove("fa-pause");
            playID3.classList.add("fa-play");
        }
        else {
            song.play();
            playIcon.classList.add("fa-pause");
            playIcon.classList.remove("fa-play");
            playID.classList.add("fa-pause");
            playID.classList.remove("fa-play");
            playID3.classList.add("fa-pause");
            playID3.classList.remove("fa-play");
        }
    }
    else if(currentSongIndex === 2){
        const playIcon = document.getElementById(`playID${index}`);
        if (playIcon.classList.contains("fa-pause")) {
            song.pause();
            playIcon.classList.remove("fa-pause");
            playIcon.classList.add("fa-play");
            playID.classList.remove("fa-pause");
            playID.classList.add("fa-play");
            playID4.classList.remove("fa-pause");
            playID4.classList.add("fa-play");
        }
        else {
            song.play();
            playIcon.classList.add("fa-pause");
            playIcon.classList.remove("fa-play");
            playID.classList.add("fa-pause");
            playID.classList.remove("fa-play");
            playID4.classList.add("fa-pause");
            playID4.classList.remove("fa-play");
        }
    }

    // const playIcon = document.getElementById(`playID${index}`);

    // if (playIcon.classList.contains("fa-pause")) {
    //     song.pause();
    //     playIcon.classList.remove("fa-pause");
    //     playIcon.classList.add("fa-play");
    //     playID.classList.remove("fa-pause");
    //     playID.classList.add("fa-play");
    //     playID2.classList.remove("fa-pause");
    //     playID2.classList.add("fa-play");
    // }
    // else {
    //     song.play();
    //     playIcon.classList.add("fa-pause");
    //     playIcon.classList.remove("fa-play");
    //     playID.classList.add("fa-pause");
    //     playID.classList.remove("fa-play");
    //     playID2.classList.add("fa-pause");
    //     playID2.classList.remove("fa-play");
    // }
}




function closeModal() {
    const modal = document.getElementById("playlistModal");
    modal.style.display = "none";
}

// Add an event listener for the close button
document.querySelector(".close").addEventListener("click", closeModal);
