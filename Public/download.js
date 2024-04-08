
const downloadButton = document.getElementById("downloadButton");
var savedUsername = localStorage.getItem('username');

function formatData(data) {
    return data.replace(/({|,)/g, "$1\n");
}
var savedUsername = localStorage.getItem('username');

downloadButton.addEventListener("click", async () => {
    console.log("Download button clicked");
    try {
        
        let dogId = savedUsername;
        const url = `http://localhost:3001/api/routes/dog/${dogId}`; 
        const response = await fetch(url);
        const rawData = await response.text(); 

        const formattedData = formatData(rawData);

        
        const blob = new Blob([formattedData], { type: "text/plain" }); 

       
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "formatted_data.txt"; 

      
        downloadLink.click();

       
        URL.revokeObjectURL(downloadLink.href);
        downloadLink.remove();
    } catch (error) {
        console.error("Error:", error);
    }

});
