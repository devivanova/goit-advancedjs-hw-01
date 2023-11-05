import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const { email, message } = form.elements;

form.addEventListener("input", throttle(onInputData, 500));
form.addEventListener("submit", onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(localStorageKey)) || {};
reloadPage();

function onInputData() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(localStorageKey, JSON.stringify(dataForm));
}

function reloadPage() {
  email.value = dataForm.email || "";
  message.value = dataForm.message || "";
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === "") {
    return alert("Please fill your email");
  }
    
  if (message.value === "") {
    return alert("Please write your message");
  }

  localStorage.removeItem(localStorageKey);
  event.currentTarget.reset();
  dataForm = {};
}
