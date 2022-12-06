const input_number = document.querySelector('[lazzo-input-number="input"]');

const input_number_btn_increase = document.querySelector('[lazzo-input-number="increase"]');

const input_number_btn_decrease = document.querySelector('[lazzo-input-number="decrease"]');

function increaseNumber() {
  if (input_number.value >= 99) return;

  input_number.value = Number(input_number.value) + 1;
}

function decreaseNumber() {
  if (input_number.value <= 1) return;

  input_number.value = Number(input_number.value) - 1;
}

//Handle increse and decrease buttons
input_number_btn_increase.addEventListener("click", increaseNumber);

input_number_btn_decrease.addEventListener("click", decreaseNumber);
