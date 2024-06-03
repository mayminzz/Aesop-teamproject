const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  if (window.innerWidth > 767) {
    video.style.filter = "grayscale(0.4)";
    video.addEventListener("mouseenter", () => {
      video.play();
      video.style.filter = "";
    });
  }
  if (window.innerWidth > 767) {
    video.addEventListener("mouseleave", () => {
      video.pause();
      video.style.filter = "grayscale(0.4)";
    });
  } else {
    video.autoplay = true;
  }
});
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
      if (window.innerWidth < 767) {
        // ----- PC ver -----
        $(".items").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        });
      } else if ( window.innerWidth > 768) {
        //tablet
        $(".items").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        });
      }
    })
    .resize();
});
// ********** Common **********
// //=========================== left gnb ==================================
const leftGnblists = document.querySelectorAll(".gnb > li");
const gnbDetailBoxes = document.querySelectorAll(".gnb_detail_box");
const header = document.querySelector("header");
leftGnblists.forEach((gnblist) => {
  gnblist.addEventListener("mouseover", (e) => {
    const targetGnbBox = e.currentTarget.querySelector(".gnb_detail_box");
    gnbDetailBoxes.forEach((box) => {
      box.classList.remove("active");
    });
    targetGnbBox.classList.add("active");
  });
  header.addEventListener("mouseleave", (e) => {
    const targetGnbBox = e.currentTarget.querySelector(".gnb_detail_box");
    gnbDetailBoxes.forEach((box) => {
      box.classList.remove("active");
    });
    targetGnbBox.classList.remove("active");
  });
});

//     // ================gift top box =================
const giftTopBox = document.querySelector(".gift_top_box");
const giftTopList = document.querySelector(".gift_top_list");

const xBtn = document.querySelector(".gift_top_box .fas");
const giftTopH4 = document.querySelector(".gift_top h4");

giftTopH4.addEventListener("click", () => {
  giftTopBox.classList.add("show");
  container.classList.add("bgOpacity");
  container.classList.add("removeContainer");
  header.classList.add("bgOpacity");
});
xBtn.addEventListener("click", () => {
  giftTopBox.classList.remove("show");
  container.classList.remove("bgOpacity");
  container.classList.remove("removeContainer");
  header.classList.remove("bgOpacity");
});

// ====================== right Gnb =================================
const cart = document.querySelector(".cart");
const cartShow = document.querySelector("#cart_alarm");

cart.addEventListener("click", (e) => {
  e.preventDefault();
  cartShow.classList.add("showCart");
  setTimeout(() => {
    cartShow.classList.remove("showCart");
  }, 2100);
});
// 로그인
const login = document.querySelector(".login");
const loginModal = document.querySelector(".login_modal");
const delLogin = document.querySelector(".login_inner > .fas");

login.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.add("loginShow");
  container.classList.add("bgOpacity");
  header.classList.add("bgOpacity");
});
delLogin.addEventListener("click", () => {
  loginModal.classList.remove("loginShow");
  container.classList.remove("bgOpacity");
  header.classList.remove("bgOpacity");
});

const loginSubmit = document.querySelector(".login_inner input[type=submit]");
const userEmail = document.querySelector("#login_email");

loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let alarm =
    userEmail.value !== "" && userEmail.value !== ""
      ? "이솝에 방문하신 걸 환영합니다!"
      : "이메일과 비밀번호를 입력해주세요!";
  alert(alarm);
});

// ==================== mobile Gnb =================================
const modalGnb = document.querySelector("#mobile_gnb_list");

// ========================== toggle ================================
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  modalGnb.classList.toggle("showModalGnb");
  document.querySelector(".container").classList.toggle("removeContainer");
  document.querySelector(".gift_top").classList.toggle("removeGiftTop");
});

// back to top + nav scroll
const btn = document.querySelector(".back_to_top");
const html = document.querySelector("html");
// 버튼이 나타날 스크롤 위치
let offset;
let scrollPos;
let documentHeight;

// 문서 높이 계산
documentHeight = Math.max(html.offsetHeight, html.scrollHeight);
if (documentHeight != 0) {
  offset = documentHeight / 16;
}
scrollPos = html.scrollTop;

// 스크롤 방향을 판별하기 위해서 이전 스크롤 위치를 변수에 저장
let previousScrollPos = 0;

// 스크롤 이벤트
window.addEventListener("scroll", () => {
  scrollPos = html.scrollTop;

  if (scrollPos > offset) {
    btn.classList.add("btt_show");
  } else {
    btn.classList.remove("btt_show");
  }

  const header = document.querySelector("header");
  const giftTop = document.querySelector(".gift_top");

  if (scrollPos <= previousScrollPos) {
    header.classList.add("scrollEffect");
  }
  if (scrollPos > previousScrollPos) {
    header.classList.remove("scrollEffect");
  }
  if (scrollPos < 45) {
    header.classList.remove("scrollEffect");
  }
  // 현재 스크롤 위치를 저장
  previousScrollPos = scrollPos;
});
//======================= 오른 쪽 작은 문의사항 창 =============================
const queryBtn = document.querySelector("#query");
const miniBox = document.querySelector(".mini_ask");
const miniDelBtn = miniBox.querySelector(".fas");
const container = document.querySelector(".container");

queryBtn.addEventListener("click", () => {
  miniBox.classList.add("show");
  container.classList.add("miniBackground");
});
miniDelBtn.addEventListener("click", () => {
  miniBox.classList.remove("show");
  container.classList.remove("miniBackground");
});
