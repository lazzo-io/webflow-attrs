const input_b_password = document.querySelector('[lazzo-input-password="input"]');
const input_c_password = document.querySelector('[lazzo-input-confirm-password="input"]');

const input_password_btn = document.querySelector('[lazzo-input-password="button"]');

input_b_password.addEventListener("input", function () {
  input_password_btn.classList.add("disabled");

  if (input_c_password.value === input_b_password.value) {
    input_password_btn.classList.remove("disabled");
  }
});

input_c_password.addEventListener("input", function () {
  input_password_btn.classList.add("disabled");

  if (input_c_password.value === input_b_password.value) {
    input_password_btn.classList.remove("disabled");
  }
});
