const inputs_qp = document.querySelectorAll('[lazzo-input-query-param="input"]');

inputs_qp.forEach((input) => {
  let urlParams = new URLSearchParams(window.location.search);

  let qp = input.getAttribute("lazzo-value-query-param");

  try {
    input.value = urlParams.get(qp);
  } catch (e) {
    console.log("LAZZO Attrs => Please check your 'lazzo-input-query-param', they are having a problem");
  }
});
