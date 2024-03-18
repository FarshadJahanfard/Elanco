// Assuming you have a button element with id "downloadButton"
const downloadButton = document.getElementById("downloadButton");

// Add a click event listener to the button
downloadButton.addEventListener("click", async () => {
    console.log("Download button clicked");
    try {
        // Fetch data from MongoDB
    let dogId = "CANINE001";
        const url = `http://localhost:3001/api/activitylevel/dog/${dogId}`; // Enclose URL in backticks
        const response = await fetch(url);
        const data = await response.json();

        // Convert data to JSON string
        const jsonData = JSON.stringify(data);

        // Create a Blob object with the JSON data
        const blob = new Blob([jsonData], { type: "application/json" });

        // Create a temporary anchor element
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "data.json";

        // Programmatically click the anchor element to trigger the download
        downloadLink.click();

        // Clean up the temporary anchor element
        URL.revokeObjectURL(downloadLink.href);
        downloadLink.remove();
    } catch (error) {
        console.error("Error:", error);
    }

});
