const galleryItems = document.querySelector(".gallery__item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxClose = document.querySelector(".lightbox__close");

galleryItems.forEach((item) => {
	item.addEventListener("click", () => {
		const imageUrl = item
			.querySelector(".gallery__image")
			.getAttribute("data-src");
		lightboxImage.setAttribute("src", imageUrl);
		lightbox.style.display = "flex";
	});
});

lightboxClose.addEventListener("click", () => {
	lightbox.style.display = "none";
});