// Assuming you have a button element with id "downloadButton"
const downloadButton = document.getElementById("downloadButton");

// Function to format text data (for example, adding line breaks)
function formatData(data) {
    // Here you can apply your formatting logic
    // For demonstration purposes, let's just add line breaks after each key-value pair
    return data.replace(/({|,)/g, "$1\n");
}

// Add a click event listener to the button
downloadButton.addEventListener("click", async () => {
    console.log("Download button clicked");
    try {
        // Fetch data from MongoDB
        let dogId = "CANINE001";
        const url = `http://localhost:3001/api/activitylevel/dog/${dogId}`; // Enclose URL in backticks
        const response = await fetch(url);
        const rawData = await response.text(); // Get the response as text

        // Format the raw data
        const formattedData = formatData(rawData);

        // Create a Blob object with the formatted text data
        const blob = new Blob([formattedData], { type: "text/plain" }); // Set MIME type to text/plain

        // Create a temporary anchor element
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "formatted_data.txt"; // Set filename to formatted_data.txt

        // Programmatically click the anchor element to trigger the download
        downloadLink.click();

        // Clean up the temporary anchor element
        URL.revokeObjectURL(downloadLink.href);
        downloadLink.remove();
    } catch (error) {
        console.error("Error:", error);
    }
});
