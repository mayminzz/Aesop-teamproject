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
  console.log("click");
  setTimeout(() => {
    cartShow.classList.remove("showCart");
  }, 2100);
});
// 로그인
const login = document.querySelector(".login");
const loginModal = document.querySelector(".login_modal");
const delLogin = document.querySelector(".loginDelBtn");

login.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.add("loginShow");
  container.classList.add("bgOpacity");
  header.classList.add("bgOpacity");
});

delLogin.addEventListener("click", (e) => {
  e.preventDefault();
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

//main============================================
async function init() {
  const response = await fetch("./json/productNav.json");
  const productNavs = await response.json();
  display(productNavs);
}
//section1===============

function display(productNavs) {
  //section1 productNav
  const navWrap = document.querySelector(".nav_wrap");
  const ul = document.createElement("ul");
  let nav = "";
  productNavs.categories.forEach((productNav) => {
    nav += `
        <li><a href="${productNav.categoryLink}" target="_blank">${productNav.category}</a></li>
      `;
  });
  navWrap.appendChild(ul).innerHTML = nav;

  //section1 product search
  const searchProductAll = document.querySelector(
    ".product_page_search_product"
  );
  let search = "";

  productNavs.searchProducts.forEach((searchProduct) => {
    search += `
          <a href="${searchProduct.searchLink}" target="_blank">${searchProduct.searchName}
            <img src="${searchProduct.searchImage}" alt="${searchProduct.searchAlt}">
          </a>`;
  });
  searchProductAll.innerHTML = search;

  //section2===============
  //section3===============
  const adProduct = document.querySelector(".product_page_ad_prduct");
  let ad = "";
  let over = "";
  productNavs.barsoapProducts.forEach((barsoapProduct) => {
    ad += `
          <li class="adProducts">
            <a class="block" href="${barsoapProduct.productLink}" target="_blank">
              <img src="${barsoapProduct.productiImage}" alt="${barsoapProduct.productAlt}">
              <p class="name">${barsoapProduct.productName}</p>
              <p class="info">${barsoapProduct.productInfo}</p>
              <p class="price">${barsoapProduct.productPrice}</p>
            </a>
            <div class="over">
              <p class="Weight">${barsoapProduct.productWeight}</p>
              <div class="button">
                <button class="buy_btn">카트에 추가</button>
                <button class="buy_btn">바로구매 하기</button>
              </div>
            </div>
          </li>
      `;
  });

  const ulProduct = document.createElement("ul");
  ulProduct.innerHTML = ad;
  adProduct.appendChild(ulProduct);

  const adProducts = document.querySelectorAll(".adProducts");
  adProducts.forEach((adProductEl) => {
    adProductEl.addEventListener("mouseover", () => {
      if (window.innerWidth > 767) {
        adProductEl.querySelector(".over").style.display = "block";
      }
    });

    adProductEl.addEventListener("mouseout", () => {
      if (window.innerWidth > 767) {
        adProductEl.querySelector(".over").style.display = "none";
      }
    });

    const buyBtn = adProductEl.querySelectorAll("button");
    buyBtn.forEach((button) => {
      button.addEventListener("mouseover", (e) => {
        button.style.background = "#444";
        button.style.cursor = "pointer";
      });
      button.addEventListener("mouseout", (e) => {
        button.style.background = "";
      });
      button.addEventListener("click", () => {
        const alarm =
          button.innerText === "카트에 추가"
            ? "카트에 추가되었습니다."
            : "구매하기 창으로 이동합니다.";
        alert(alarm);
      });
    });
  });
  //section4===============
  const seasonalProductsbox = document.querySelector(
    ".product_page_seasonal_product"
  );
  let seasonal = "";
  productNavs.seasonalProducts.forEach((seasonalProduct) => {
    seasonal += `
      <li class="seasonalProuctsLi">
        <a href="${seasonalProduct.seasonalLink}" target="_blank">
          <img src="${seasonalProduct.seasonalImage}" alt="${seasonalProduct.seasonalAlt}">
          <p class="name">${seasonalProduct.seasonalName}</p>
          <p class="info">${seasonalProduct.seasonalInfo}</p>
          <p class="price">${seasonalProduct.seasonalPrice}</p>
        </a>
        <div class="over">
          <p class="weight">
          </p>
          <div class="button">
            <button class="buy_btn">카트에 추가</button>
            <button class="buy_btn">바로구매 하기</button>
          </div>
        </div>
      </li>
    `;
  });

  const ulseasonal = document.createElement("ul");
  ulseasonal.innerHTML = seasonal;
  seasonalProductsbox.appendChild(ulseasonal);

  const seasonalProuctsLi = document.querySelectorAll(".seasonalProuctsLi");
  seasonalProuctsLi.forEach((seasonalProuctsLiEl) => {
    seasonalProuctsLiEl.addEventListener("mouseover", () => {
      if (window.innerWidth > 767) {
        seasonalProuctsLiEl.querySelector(".over").style.display = "block";
      }
    });
    seasonalProuctsLiEl.addEventListener("mouseout", () => {
      if (window.innerWidth > 767) {
        seasonalProuctsLiEl.querySelector(".over").style.display = "none";
      }
    });

    const buyBtn = seasonalProuctsLiEl.querySelectorAll("button");
    buyBtn.forEach((button) => {
      button.addEventListener("mouseover", (e) => {
        button.style.background = "#444";
        button.style.cursor = "pointer";
      });
      button.addEventListener("mouseout", (e) => {
        button.style.background = "";
      });
      button.addEventListener("click", () => {
        const alarm =
          button.innerText === "카트에 추가"
            ? "카트에 추가되었습니다."
            : "구매하기 창으로 이동합니다.";
        alert(alarm);
      });
    });

    const weight = document.querySelector(".weight");
    weight.innerHTML = `
      <input id="weight1" name="weight" type="radio" value="41,000" /> 
      <label for="weight1">100 mL</label>
      <input id="weight2" name="weight" type="radio" value="120,000" />
      <label for="weight2">500 mL</label>
    `;

    const radios = weight.querySelectorAll("input[type='radio']");
    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        const seasonalProuctsLiEl =
          document.querySelector(".seasonalProuctsLi");
        const inputRadio = weight.querySelector("input[type='radio']:checked");
        const price = seasonalProuctsLiEl.querySelector(".price");
        const image = seasonalProuctsLiEl.querySelector("img");

        price.innerText = `₩${inputRadio.value}`;

        if (radio.id === "weight1") {
          image.src = "./img/product/product_season1.png";
          image.alt = "seasonal1";
        } else if (radio.id === "weight2") {
          image.src = "./img/product/product_season1_1.png";
          image.alt = "seasonal1_1";
        }
      });
    });
  });
}
init();

//page1============================================================================
const search = document.querySelector(".product_page_search");
const searchText = document.createElement("h3");

search.insertBefore(searchText, search.firstElementChild);
searchText.innerText = "제품 탐색하기";

//page4=============================================================================
// const recommendBtn = document.querySelector(".product_page_recommend_btn");

// for (let i = 0; i < 2; i++) {
//   const a = document.createElement("a");
//   const image = document.createElement("img");

//   recommendBtn.appendChild(a);
//   a.appendChild(image);

//   let btnText = ["내 피부에 맞는 제품 추천받기", "컨설턴트에게 제품 문의하기"];
//   let btnHrefs = [
//     "https://skintest-2e0bb.web.app",
//     "https://kmj-project-212f1.web.app/",
//   ];
//   let target = ["_blank", "_blank"];

//   a.innerText = btnText[i];
//   a.setAttribute("href", btnHrefs[i]);
//   a.setAttribute("target", target[i]);
// }
