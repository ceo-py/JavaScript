window.addEventListener("load", solve);

function solve() {
  const motor = {
    inputFields: [
      document.querySelector("#colors"),
      document.querySelector("#motorcycles"),
      document.querySelector("#full-name"),
      document.querySelector("#email"),
      document.querySelector("#datetime"),
    ],
    testRide: document.querySelector("#test-ride-btn"),
    preview: document.querySelector("#preview-list"),
    completeList: document.querySelector("#complete-list"),
    complete: document.querySelector(".data-view"),
    form: document.querySelector("form"),
    savedDataInputFields: [],
  };

  const validInputFields = (fields) =>
    fields.every((field) => field.value.trim() != "");

  const editBtn = () => {
    motor.preview.innerHTML = "";
    motor.savedDataInputFields.map((inputField, i) => {
      motor.inputFields[i].value = inputField;
    });
    motor.testRide.disabled = false;
  };
  const nextBtn = (e) => {
    const li = e.target.parentElement.parentElement;
    motor.preview.removeChild(li);
    li.querySelector(".btn-container").remove();
    li.querySelector(
      "article"
    ).innerHTML += `<button class="complete-btn">Complete</button>`;

    li.querySelector("button").addEventListener("click", () => {
      motor.completeList.removeChild(li);
      motor.complete.innerHTML += `
      <button class="confirm-btn">Your Test Ride is Confirmed</button>
      `;
      motor.complete
        .querySelector(".confirm-btn")
        .addEventListener("click", () => {
          location.reload();
        });
    });
    motor.completeList.appendChild(li);
  };

  const createNewTestRide = () => {
    const pTagNames = ["Color:", "Model:", "For:", "Contact:", "Test Ride On:"];
    motor.preview.innerHTML = `
                <li> 
                    <article>
                        ${pTagNames
                          .map(
                            (pTag, i) =>
                              `<p>${pTag} ${motor.inputFields[i].value}</p>`
                          )
                          .join("")}  
                    </article>
                    <div class="btn-container">
                        <button class="edit-btn">Edit</button>
                        <button class="next-btn">Next</button>
                    </div>
                </li>
`;
    [...motor.preview.querySelectorAll("button")].forEach((btn, i) =>
      btn.addEventListener("click", i % 2 == 0 ? editBtn : nextBtn)
    );
    motor.testRide.disabled = true;
    motor.savedDataInputFields = motor.inputFields.map((field) => field.value);
    motor.form.reset();
  };

  const testRide = (e) => {
    if (!validInputFields(motor.inputFields)) return;
    createNewTestRide();
  };
  motor.testRide.addEventListener("click", testRide);
}
