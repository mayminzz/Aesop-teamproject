//main============================================
async function init() {
  const response = await fetch("../json/productNav.json");
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
        <li><a href="#">${productNav.category}</a></li>
      `;
  });
  navWrap.appendChild(ul).innerHTML = nav;

  const navs = document.querySelectorAll(".nav_wrap a");
  navs.forEach((nav) => {
    nav.addEventListener("mouseover", () => {
      nav.style.color = "#DFDFDF";
      nav.style.textDecoration = "underline";
    });
    nav.addEventListener("mouseout", () => {
      nav.style.color = "";
      nav.style.textDecoration = "none";
    });
  });

  //section1 product search
  const searchProductAll = document.querySelector(
    ".product_page_search_product"
  );
  let search = "";

  productNavs.searchProducts.forEach((searchProduct) => {
    search += `
          <a href="${searchProduct.searchLink}">${searchProduct.searchName}
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
            <a class="block" href="${barsoapProduct.productLink}">
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
        <a href="${seasonalProduct.seasonalLink}">
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
          image.src = "../img/product/product_season1.png";
          image.alt = "seasonal1";
        } else if (radio.id === "weight2") {
          image.src = "../img/product/product_season1_1.png";
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
const recommendBtn = document.querySelector(".product_page_recommend_btn");

for (let i = 0; i < 2; i++) {
  const a = document.createElement("a");
  const image = document.createElement("img");

  recommendBtn.appendChild(a);
  a.appendChild(image);

  let btnText = ["내 피부에 맞는 제품 추천받기", "컨설턴트에게 제품 문의하기"];
  let btnHrefs = ["https://finalproject-99c59.web.app/", "https://kmj-project-212f1.web.app/"];

  a.innerText = btnText[i];
  a.setAttribute("href", btnHrefs[i]);

  aTags = document.querySelectorAll(".product_page_recommend_btn a");
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
}
