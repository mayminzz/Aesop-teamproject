// 버튼 태그 hover 스타일
const btns = document.querySelectorAll(".qa_text button");
const a = document.querySelectorAll(".qa_text button > a");

btns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.background = "#222";
    btn.querySelector("a").style.color = "#fff";
    btn.style.transition = "0.3s";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.background = "";
    btn.querySelector("a").style.color = "";
    btn.style.transition = "0.3s";
  });
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

    const options = document.querySelectorAll("option");
    const nameCountry = document.querySelector(".nameCountry");

    const displaySelect = () => {
      let selectedEl = askSelected.options[askSelected.selectedIndex];
      if (selectedEl.value === "blank") {
        resultForm.style.display = "none";
      }
      if (selectedEl.value === "order") {
        resultForm.classList.add("showForm");
      } else {
        resultForm.classList.remove("showForm");
      } 
    };
    askSelected.addEventListener("change", displaySelect);
  });


