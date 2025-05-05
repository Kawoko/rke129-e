document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".profile-carousel");

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll(".carousel-image");
        const leftBtn = carousel.querySelector(".carousel-btn.left");
        const rightBtn = carousel.querySelector(".carousel-btn.right");
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle("active", i === index);
            });
        }

        leftBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        rightBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        showImage(currentIndex);
    });
});