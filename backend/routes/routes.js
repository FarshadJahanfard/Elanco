// Assuming you have a button element with id "downloadButton"
const downloadButton = document.getElementById("downloadButton");

// Add a click event listener to the button
downloadButton.addEventListener("click", async () => {
    console.log("Download button clicked");
    try {
        // Fetch data from the server based on dog ID
        let dogId = "CANINE001"; // Change this to the desired dog ID
        const url = `http://localhost:3001/api/activitylevel/dog/${dogId}`; // Enclose URL in backticks
        const response = await fetch(url);
        const rawData = await response.json(); // Get the response as JSON

        if (rawData.length > 0) {
            // Format the data for download
            const formattedData = rawData.map(entry => {
                return `DogID: ${entry.DogID}, ActivityLevel: ${entry.ActivityLevel}`;
            }).join('\n');

            // Create a Blob object with the formatted text data
            const blob = new Blob([formattedData], { type: "text/plain" }); // Set MIME type to text/plain

            // Create a temporary anchor element
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = "dog_data.txt"; // Set filename

            // Programmatically click the anchor element to trigger the download
            downloadLink.click();

            // Clean up the temporary anchor element
            URL.revokeObjectURL(downloadLink.href);
            downloadLink.remove();
        } else {
            console.error("No data found for the specified dog ID");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});