window.addEventListener("load", solve);

function solve() {
  const elements = {
    inputs: [...document.querySelectorAll("select, input")],
    form: document.querySelector("form"),
    addButton: document.querySelector("#add-activity"),
    preview: document.querySelector("#preview-activity"),
    table: document.querySelector("#activities-table")
  };

  let savedInputs = [];

  const isValid = () => elements.inputs.every(field => field.value.trim());

  const createTableRow = () => {
    const [type, intensity, calories, duration, date] = savedInputs;
    return `
            <tr> 
              <td class="type-cell">${type}</td> 
              <td class="duration-cell">${duration}</td> 
              <td class="calories-cell">${calories}</td> 
              <td class="date-cell">${date}</td> 
              <td class="intensity-cell">${intensity}</td> 
              <td class="btn-cell"> 
                <button class="delete-btn">Delete</button> 
              </td> 
            </tr>`;
  };

  const createPreviewItem = () => {
    const [type, intensity, calories, duration, date] = savedInputs;
    return `
            <li> 
              <article> 
                <p>Activity: ${type}</p> 
                <p>Intensity: ${intensity}</p> 
                <p>Duration: ${duration} min.</p> 
                <p>Date: ${date}</p> 
                <p>Calories: ${calories}</p> 
              </article> 
              <div class="btn-container"> 
                <button class="edit-btn">Edit</button> 
                <button class="next-btn">Next</button> 
              </div> 
            </li>`;
  };

  const handleDelete = e => e.target.closest('tr').remove();

  const handleEdit = e => {
    e.target.closest('li').remove();
    elements.inputs.forEach((field, i) => field.value = savedInputs[i]);
    elements.addButton.disabled = false;
  };

  const handleNext = e => {
    e.target.closest('li').remove();
    elements.addButton.disabled = false;
    elements.table.insertAdjacentHTML('beforeend', createTableRow());
    elements.table.querySelector('.delete-btn:last-child').addEventListener('click', handleDelete);
  };

  const handleAdd = e => {
    e.preventDefault();
    if (!isValid()) return;

    savedInputs = elements.inputs.map(input => input.value);
    elements.addButton.disabled = true;
    elements.form.reset();
    elements.preview.innerHTML = createPreviewItem();

    const [editBtn, nextBtn] = elements.preview.querySelectorAll('button');
    editBtn.addEventListener('click', handleEdit);
    nextBtn.addEventListener('click', handleNext);
  };

  elements.addButton.addEventListener("click", handleAdd);
}






//
// function solve() {
//   const activeMinutes = {
//     inputFields: [...document.querySelectorAll("select, input")],
//     form: document.querySelector("form"),
//     buttons: {
//       addActivity: document.querySelector("#add-activity"),
//     },
//     activities: {
//       previewActivity: document.querySelector("#preview-activity"),
//       table: document.querySelector("#activities-table"),
//     },
//
//     inputFieldsSaved: [],
//   };
//
//   const isInputFieldsValid = (fields) =>
//     fields.every((field) => field.value.trim() != "");
//
//   const deleteBtnHandler = (e) => {
//     e.preventDefault();
//     e.target.parentElement.parentElement.remove();
//   };
//
//   const editBtnHandler = (e) => {
//     e.preventDefault();
//     e.target.parentElement.parentElement.remove();
//     activeMinutes.inputFields.forEach((field, i) => {
//       field.value = activeMinutes.inputFieldsSaved[i];
//     });
//     activeMinutes.buttons.addActivity.disabled = false;
//   };
//
//   const nextBtnHandler = (e) => {
//     e.preventDefault();
//     e.target.parentElement.parentElement.remove();
//     activeMinutes.buttons.addActivity.disabled = false;
//     activeMinutes.activities.table.innerHTML += `
//             <tr>
//               <td class="type-cell">${activeMinutes.inputFieldsSaved[0]}</td>
//               <td class="duration-cell">${activeMinutes.inputFieldsSaved[3]}</td>
//               <td class="calories-cell">${activeMinutes.inputFieldsSaved[2]}</td>
//               <td class="date-cell">${activeMinutes.inputFieldsSaved[4]}</td>
//               <td class="intensity-cell">${activeMinutes.inputFieldsSaved[1]}</td>
//               <td class="btn-cell">
//                 <button class="delete-btn">Delete</button>
//               </td>
//             </tr>
//       `;
//       [...activeMinutes.activities.table.querySelectorAll("button")].forEach(b => b.addEventListener("click", deleteBtnHandler));
//   };
//
//   const addBtnHandler = (e) => {
//     e.preventDefault();
//     if (!isInputFieldsValid(activeMinutes.inputFields)) {
//       return;
//     }
//     activeMinutes.inputFieldsSaved = activeMinutes.inputFields.map(
//       (field) => field.value
//     );
//     activeMinutes.buttons.addActivity.disabled = true;
//     activeMinutes.form.reset();
//     activeMinutes.activities.previewActivity.innerHTML = `
//             <li>
//               <article>
//                 <p>Activity: ${activeMinutes.inputFieldsSaved[0]}</p>
//                 <p>Intensity: ${activeMinutes.inputFieldsSaved[1]}</p>
//                 <p>Duration: ${activeMinutes.inputFieldsSaved[3]} min.</p>
//                 <p>Date: ${activeMinutes.inputFieldsSaved[4]}</p>
//                 <p>Calories: ${activeMinutes.inputFieldsSaved[2]} </p>
//               </article>
//               <div class="btn-container">
//                 <button class="edit-btn">Edit</button>
//                 <button class="next-btn">Next</button>
//               </div>
//             </li>
//     `;
//     [
//       ...activeMinutes.activities.previewActivity.querySelectorAll("button"),
//     ].forEach((btn, i) => {
//       btn.addEventListener("click", i === 0 ? editBtnHandler : nextBtnHandler);
//     });
//   };
//
//   activeMinutes.buttons.addActivity.addEventListener("click", addBtnHandler);
// }



