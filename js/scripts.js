const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    const image = entry.target;

    image.src = image.src.replace("?w=10", "?w=1000");

    observer.unobserve(image)
  });
}, {});

images.forEach((image) => {
  observer.observe(image);
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const src1000 = image.src.replace(/\?w=\d+/, "?w=1000");
    const src2000 = image.src.replace(/\?w=\d+/, "?w=2000");
    
    lightboxImg.src = src1000; // abre na hora com 1000
    lightbox.classList.add("active");
    
    const hd = new Image();
    hd.src = src2000;
    hd.onload = () => { lightboxImg.src = src2000; }; // troca quando terminar
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});