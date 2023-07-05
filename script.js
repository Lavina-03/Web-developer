document.getElementById("downloadBtn").addEventListener("click", async () => {
    try {
        const urlInput = document.getElementById("urlInput").value;
        const response = await fetch(urlInput);
        const file = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = new Date().getTime();
        link.click();
    } catch (error) {
        alert("Failed to download: " + error.message);
    }
});
