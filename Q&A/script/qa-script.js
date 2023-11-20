// 버튼 태그 hover 스타일
const consultBox = document.querySelector(".consulting_box");
const spanEl = consultBox.querySelector("span");
const pEl = consultBox.querySelector("p");
const qaForm = document.querySelector(".qa_form");
const helpBtn = document.querySelector(".help_box a");

consultBox.addEventListener("mouseover", () => {
  consultBox.style.background = "#222";
  consultBox.style.opacity = "0.9";
  spanEl.style.color = "#fff";
  pEl.style.color = "#fff";
});
consultBox.addEventListener("mouseout", () => {
  consultBox.style.background = "";
  consultBox.style.opacity = "";
  spanEl.style.color = "";
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

submitBtn.addEventListener("click", () => {
  if (userName.value !== "" && userEmail.value !== "") {
    alert(`${userName.value}님, 문의하신 내용이 제출되었습니다. 감사합니다!`);
  } else {
    alert("필수입력 항목을 작성해주세요!");
  }
});

//문의하기 form 태그 양식
const askUrl = "../json/qa.json";
fetch(askUrl)
  .then((response) => response.json())
  .then((json) => {
    let askOutput = "";
    json.ask.forEach((askList) => {
      askOutput += `
      <option data-name="${askList.data}" value="${askList.value}">${askList.listName}</option>
      `;
    });
    const askSelected = document.querySelector("#ask");
    askSelected.innerHTML = askOutput;

    let orderOutput = "";
    json.orderQuestion.forEach((orderList) => {
      orderOutput += `
      <option>${orderList.list}</option>
      `;
    });
    const resultForm = document.querySelector(".qa_form_result");
    const orderSelect = document.createElement("select");
    orderSelect.setAttribute("name", "orderList");
    orderSelect.innerHTML = orderOutput;
    const labelEl = document.createElement("label");

    // /////
    




    const displaySelect = () => {
      let selectedEl = askSelected.options[askSelected.selectedIndex];

      if (selectedEl.value === "blank") {
        resultForm.style.display = "none";
      }
      if (selectedEl.value === "order") {
        resultForm.classList.add("showForm");
        resultForm.insertBefore(orderSelect, resultForm.firstChild);
        labelEl.innerHTML = `<label for="orderList">문의하과자 하는 질문을 선택해주세요.</label>`
        resultForm.insertBefore(labelEl, resultForm.firstChild)
      }


      // if (selectedEl.value === "return") {
      //   resultForm.classList.add("showForm");
      // }
      // if (selectedEl.value === "client") {
      //   resultForm.classList.add("showForm");
      // }
      // if (selectedEl.value === "etc") {
      //   resultForm.classList.add("showForm");
      // }
    };
    askSelected.addEventListener("change", displaySelect);
  });
