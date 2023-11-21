async function init() {
  const response = await fetch("../json/home.json");
  const homeContents = await response.json();
  const contentTextBoxes = document.querySelectorAll(".content_text");

  contentTextBoxes.forEach((contentTextBox, index) => {
    let contentText = "";
    const homeContent = homeContents.theAteneum[index];
    contentText += `
            <h6>더 아테네움</h6>
            <h1>${homeContent.theAteneumTitle}</h1>
            <p>${homeContent.theAteneumSummary}</p>
            <a href="#">${homeContent.theAteneumBtn}</a>
        `;

    contentTextBox.innerHTML = contentText;

    aTags = document.querySelectorAll(".content_text a");
    aTags.forEach((aTag) => {
      aTag.addEventListener("mouseover", () => {
        aTag.style.color = "#8D8D8D";
        aTag.style.border = "1px solid #8D8D8D";
      });
      aTag.addEventListener("mouseout", () => {
        aTag.style.color = "";
        aTag.style.border = "";
      });
    });
  });

  const quotationBoxes = document.querySelectorAll(".quotation");
  const cart = document.querySelector(".cart");

  const cartShow = document.querySelector("#cart_alarm");

  cart.addEventListener("click", () => {
    const cartShow = document.querySelector("#cart_alarm");
    cartShow.classList.add("showCart");
    setTimeout(() => {
      cartShow.classList.remove("showCart");
    }, 2100);
  });
  quotationBoxes.forEach((quotationBox, index) => {
    let quotationText = "";
    const homeContent = homeContents.quote[index];
    quotationText += `
        <div class="quote_text">${homeContent.quoteText}</div>
        <div class="quote_person">${homeContent.quotePerson}</div>
        `;

    quotationBox.innerHTML = quotationText;
  });
}

init();

// const videos = document.querySelectorAll("video");
// for (let video of videos) {
//   video.addEventListener("mouseenter", (e) => {
//     e.currentTarget.querySelector("video").play();
//   });
//   video.addEventListener("mouseleave", (e) => {
//     e.currentTarget.querySelector("video").pause();
//   });
// }

// slider
const items = document.querySelector(".items");
const item = items.querySelectorAll(".item");
const itemCount = item.length;
console.log(itemCount);

const slideWidth = 500;
const slideMargin = 50;
let currentIndex = 0;
const prevBtn = document.querySelector("#btright");
const nextBtn = document.querySelector("#btleft");

// // item 너비값 정의
// const updateWidth = () => {
//   let currentSlides = document.querySelectorAll(".item");
//   let newSlideCount = currentSlides.length;
//   let newWidth = `
//   ${(slideWidth + slideMargin) * newSlideCount - slideMargin}px
//   `;
//   items.style.width = newWidth;
//   console.log(newWidth);
// };
// updateWidth();

// const moveSlide = (num) => {
//   items.style.keft = `${num * (slideWidth + slideMargin)}px`;
//   currentIndex = num;
//   console.log(currentIndex, itemCount);
// };
// moveSlide()
const moveSlide = (num) => {
  items.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIndex = num;
  console.log(currentIndex, itemCount);

  if (currentIndex === itemCount || currentIndex === -itemCount) {
    setTimeout(() => {
      items.classList.remove("animated");
      items.style.left = "0px";
      currentIndex = 0;
    }, 500);
    setTimeout(() => {
      items.classList.add("animated");
    }, 600);
  }
};

prevBtn.addEventListener("click", () => {
  moveSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  moveSlide(currentIndex + 1);
});

/************************************************************************/
// ---------- Section1 Slider jQuery ----------
$(document).ready(function () {
  $(window)
    .resize(function () {
      if (window.innerWidth > 767) {
        // ----- PC ver -----
        $(".items").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        });
        // ----- Mobile ver -----
        // @media all and (min-width: 360px) and (max-width: 767px)
      } else {
        /* mobile ver*/
        $(".items").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        });
      }
      // ----- Tablet ver -----
      // @media all and (min-width: 768px) and (max-width: 960px)
    })
    .resize();
});
/************************************************************************/
