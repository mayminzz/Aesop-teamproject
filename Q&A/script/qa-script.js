// 버튼 태그 hover 스타일
const consultBox = document.querySelector(".consulting_box");
const aEl = consultBox.querySelector("span a");
const pEl = consultBox.querySelector("p");
const qaForm = document.querySelector(".qa_form");
const helpBtn = document.querySelector(".help_box a");

consultBox.addEventListener("mouseover", () => {
  consultBox.style.background = "#222";
  consultBox.style.opacity = "0.9";
  aEl.style.color = "#fff";
  pEl.style.color = "#fff";
});
consultBox.addEventListener("mouseout", () => {
  consultBox.style.background = "";
  consultBox.style.opacity = "";
  aEl.style.color = "";
  pEl.style.color = "";
});
consultBox.addEventListener("click", () => {
  qaForm.style.display = "block";
});

helpBtn.addEventListener("mouseover", () => {
  helpBtn.style.opacity = "1";
});
helpBtn.addEventListener("mouseout", () => {
  helpBtn.style.opacity = "";
});

// 제출하기 버튼 이벤트
const submitBtn = document.querySelector("#submitbtn");
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let textarea = document.querySelector("textarea");

submitBtn.addEventListener("mouseover", () => {
  submitBtn.style.background = "#222";
  submitBtn.style.opacity = "0.7";
  submitBtn.style.color = "#fff";
});
submitBtn.addEventListener("mouseout", () => {
  submitBtn.style.background = "";
  submitBtn.style.opacity = "";
  submitBtn.style.color = "";
});
submitBtn.addEventListener("click", () => {
  let alarm =
    userName.value !== "" && userEmail.value !== "" && textarea.value !== ""
      ? `${userName.value}님, 문의하신 내용이 제출되었습니다. 감사합니다!`
      : "필수입력 항목을 작성해주세요!";
  alert(alarm);
});

//문의하기 form 태그 양식
const askUrl = "./json/qa.json";
fetch(askUrl)
  .then((response) => response.json())
  .then((json) => {
    // ask Select
    let askOutput = "";
    json.ask.forEach((askList) => {
      askOutput += `
      <option data-name="${askList.data}" value="${askList.value}">${askList.listName}</option>
      `;
    });
    let askSelected = document.querySelector("#ask");
    askSelected.innerHTML = askOutput;

    // order Select
    let orderOutput = "";
    json.orderQuestion.forEach((orderList) => {
      orderOutput += `
      <option>${orderList.list}</option>
      `;
    });

    // product Select
    let productOutput = "";
    json.productQuestion.forEach((prodList) => {
      productOutput += `
      <option>${prodList.list}</option>
      `;
    });

    // return Select
    let returnOutput = "";
    json.returnQuestion.forEach((returnList) => {
      returnOutput += `
      <option>${returnList.list}</option>
      `;
    });

    // client Select
    let clientOutput = "";
    json.clientQuestion.forEach((clientList) => {
      clientOutput += `
      <option value = "client">${clientList.list}</option>
      `;
    });

    const blankSelect = document.querySelector(".blankSelect");
    const blankLabel = document.querySelector(".blankLabel");
    const resultForm = document.querySelector(".qa_form_result");
    const qaPage2 = document.querySelector(".qa_page2");

    const displaySelect = () => {
      let askSelctedVal = document.querySelector("#ask").value;

      if (askSelctedVal == "blank") {
        resultForm.style.display = "none";
        if (window.innerWidth < 767) {
          document.querySelector(".container").style.height = "300vh";
        }
      } else {
        resultForm.style.display = "block";
        if (window.innerWidth < 767) {
          document.querySelector(".container").style.height = "360vh";
        }
        if (askSelctedVal === "order") {
          blankLabel.innerText = "주문에 관련된 질문을 선택해주세요.";
          blankSelect.setAttribute("name", "order");
          blankSelect.innerHTML = orderOutput;
        } else if (askSelctedVal === "product") {
          blankLabel.innerText = "제품에 관련된 질문을 선택해주세요.";
          blankSelect.setAttribute("name", "product");
          blankSelect.innerHTML = productOutput;
        } else if (askSelctedVal === "return") {
          blankLabel.innerText = "반품 & 교환과 관련된 질문을 선택해주세요.";
          blankSelect.setAttribute("name", "return");
          blankSelect.innerHTML = returnOutput;
        } else if (askSelctedVal === "client") {
          blankLabel.innerText = "고객정보와 관련된 질문을 선택해주세요.";
          blankSelect.setAttribute("name", "client");
          blankSelect.innerHTML = clientOutput;
        }
      }
    };
    askSelected.addEventListener("change", displaySelect);
  });
