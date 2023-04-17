const inputs_d = document.querySelectorAll('[lazzo-input-date="input"]');
const inputs_dt = document.querySelectorAll('[lazzo-input-datetime="input"]');

inputs_d.forEach((input) => {
  input.setAttribute("type", "date");
});

inputs_dt.forEach((input) => {
  input.setAttribute("type", "datetime-local");
});
