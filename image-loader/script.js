document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        const loader = img.previousElementSibling;
        setTimeout(() => {
            loader.classList.add("hidden");
            img.classList.remove("hidden");
        }, 50000);
        // img.addEventListener("load", function () {
        // });


        img.addEventListener("error", function () {
            loader.textContent = "Failed to load image";
        });
    });
});
