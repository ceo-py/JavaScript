window.addEventListener("load", solve);

function solve() {
  const vacationSchedule = {
    inputFields: [...document.querySelectorAll("input")],
    infoList: document.querySelector(".info-list"),
    confirmList: document.querySelector(".confirm-list"),
    statusMsg: document.querySelector("#ok"),
    status: document.querySelector("#status"),
    nextBtn: document.querySelector("#next-btn"),
    form: document.querySelector("form"),
    currentInputFieldData: [],
  };

  const isInputFieldsValid = (inputFields) => {
    return inputFields.some((x) => x.value === "");
  };
  const isDatePeriodValid = (fromDate, toDate) => {
    return (
      new Date(toDate.value.valueOf()) > new Date(fromDate.value.valueOf())
    );
  };

  const addEventListenerToButtons = (
    html,
    functionEvenIndex,
    functionOddIndex
  ) => {
    [...html.querySelectorAll("button")].forEach((b, i) =>
      b.addEventListener(
        "click",
        i % 2 === 0 ? functionEvenIndex : functionOddIndex
      )
    );
  };

  const editBtn = () => {
    vacationSchedule.infoList.innerHTML = "";
    vacationSchedule.nextBtn.disabled = false;
    vacationSchedule.inputFields.forEach(
      (x, i) => (x.value = vacationSchedule.currentInputFieldData[i])
    );
  };
  const continueBtn = (e) => {
    const selectedElement = e.target.parentElement;
    vacationSchedule.infoList.removeChild(selectedElement);
    [...selectedElement.querySelectorAll("button")].forEach((b) => b.remove());
    vacationSchedule.confirmList.appendChild(selectedElement);
    vacationSchedule.confirmList.querySelector(".vacation-content").innerHTML += `
        <button class="confirm-btn">Confirm</button>
        <button class="cancel-btn">Cancel</button>
        `;
    addEventListenerToButtons(
      vacationSchedule.confirmList,
      confirmBtn,
      cancelBtn
    );
  };

  const addReloadOnClickStatusMsg = () => {
    vacationSchedule.statusMsg.addEventListener("click", () => {
      window.location.reload();
    });
  };

  const confirmBtn = () => {
    vacationSchedule.statusMsg.innerHTML = "";
    vacationSchedule.confirmList.innerHTML = "";
    vacationSchedule.statusMsg.innerHTML = `
        <h1 id="status" class="vacation-confirmed">Vacation Requested</h1>
    `;
    vacationSchedule.nextBtn.disabled = false;
    addReloadOnClickStatusMsg();
  };
  const cancelBtn = () => {
    vacationSchedule.statusMsg.innerHTML = "";
    vacationSchedule.confirmList.innerHTML = "";
    vacationSchedule.statusMsg.innerHTML = `
        <h1 id="status" class="vacation-cancelled">Cancelled Vacation</h1>
    `;
    vacationSchedule.nextBtn.disabled = false;
    addReloadOnClickStatusMsg();
  };

  const nextBtn = (e) => {
    e.preventDefault();
    if (isInputFieldsValid(vacationSchedule.inputFields)) return;
    if (!isDatePeriodValid(...vacationSchedule.inputFields.slice(2))) return;
    vacationSchedule.infoList.innerHTML = "";
    vacationSchedule.infoList.innerHTML = `
    <li class="vacation-content">
        <article>
            <h3>Name: ${vacationSchedule.inputFields[0].value} ${vacationSchedule.inputFields[1].value}</h3>
            <p>From date: ${vacationSchedule.inputFields[2].value}</p>
            <p>To date: ${vacationSchedule.inputFields[3].value}</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>
    </li>
    `;
    addEventListenerToButtons(vacationSchedule.infoList, editBtn, continueBtn);
    vacationSchedule.currentInputFieldData = vacationSchedule.inputFields.map(
      (x) => x.value
    );
    vacationSchedule.nextBtn.disabled = true;
    vacationSchedule.form.reset();
  };

  vacationSchedule.nextBtn.addEventListener("click", nextBtn);
  
}
