document.addEventListener("DOMContentLoaded", function() {
    // Check if the loader has been shown before
    if (!localStorage.getItem("loaderShown")) {
        // Simulate a delay for demonstration purposes
        setTimeout(function() {
            // Hide the loader
            document.getElementById("loader").style.display = "none";

            // Show the content
            document.getElementById("content").style.display = "block";

            // Set the flag in localStorage to indicate the loader has been shown
            localStorage.setItem("loaderShown", "true");
        }, 20000); // Adjust the delay as needed

        // Destroy the localStorage item after the delay
        setTimeout(function() {
            localStorage.removeItem("loaderShown");
            window.location.reload();
        }, 50000);
    } else {
        // If the loader has been shown before, hide it and show the content immediately
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
});
