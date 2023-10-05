// JavaScript code to handle timeslot selection and playlist display
document.getElementById("timeslot").addEventListener("change", function () {
    // Get the selected timeslot value
    var selectedTimeslot = document.getElementById("timeslot").value;

    var playlistData = getPlaylistData(selectedTimeslot);

    // Display the playlist in the playlistContainer table
    var playlistContainer = document.getElementById("playlistContainer");
    playlistContainer.innerHTML = "";

    // Create table rows for each song
    for (var i = 0; i < playlistData.length; i++) {
        var row = playlistContainer.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = selectedTimeslot;
        cell2.textContent = playlistData[i];
    }
});

// Placeholder function to fetch playlist data (replace with actual API call)
function getPlaylistData(timeslot) {
    var playlists = {
        "morning": ["Playlist 1", "Playlist 2", "Playlist 3"],
        "afternoon": ["Playlist 4", "Playlist 5", "Playlist 6"],
        "evening": ["Playlist 7", "Playlist 8", "Playlist 9"]
    };

    return playlists[timeslot] || [];
}