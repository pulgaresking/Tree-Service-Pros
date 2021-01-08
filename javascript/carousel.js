function slides() {
  const items = document.querySelectorAll(".client-left-wrapper div");
  const carousel = document.querySelector(".client-left-wrapper");

  let itemWidth = 0;

  setInterval(() => {
    itemWidth += 500;
    items.forEach((item) => {
      item.style.transform = `translateX(${-itemWidth}px)`;
    });
    if (itemWidth === (items.length - 1) * 500) {
      itemWidth = -500;
    }
  }, 7000);
}

slides();
