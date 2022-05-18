const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const productImage = document.querySelector(".product-image");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");

hamburger.addEventListener("click", () => {
  mobileSidebar.style.clipPath = "circle(141.4% at 100% 100%)";
});
close.addEventListener("click", () => {
  mobileSidebar.style.clipPath = "circle(0% at 100% 100%)";
});

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((element) => {
      console.log(element.title);
    });
  });
