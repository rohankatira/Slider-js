document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel_Item");
  const button_Html = Array.from(items, () => `<span class="carousel_button"></span>`);

  carousel.insertAdjacentHTML(
      "beforeend",
      `<div class="carousel__nav">${button_Html.join("")}</div>`
  );

  const buttons = carousel.querySelectorAll(".carousel_button");
  let currentIndex = 0; 
  const intervalTime = 3000; 

  const updateCarousel = (index) => {
      items.forEach((item) => item.classList.remove("carousel_Item_selected"));
      buttons.forEach((button) => button.classList.remove("carousel_button_selected"));


      items[index].classList.add("carousel_Item_selected");
      buttons[index].classList.add("carousel_button_selected");
  };

  buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
          currentIndex = i; 
          updateCarousel(currentIndex);
      });
  });

  
  updateCarousel(currentIndex);

  
  setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length; 
      updateCarousel(currentIndex);
  }, intervalTime);
});