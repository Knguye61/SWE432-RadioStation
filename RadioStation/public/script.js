// JavaScript code to handle timeslot selection and playlist display
document.getElementById("timeslot").addEventListener("change", function () {
    // Get the selected timeslot value
    var selectedTimeslot = document.getElementById("timeslot").value;

    var playlistData = getPlaylistData(selectedTimeslot);


    // Display the playlist in the timeslotContainer table
    var timeslotContainer = document.getElementById("timeslotContainer");
    timeslotContainer.innerHTML = "";

    // Create table rows for each timeslot
    for (var i = 0; i < playlistData.length; i++) {
        var row = timeslotContainer.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.textContent = selectedTimeslot;
        cell2.textContent = playlistData[i];
        cell3.textContent = getdjData(row, "Reserve");
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

function getdjData(row, buttonText) {
    const cell = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = buttonText;
    
    // Add an event handler to the button if needed
    button.addEventListener("click", function() {
        // Handle button click event here
        prompt("Enter name");
        // You can access the row data if necessary
    });

    cell.appendChild(button);
    row.appendChild(cell);
}